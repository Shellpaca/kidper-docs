import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "成長を記録",
    Svg: require("@site/static/img/fatherhood.svg").default,
    description: (
      <>
        今日、撮った子どもの写真をアルバムにして残したい。みんなで写真を見て思い出を話したい。
        子どもの成長を記録したい。
      </>
    ),
  },
  {
    title: "家族に共有",
    Svg: require("@site/static/img/family.svg").default,
    description: (
      <>
        撮った写真やアルバムを家族に共有してみてもらいたい。家族に見守っていて欲しい。
      </>
    ),
  },
  {
    title: "オープンソース",
    Svg: require("@site/static/img/children.svg").default,
    description: (
      <>
        無制限に写真を残したい。お金をできるだけかけたくない。外部のアプリケーションに管理されたくない。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
