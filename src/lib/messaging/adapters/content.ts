import type { Adapter, Message, MessageMeta, OnMessage, SendMessage } from 'comctx';
import { browser, type Browser } from 'wxt/browser';

export const CONTENT_RPC_NAMESPACE = 'red-detector.content-rpc.v1';
export const CONTENT_RPC_CHANNEL = 'content-rpc';

export type ContentRpcMeta = MessageMeta & {
  channel: typeof CONTENT_RPC_CHANNEL;
  tab_id: number;
  frame_id?: number;
  sender_url?: string;
};

export function createContentClientAdapter(
  tabId: number,
  frameId?: number,
): Adapter<ContentRpcMeta> {
  const sendMessage: SendMessage<ContentRpcMeta> = async (message) => {
    await browser.tabs.sendMessage(
      tabId,
      {
        ...message,
        meta: {
          ...message.meta,
          channel: CONTENT_RPC_CHANNEL,
          tab_id: tabId,
          frame_id: frameId,
        },
      },
      typeof frameId === 'number' ? { frameId } : undefined,
    );
  };

  const onMessage: OnMessage<ContentRpcMeta> = (callback) => {
    const listener = (rawMessage: unknown, sender: Browser.runtime.MessageSender) => {
      const message = rawMessage as Partial<Message<ContentRpcMeta>>;

      if (message.namespace !== CONTENT_RPC_NAMESPACE) {
        return;
      }

      if (message.meta?.channel !== CONTENT_RPC_CHANNEL) {
        return;
      }

      if (sender.tab?.id !== tabId) {
        return;
      }

      if (typeof frameId === 'number' && sender.frameId !== frameId) {
        return;
      }

      callback({
        ...message,
        meta: {
          ...message.meta,
          tab_id: sender.tab?.id ?? tabId,
          frame_id: sender.frameId,
          sender_url: sender.url,
        },
      });
    };

    browser.runtime.onMessage.addListener(listener);
    return () => browser.runtime.onMessage.removeListener(listener);
  };

  return { sendMessage, onMessage };
}

export function createContentServerAdapter(): Adapter<ContentRpcMeta> {
  const sendMessage: SendMessage<ContentRpcMeta> = async (message) => {
    await browser.runtime.sendMessage({
      ...message,
      meta: {
        ...message.meta,
        channel: CONTENT_RPC_CHANNEL,
      },
    });
  };

  const onMessage: OnMessage<ContentRpcMeta> = (callback) => {
    const listener = (rawMessage: unknown) => {
      const message = rawMessage as Partial<Message<ContentRpcMeta>>;

      if (message.namespace !== CONTENT_RPC_NAMESPACE) {
        return;
      }

      if (message.meta?.channel !== CONTENT_RPC_CHANNEL) {
        return;
      }

      callback(message);
    };

    browser.runtime.onMessage.addListener(listener);
    return () => browser.runtime.onMessage.removeListener(listener);
  };

  return { sendMessage, onMessage };
}