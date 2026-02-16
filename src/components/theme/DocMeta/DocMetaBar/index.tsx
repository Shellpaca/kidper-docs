import styles from './styles.module.css'

type Props = {
  docKind: string
  maintenance: string
  audience: string[]
  reviewCycle: string
}

export default function DocMetaBar({
  docKind,
  maintenance,
  audience,
  reviewCycle,
}: Props) {
  return (
    <div className={styles.docMetaBar}>
      <div className={styles.metaBar}>
        <div className={styles.topRow}>
          <span
            className={`${styles.badge} ${styles.kind} ${styles.badgeUppercase}
            ${docKind === 'usecase' && styles.kindUsecase}
            ${docKind === 'api' && styles.kindApi}
            ${docKind === 'domain' && styles.kindDomain}
            ${docKind === 'doc' && styles.kindDoc}
            ${docKind === 'operation' && styles.kindOperation}
            ${docKind === 'security' && styles.kindSecurity}
            ${docKind === 'test' && styles.kindTest}
          `}
          >
            {docKind}
          </span>

          <span
            className={`${styles.badge} ${styles.badgeUppercase}
            ${maintenance === 'active' && styles.maintenanceActive}
            ${maintenance === 'archived' && styles.maintenanceArchived}
            ${maintenance === 'frozen' && styles.maintenanceFrozen}
          `}
          >
            {maintenance}
          </span>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.audienceGroup}>
            <span className={styles.label}>Audience</span>
            {audience.map((a) => (
              <span
                key={a}
                className={`${styles.badge} ${styles.audienceBadge}`}
              >
                {a}
              </span>
            ))}
          </div>

          <div>
            <span className={styles.label}>ReviewCycle</span>
            <span
              className={`${styles.reviewCycle}
              ${reviewCycle === 'every-release' && styles.reviewCycleEveryRelease}
              ${reviewCycle === 'quarterly' && styles.reviewCycleQuarterly}
              ${reviewCycle === 'none' && styles.reviewCycleNone}
              `}
            >
              {reviewCycle}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
