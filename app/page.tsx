"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type QuarterKey = "Q1" | "Q2" | "Q3";

const quarterOrder: QuarterKey[] = ["Q1", "Q2", "Q3"];

const quarterData = {
  Q1: {
    label: "Q1",
    period: "01.01 — 03.31",
    days: 90,
    start: 35059,
    end: 38916,
    newFollowers: 4943,
    unfollows: 1086,
    net: 3857,
    growthRate: 11.0,
    dailyNet: 42.9,
    reads: 12288,
    dailyReads: 136.5,
    shares: 679,
    saves: 33,
    published: 15,
    readsPerArticle: 819.2,
    shareRate: 5.5,
    saveRate: 0.27,
    channels: [
      ["朋友圈", 35.4],
      ["公众号消息", 32.0],
      ["搜一搜", 12.6],
      ["聊天会话", 10.6],
      ["公众号主页", 7.3],
      ["其他", 2.1],
    ],
    articles: [
      ["重磅里程碑！每刻科技2025财年实现净利润与经营净现金流“双转正”", 2938, "里程碑"],
      ["每刻×OpenClaw：狂喜！每刻把小龙虾端到财务人桌上了！", 1283, "AI产品"],
      ["每刻科技2026年春节期间放假通知", 988, "品牌信息"],
    ],
    takeaway: "里程碑内容贡献季度峰值，净增关注稳步累积。",
  },
  Q2: {
    label: "Q2",
    period: "04.01 — 06.30",
    days: 91,
    start: 38916,
    end: 43461,
    newFollowers: 5807,
    unfollows: 1262,
    net: 4545,
    growthRate: 11.7,
    dailyNet: 49.9,
    reads: 9917,
    dailyReads: 109.0,
    shares: 649,
    saves: 36,
    published: 19,
    readsPerArticle: 521.9,
    shareRate: 6.5,
    saveRate: 0.36,
    channels: [
      ["公众号消息", 34.0],
      ["朋友圈", 30.8],
      ["搜一搜", 15.8],
      ["聊天会话", 8.8],
      ["公众号主页", 8.3],
      ["其他", 2.3],
    ],
    articles: [
      ["名创优品与每刻科技战略携手 以AI+全球化+行业化共启财务新纪元", 1860, "标杆客户"],
      ["【荣誉】每刻科技成功入选2026人工智能分类排行榜-2026年度AI SaaS企业TOP30", 896, "品牌荣誉"],
      ["当报销有了“AI同事”：每个角色都配了一位“数字搭档”", 744, "AI产品"],
    ],
    takeaway: "增长提速、互动质量提升，但发文增加未带动阅读规模。",
  },
  Q3: {
    label: "Q3",
    period: "07.01 — 09.30",
    days: 92,
    start: 43461,
    end: 48943,
    newFollowers: 6922,
    unfollows: 1440,
    net: 5482,
    growthRate: 12.6,
    dailyNet: 59.6,
    reads: 8382,
    dailyReads: 91.1,
    shares: 543,
    saves: 40,
    published: 21,
    readsPerArticle: 399.1,
    shareRate: 6.5,
    saveRate: 0.48,
    channels: [
      ["公众号消息", 38.2],
      ["朋友圈", 27.2],
      ["搜一搜", 14.2],
      ["公众号主页", 8.8],
      ["聊天会话", 8.6],
      ["其他（含推荐）", 3.0],
    ],
    articles: [
      ["世界500强顺丰集团携手每刻科技，共创AI数智费控新标杆", 1206, "标杆客户"],
      ["每刻科技5-7月重点功能速递：AI审核、全球化、规则引擎全面升级", 719, "产品升级"],
      ["采购应付如何打通对公支付？每刻应付 × 每刻报销实现供应商付款全流程自动化", 571, "产品方案"],
    ],
    takeaway: "净增关注与增长率均为三季度最高，内容阅读效率仍需修复。",
  },
} as const;

const number = new Intl.NumberFormat("zh-CN");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function delta(current: number, previous: number) {
  return ((current / previous - 1) * 100).toFixed(1);
}

