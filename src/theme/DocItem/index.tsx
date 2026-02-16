import React, { type ReactNode } from 'react'
import DocItem from '@theme-original/DocItem'
import type DocItemType from '@theme/DocItem'
import type { WrapperProps } from '@docusaurus/types'
import DocMetaWarning from '@site/src/components/theme/DocMeta/DocMetaWarning'
import DocMetaBar from '@site/src/components/theme/DocMeta/DocMetaBar'
import styles from './styles.module.css'
import DocRelations from '@site/src/components/theme/DocMeta/DocRelations'

type Props = WrapperProps<typeof DocItemType>

export default function DocItemWrapper(props: Props): ReactNode {
  const { content } = props
  const frontMatter = content?.metadata?.frontMatter ?? {}
  const {
    ['doc-kind']: docKind,
    maintenance,
    audience,
    ['review-cycle']: reviewCycle,
    related,
    future,
  } = frontMatter as {
    ['doc-kind']?: string
    maintenance?: string
    audience?: string[]
    ['review-cycle']?: string
    related?: string[]
    future?: string[]
  }

  console.log(content.metadata)

  if (!docKind) {
    return <div className={`${styles.error}`}>kind が設定されていません。</div>
  }

  if (!maintenance) {
    return (
      <div className={`${styles.error}`}>
        maintenance が 設定されていません。
      </div>
    )
  }

  if (!audience) {
    return (
      <div className={`${styles.error}`}>audience が設定されていません。</div>
    )
  }

  if (!reviewCycle) {
    return (
      <div className={`${styles.error}`}>
        reviewCycle が 設定されていません。
      </div>
    )
  }

  return (
    <>
      <DocMetaBar
        docKind={docKind}
        maintenance={maintenance}
        audience={audience}
        reviewCycle={reviewCycle}
      />

      <DocMetaWarning maintenance={maintenance} />

      <DocItem {...props} />

      <DocRelations related={related} future={future} />
    </>
  )
}
