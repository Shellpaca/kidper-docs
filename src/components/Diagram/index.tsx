import useBaseUrl from '@docusaurus/useBaseUrl'
import { ExternalLink } from 'lucide-react'
import styles from './styles.module.css'

export default function Diagram({
  src,
  alt,
  maxWidth = 100,
}: {
  src: string
  alt: string
  maxWidth?: number
}) {
  const linkUrl = useBaseUrl(src)

  return (
    <div className={styles.container}>
      <ExternalLink
        className={styles.externalLink}
        onClick={() => window.open(linkUrl)}
      />
      <img
        src={linkUrl}
        alt={alt}
        style={{
          maxWidth: `${maxWidth}%`,
        }}
      />
    </div>
  )
}
