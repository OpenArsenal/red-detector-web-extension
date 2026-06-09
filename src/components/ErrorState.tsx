export function ErrorState(props: { message: string }) {
	return <p class="status-message warning">{props.message}</p>;
}

export default ErrorState;
