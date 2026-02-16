import styles from './styles.module.css'

export default function DocMetaWarning({
  maintenance,
}: {
  maintenance?: string
}) {
  if (maintenance === 'archived') {
    return (
      <div className={`${styles.warning} ${styles.archived}`}>
        ⚠ アーカイブ（ARCHIVED） –
        メンテナンスされておらず、内容が古い可能性があります。
      </div>
    )
  }

  if (maintenance === 'frozen') {
    return (
      <div className={`${styles.warning} ${styles.frozen}`}>
        🔒 凍結（FROZEN） – メンテナンス対象外です（履歴的な参考資料）。
      </div>
    )
  }

  return null
}
