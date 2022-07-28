import {useMemo} from "react";

export default ({article}) => {
  const {title, description, url, urlToImage, source} = article

  const modifiedImg = useMemo(() => {
    switch (source.name) {
      case 'Donga.com': return urlToImage.startsWith('https://', 0) ? urlToImage : `https://it.donga.com/${urlToImage}`

      default: return urlToImage
    }
  }, [source, urlToImage])

  return (
    <div className="card card-side bg-base-100 shadow-xl mb-8 grid grid-cols-9">
      {modifiedImg && <figure className="col-span-3">
        <img src={modifiedImg} alt={`${title} thumbnail`} className="w-full h-full max-w-full" />
      </figure>}
      <div className={`card-body ${modifiedImg ? 'col-span-6' : 'col-span-9'}`}>
        <h2 className="card-title">
          <a href={url} target="_blank">{title}</a>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <h3>{source.name}</h3>
        </div>
      </div>
    </div>
  )
}