export default function Home() {
  const [activeQuarter, setActiveQuarter] = useState<QuarterKey>("Q3");
  const active = quarterData[activeQuarter];
  const maxNet = Math.max(...quarterOrder.map((key) => quarterData[key].net));
  const maxReads = Math.max(...quarterOrder.map((key) => quarterData[key].dailyReads));

  const ring = useMemo(() => {
    const colors = ["#2563eb", "#38bdf8", "#4f7df3", "#60a5fa", "#818cf8", "#94a3b8"];
    let cursor = 0;
    return `conic-gradient(${active.channels
      .map(([, value], index) => {
        const start = cursor;
        cursor += value;
        return `${colors[index]} ${start}% ${cursor}%`;
      })
      .join(", ")})`;
  }, [active]);

  return (
    <main>
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src={`${basePath}/maycur-logo.png`} alt="Maycur 每刻" />
          <div>
            <span>微信公众号运营数据中心</span>
          </div>
        </div>
        <nav className="main-nav" aria-label="主要页面">
          <Link className="active" href="/">综合看板</Link>
          <Link href="/growth">用户增长对比</Link>
        </nav>
        <div className="updated">
          <span className="live-dot" />
          数据更新至 2026.09.30
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">2026 PERFORMANCE OVERVIEW</p>
          <h1>公众号季度数据看板</h1>
          <p className="hero-note">
            聚焦用户增长、内容效率与渠道质量，完整呈现 2026 年前三季度表现。
          </p>
        </div>
        <div className="quarter-switch" aria-label="选择季度">
          {quarterOrder.map((quarter) => (
            <button
              key={quarter}
              className={activeQuarter === quarter ? "active" : ""}
              onClick={() => setActiveQuarter(quarter)}
              aria-pressed={activeQuarter === quarter}
            >
              <b>{quarter}</b>
              <span>{quarterData[quarter].period}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="status-strip">
        <span className="status-pill">完整季度</span>
        <strong>{active.label} · {active.period}</strong>
        <span>{active.days} 天数据</span>
        <span className="status-insight">{active.takeaway}</span>
      </section>

      <section className="kpi-grid">
        <article className="kpi-card featured">
          <div className="kpi-head">
            <span>累计关注人数</span>
            <span className="icon-bubble">↗</span>
          </div>
          <strong>{number.format(active.end)}</strong>
          <div className="kpi-meta">
            <span className="positive">+{number.format(active.net)}</span>
            <span>期初 {number.format(active.start)}</span>
          </div>
          <div className="mini-progress">
            <i style={{ width: `${Math.min(active.growthRate * 6.5, 100)}%` }} />
          </div>
        </article>

        <article className="kpi-card">
          <div className="kpi-head"><span>净增关注</span><span>用户</span></div>
          <strong>{number.format(active.net)}</strong>
          <div className="kpi-meta">
            <span>日均 {active.dailyNet}</span>
            <span>增长率 {active.growthRate}%</span>
          </div>
        </article>

        <article className="kpi-card">
          <div className="kpi-head"><span>总阅读人数</span><span>内容</span></div>
          <strong>{number.format(active.reads)}</strong>
          <div className="kpi-meta">
            <span>日均 {active.dailyReads}</span>
            <span>去重口径</span>
          </div>
        </article>

        <article className="kpi-card">
          <div className="kpi-head"><span>篇均阅读</span><span>效率</span></div>
          <strong>{active.readsPerArticle}</strong>
          <div className="kpi-meta">
            <span>{active.published} 篇内容</span>
            <span>分享率 {active.shareRate}%</span>
          </div>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel trend-panel">
          <div className="panel-heading">
            <div>
              <p className="section-kicker">季度对比</p>
              <h2>增长动能持续抬升</h2>
            </div>
            <div className="legend">
              <span><i className="legend-net" />净增关注</span>
              <span><i className="legend-read" />日均阅读</span>
            </div>
          </div>
          <div className="trend-chart">
            {quarterOrder.map((quarter) => {
              const item = quarterData[quarter];
              return (
                <button
                  className={`trend-group ${activeQuarter === quarter ? "selected" : ""}`}
                  key={quarter}
                  onClick={() => setActiveQuarter(quarter)}
                  aria-label={`查看${quarter}数据`}
                >
                  <div className="bars">
                    <div className="bar-column">
                      <span>{number.format(item.net)}</span>
                      <i className="bar net-bar" style={{ height: `${(item.net / maxNet) * 100}%` }} />
                    </div>
                    <div className="bar-column">
                      <span>{item.dailyReads}</span>
                      <i className="bar read-bar" style={{ height: `${(item.dailyReads / maxReads) * 82}%` }} />
                    </div>
                  </div>
                  <strong>{quarter}</strong>
                  <small>{item.period}</small>
                </button>
              );
            })}
          </div>
          <div className="trend-foot">
            <div><span>Q2 净增环比</span><strong className="positive">+{delta(4545, 3857)}%</strong></div>
            <div><span>Q3 净增环比</span><strong className="positive">+{delta(5482, 4545)}%</strong></div>
            <p>三个季度均为完整季度，可直接比较总量与日均效率。</p>
          </div>
        </article>

        <article className="panel channel-panel">
          <div className="panel-heading">
            <div>
              <p className="section-kicker">渠道结构</p>
              <h2>{active.label} 阅读来源</h2>
            </div>
          </div>
          <div className="channel-body">
            <div className="donut" style={{ background: ring }}>
              <div><strong>{active.channels[0][1]}%</strong><span>第一渠道</span></div>
            </div>
            <div className="channel-list">
              {active.channels.map(([name, value], index) => (
                <div className="channel-row" key={name}>
                  <span><i data-color={index} />{name}</span>
                  <b>{value}%</b>
                </div>
              ))}
            </div>
          </div>
          <p className="method-note">
            渠道占比按归因阅读人数计算；同一用户跨渠道可能重复。
          </p>
        </article>
      </section>

      <section className="dashboard-grid lower-grid">
        <article className="panel content-panel">
          <div className="panel-heading">
            <div>
              <p className="section-kicker">内容表现</p>
              <h2>{active.label} 爆款内容 TOP 3</h2>
            </div>
            <span className="share-badge">分享率 {active.shareRate}%</span>
          </div>
          <div className="article-list">
            {active.articles.map(([title, reads, tag], index) => (
              <div className="article-row" key={title}>
                <span className="rank">0{index + 1}</span>
                <div className="article-main">
                  <span className="article-tag">{tag}</span>
                  <h3>{title}</h3>
                </div>
                <div className="article-value">
                  <strong>{number.format(reads)}</strong>
                  <span>阅读人数</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel audience-panel">
          <div className="panel-heading">
            <div>
              <p className="section-kicker">用户画像</p>
              <h2>谁在关注我们</h2>
            </div>
            <span className="snapshot">当前快照</span>
          </div>
          <div className="audience-highlight">
            <strong>71.73%</strong>
            <span>核心年龄 26—45 岁</span>
          </div>
          <div className="profile-bars">
            <div>
              <p><span>男性用户</span><b>59.27%</b></p>
              <i><em style={{ width: "59.27%" }} /></i>
            </div>
            <div>
              <p><span>女性用户</span><b>39.82%</b></p>
              <i><em style={{ width: "39.82%" }} /></i>
            </div>
            <div>
              <p><span>简体中文</span><b>97.86%</b></p>
              <i><em style={{ width: "97.86%" }} /></i>
            </div>
          </div>
        </article>
      </section>

      <section className="insight-section">
        <div className="panel-heading">
          <div>
            <p className="section-kicker">ACTIONABLE INSIGHTS</p>
            <h2>经营洞察与下一步</h2>
          </div>
        </div>
        <div className="insight-grid">
          <article>
            <span>01</span>
            <h3>用户增长继续提速</h3>
            <p>Q3 净增关注 5,482，环比增长 20.6%；日均净增 59.6，同样创前三季度最高。</p>
          </article>
          <article>
            <span>02</span>
            <h3>阅读效率仍需修复</h3>
            <p>Q3 发文 21 篇，但总阅读环比下降 15.5%，篇均阅读降至 399.1。</p>
          </article>
          <article>
            <span>03</span>
            <h3>放大高质量选题</h3>
            <p>标杆客户、产品升级与产品方案占据 TOP3，建议围绕三类内容形成稳定矩阵。</p>
          </article>
        </div>
      </section>

      <section className="compare-section">
        <div className="panel-heading">
          <div>
            <p className="section-kicker">DATA TABLE</p>
            <h2>季度核心指标一览</h2>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>指标</th><th>Q1</th><th>Q2</th><th>Q3</th><th>判断</th></tr>
            </thead>
            <tbody>
              <tr><td>净增关注</td><td>3,857</td><td>4,545</td><td>5,482</td><td className="positive">连续两个季度增长</td></tr>
              <tr><td>日均净增</td><td>42.9</td><td>49.9</td><td>59.6</td><td className="positive">Q3 领先</td></tr>
              <tr><td>总阅读人数</td><td>12,288</td><td>9,917</td><td>8,382</td><td>Q3 环比 -15.5%</td></tr>
              <tr><td>篇均阅读</td><td>819.2</td><td>521.9</td><td>399.1</td><td>内容效率待提升</td></tr>
              <tr><td>分享率</td><td>5.5%</td><td>6.5%</td><td>6.5%</td><td className="positive">互动质量保持稳定</td></tr>
              <tr><td>发表篇数</td><td>15</td><td>19</td><td>21</td><td>发文量继续增加</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer>
        <p>数据源：微信公众平台导出数据 · 阅读人数采用“全部”渠道去重口径</p>
        <p>© 2026 每刻科技 · 公众号运营数据看板</p>
      </footer>
    </main>
  );
}
