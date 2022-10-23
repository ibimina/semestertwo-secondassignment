export default function ErrorComponent({ error }) {
  return (
    <div>
      <p>something went wrong</p>
      <p>{error.message}</p>
    </div>
  );
}
