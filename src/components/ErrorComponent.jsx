export default function ErrorComponent({ error }) {
  return (
    <div className="redirect">
      <p>something went wrong</p>
      <p>{error.message}</p>
    </div>
  );
}
