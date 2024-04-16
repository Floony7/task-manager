export default function UserIdPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <h1>Id Page: {params.id}</h1>
    </section>
  );
}
