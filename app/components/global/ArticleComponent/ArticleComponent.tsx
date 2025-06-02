interface ArticleI {
  title?: string;
  image?: string;
  content?: string;
  randomNumber?:number;
  children?: React.ReactNode;
}

export default function ArticleComponent({
  title,
  image,
  content,
  randomNumber,
  children,
}: ArticleI) {
  return children ? (
    <article>{children}</article>
  ) : (
    <article>
      <h2>{title ?? "Aucun titre"}</h2>
      {image && (
        <img
          src={image}
          alt={title ?? "Image de l'article"}
        />
      )}
      <p>{content ?? "Aucun contenu n'a été défini."}</p>
    </article>
  );
}
