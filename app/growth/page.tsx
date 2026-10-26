import Link from "next/link";

const quarters = [
  {
    key: "Q1",
    period: "01.01 — 03.31",
    badge: "完整季度",
    days: 90,
    start: 35059,
    end: 38916,
    newFollowers: 4943,
    unfollows: 1086,
    net: 3857,
    dailyNew: 54.9,
    dailyNet: 42.9,
    growthRate: 11.0,
    unfollowRate: 22.0,
    tone: "q1",
  },
  {
    key: "Q2",
    period: "04.01 — 06.30",
    badge: "完整季度",
    days: 91,
    start: 38916,
    end: 43461,
    newFollowers: 5807,
    unfollows: 1262,
    net: 4545,
    dailyNew: 63.8,
    dailyNet: 49.9,
    growthRate: 11.7,
    unfollowRate: 21.7,
    tone: "q2",
  },
  {
    key: "Q3",
    period: "07.01 — 09.30",
    badge: "完整季度",
    days: 92,
    start: 43461,
    end: 48943,
    newFollowers: 6922,
    unfollows: 1440,
    net: 5482,
    dailyNew: 75.2,
    dailyNet: 59.6,
    growthRate: 12.6,
    unfollowRate: 20.8,
    tone: "q3",
  },
] as const;

const number = new Intl.NumberFormat("zh-CN");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const maxDailyNet = Math.max(...quarters.map((quarter) => quarter.dailyNet));
const maxDailyNew = Math.max(...quarters.map((quarter) => quarter.dailyNew));

export const metadata = {
  title: "用户增长季度对比｜2026 公众号数据看板",
  description: "Q1、Q2、Q3 用户增长指标鲜明对比。",
};

export default function GrowthComparison() {
  return (
    <main className="growth-page">
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src={`${basePath}/maycur-logo.png`} alt="Maycur 每刻" />
          <div>
            <span>微信公众号运营数据中心</span>
          </div>
        </div>
        <nav className="main-nav" aria-label="主要页面">
          <Link href="/">综合看板</Link>
          <Link className="active" href="/growth">用户增长对比</Link>
        </nav>
        <div className="updated">
          <span className="live-dot" />
          数据更新至 2026.09.30
        </div>
      </header>

      <section className="growth-hero">
        <div>
          <p className="eyebrow">USER GROWTH COMPARISON</p>
          <h1>用户增长季度对比</h1>
          <p>
            将季度总量与日均效率拆开看，既看规模，也看增长速度。
          </p>
        </div>
        <div className="growth-hero-brand">
          <img src={`${basePath}/maycur-mascot.png`} alt="每刻吉祥物每小刻" />
          <div className="growth-hero-stat">
            <span>每小刻关注增长播报</span>
            <strong>+13,884</strong>
            <small>年内累计净增 · 35,059 → 48,943</small>
          </div>
        </div>
      </section>

      <section className="comparison-banner">
        <div>
          <span>Q2 vs Q1</span>
          <strong>净增关注 +17.8%</strong>
          <p>完整季度增长规模继续扩大</p>
        </div>
        <i />
        <div className="featured-insight">
          <span>Q3 vs Q2</span>
          <strong>净增关注 +20.6%</strong>
          <p>日均净增同步提升 19.4%</p>
        </div>
        <i />
        <div>
          <span>增长质量</span>
          <strong>取关率降至 20.8%</strong>
          <p>新增扩大的同时，流失比例下降</p>
        </div>
      </section>

      <section className="quarter-comparison">
        {quarters.map((quarter) => (
          <article className={`quarter-column ${quarter.tone}`} key={quarter.key}>
            <div className="quarter-column-head">
              <div>
                <span>{quarter.badge}</span>
                <h2>{quarter.key}</h2>
                <p>{quarter.period} · {quarter.days}天</p>
              </div>
              <div className="growth-chip">+{quarter.growthRate}%</div>
            </div>

            <div className="net-highlight">
              <span>净增关注</span>
              <strong>+{number.format(quarter.net)}</strong>
              <small>{number.format(quarter.start)} → {number.format(quarter.end)}</small>
            </div>

            <div className="velocity-chart">
              <div>
                <span>{quarter.dailyNew}</span>
                <i className="daily-new" style={{ height: `${(quarter.dailyNew / maxDailyNew) * 100}%` }} />
                <b>日均新增</b>
              </div>
              <div>
                <span>{quarter.dailyNet}</span>
                <i className="daily-net" style={{ height: `${(quarter.dailyNet / maxDailyNet) * 100}%` }} />
                <b>日均净增</b>
              </div>
            </div>

            <div className="quarter-metrics">
              <div><span>新增关注</span><b>{number.format(quarter.newFollowers)}</b></div>
              <div><span>取消关注</span><b>{number.format(quarter.unfollows)}</b></div>
              <div><span>取关率</span><b>{quarter.unfollowRate}%</b></div>
              <div><span>期末关注</span><b>{number.format(quarter.end)}</b></div>
            </div>
          </article>
        ))}
      </section>

      <section className="growth-story">
        <div className="story-heading">
          <p className="section-kicker">GROWTH STORY</p>
          <h2>增长曲线：规模、速度、质量同步改善</h2>
        </div>
        <div className="story-line">
          {quarters.map((quarter, index) => (
            <div className="story-node" key={quarter.key}>
              <span>0{index + 1}</span>
              <strong>{number.format(quarter.end)}</strong>
              <small>{quarter.key} 期末累计关注</small>
            </div>
          ))}
        </div>
        <div className="growth-actions">
          <article>
            <span>保持</span>
            <h3>强化高质量获客</h3>
            <p>Q3 日均新增达到 75.2，较 Q2 提升 17.9%，继续强化标杆客户与 AI 产品内容。</p>
          </article>
          <article>
            <span>优化</span>
            <h3>控制关注流失</h3>
            <p>取关率连续下降，建议复盘高取关日期及对应推送主题，持续降低波动。</p>
          </article>
          <article>
            <span>验证</span>
            <h3>联动阅读与转化</h3>
            <p>用户增长已经提速，下一步需验证新增关注能否转化为稳定阅读和内容互动。</p>
          </article>
        </div>
      </section>

      <footer>
        <p>Q1、Q2、Q3 均为完整季度，用户增长按微信公众平台每日数据汇总。</p>
        <p>© 2026 每刻科技 · 用户增长季度对比</p>
      </footer>
    </main>
  );
}
