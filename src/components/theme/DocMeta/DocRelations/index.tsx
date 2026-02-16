import styles from './styles.module.css'
import Link from '@docusaurus/Link'
type Props = {
  related?: string[]
  future?: string[]
}

export default function DocRelations({ related, future }: Props) {
  if (!related?.length && !future?.length) return null

  return (
    <div className={styles.container}>
      {related && related.length > 0 && (
        <div className={styles.section}>
          <div className={styles.title}>Related</div>
          <ul>
            {related.map((item) => (
              <li key={item}>
                <Link target="_blank" to={`${item}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {future && future.length > 0 && (
        <div className={styles.section}>
          <div className={styles.title}>Future</div>
          <ul>
            {future.map((item) => (
              <li key={item}>
                <Link target="_blank" to={`${item}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
