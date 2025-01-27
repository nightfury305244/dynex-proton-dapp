(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [282],
  {
    87282: function (e, t, n) {
      "use strict";
      n.d(t, {
        jx: function () {
          return U.jx;
        },
        $o: function () {
          return z;
        },
        By: function () {
          return U.By;
        },
        Xe: function () {
          return $;
        },
        No: function () {
          return U.No;
        },
        j7: function () {
          return j;
        },
        YS: function () {
          return p;
        },
        u$: function () {
          return f;
        },
        RR: function () {
          return h;
        },
        kD: function () {
          return m;
        },
        HS: function () {
          return _;
        },
        OI: function () {
          return c;
        },
        yT: function () {
          return x;
        },
        nJ: function () {
          return g;
        },
        I2: function () {
          return C;
        },
        nw: function () {
          return l;
        },
        fH: function () {
          return w;
        },
        Y5: function () {
          return i;
        },
        HL: function () {
          return a;
        },
        O1: function () {
          return I;
        },
        vG: function () {
          return d;
        },
        A: function () {
          return v;
        },
        g3: function () {
          return k;
        },
        Am: function () {
          return P;
        },
        _u: function () {
          return b;
        },
        UQ: function () {
          return N;
        },
        YP: function () {
          return u;
        },
        dU: function () {
          return A;
        },
      });
      var o = n(62067),
        r = n.n(o),
        s = n(88089);
      function a(e) {
        return s.fA.get("/", { params: e }).then((e) => {
          let { data: t } = e;
          return t.data.map((e) => {
            let t = e.created_at ? +r()(e.created_at) : null,
              n = e.closed_at ? +r()(e.closed_at) : null,
              o = (n && t && n - t) || +r()() - +r()(t);
            return {
              id: e.id,
              type: e.type,
              status: e.status,
              chipsRequired: e.chips_required,
              fee: e.fee,
              reward: e.reward,
              description: e.description,
              createdAt: t,
              closedAt: n,
              duration: o,
              minLoc: e.min_loc,
              minEnergy: e.min_energy,
              workers: e.workers,
              cancelReason: e.cancel_reason,
              totalJobCost: e.total_job_cost,
              totalJobCostUsd: e.total_job_cost_usd,
              sumChips: e.sum_chips,
            };
          });
        });
      }
      function i(e) {
        return s.fA.get("/".concat(e)).then((e) => {
          let { data: t } = e,
            n = t.created_at ? +r()(t.created_at) : null,
            o = t.closed_at ? +r()(t.closed_at) : null,
            s = (o && n && o - n) || +r()() - +r()(n);
          return {
            id: t.id,
            type: t.type,
            status: t.status,
            chipsRequired: t.chips_required,
            fee: t.fee,
            reward: t.reward,
            description: t.description,
            createdAt: n,
            closedAt: o,
            duration: s,
            minLoc: t.min_loc,
            minEnergy: t.min_energy,
            workers: t.workers,
            cancelReason: t.cancel_reason,
            totalJobCost: t.total_job_cost,
            totalJobCostUsd: t.total_job_cost_usd,
            sumChips: t.sum_chips,
          };
        });
      }
      function c(e) {
        return s.ZP.get("/account/job", { params: e }).then((e) => {
          let { data: t } = e;
          return t.Dtos.map((e) => {
            let t = e.created_at ? +r()(e.created_at) : null,
              n = e.closed_at ? +r()(e.closed_at) : null,
              o = (n && t && n - t) || +r()() - +r()(t);
            return {
              id: e.id,
              type: e.type,
              createdAt: t,
              closedAt: n,
              duration: o,
              chipsRequired: e.chips_required,
              fee: e.fee,
              reward: e.reward,
              status: e.status,
              description: e.description,
              workers: e.workers,
              minLoc: e.min_loc,
              minEnergy: e.min_energy,
              cancelReason: e.cancel_reason,
              totalJobCost: e.total_job_cost,
              totalJobCostUsd: e.total_job_cost_usd,
              sumChips: e.sum_chips,
            };
          });
        });
      }
      function d() {
        return s.fA.get("");
      }
      function l() {
        return s.fA.get("");
      }
      function u() {
        return s.ZP.get("/account/job_post").then((e) => {
          let { data: t } = e;
          return {
            postingFee: t.posting_fee,
            data: t.data.map((e) => ({
              id: e.id,
              customerId: e.customer_id,
              expertId: e.expert_id,
              name: e.name,
              description: e.description,
              budget: e.budget,
              status: e.status,
              createdAt: +r()(e.created_at),
              deadline: e.deadline_at ? +r()(e.deadline_at) : null,
              fileUrl: e.file_url,
              customerSlackId: e.customer_slack_id,
            })),
          };
        });
      }
      function _(e) {
        return s.ZP.get("/account/job_post/all", { params: e }).then((e) => {
          let { data: t } = e;
          return {
            postingFee: t.posting_fee,
            data: t.data.map((e) => ({
              id: e.id,
              customerId: e.customer_id,
              expertId: e.expert_id,
              name: e.name,
              description: e.description,
              budget: e.budget,
              status: e.status,
              createdAt: +r()(e.created_at),
              deadline: e.deadline_at ? +r()(e.deadline_at) : null,
              fileUrl: e.file_url,
              customerSlackId: e.customer_slack_id,
            })),
          };
        });
      }
      function m(e) {
        return s.ZP.post("/account/job_post/create", e);
      }
      function p(e) {
        return s.ZP.post("/account/job_post/assign", e);
      }
      function f(e) {
        return s.ZP.post("/account/job_post/cancel", e);
      }
      function h(e) {
        return s.ZP.post("/account/job_post/complete", e);
      }
      function j(e) {
        return s.ZP.post("/account/job_post/appeal", e);
      }
      function g() {
        return s.ZP.get("/account/job_post/experts");
      }
      function b(e) {
        return s.ZP.get("/account/usage", { params: e }).then((e) => {
          let { data: t } = e;
          return {
            stats: {
              averageComputeTime: t.stats.average_compute_time
                ? Math.round(t.stats.average_compute_time / 1e6)
                : 0,
              averageJobCost: t.stats.average_job_cost || 0,
              maxJobCost: t.stats.max_job_cost || 0,
              jobCount: t.stats.job_count || 0,
              totalCosts: t.stats.total_costs || 0,
              averageChips: t.stats.average_chips || 0,
              averageIntegrationSteps: t.stats.average_integration_steps || 0,
              totalChipsRequired: t.stats.total_chips_required || 0,
              totalIntegrationSteps: t.stats.total_integration_steps || 0,
              totalUsedUnits: t.stats.total_used_units || 0,
            },
            charts: t.charts
              ? t.charts.map((e) => ({
                  time: e.time ? +r()(e.time) : 0,
                  averageComputeTime: e.average_compute_time
                    ? Math.round(e.average_compute_time / 1e6)
                    : 0,
                  averageJobCost: e.average_job_cost || 0,
                  maxJobCost: e.max_job_cost || 0,
                  jobCount: e.job_count || 0,
                  totalCosts: e.total_costs || 0,
                  averageChips: e.average_chips || 0,
                  averageIntegrationSteps: e.average_integration_steps || 0,
                  totalChipsRequired: e.total_chips_required || 0,
                  totalIntegrationSteps: e.total_integration_steps || 0,
                  totalUsedUnits: e.total_used_units || 0,
                }))
              : [],
          };
        });
      }
      function v() {
        return s.fA.get("/network/stats/status");
      }
      function x() {
        return s.fA.get("");
      }
      function w(e) {
        return s.fA.get("", { params: e }).then((e) => {
          let { data: t } = e;
          return {
            data: t.dtos.map((e) => ({
              id: e.id,
              txId: e.txid,
              addressTo: e.address_to,
              amount: e.amount,
              fee: e.fee,
              createdAt: +r()(e.created_at),
            })),
            marketWallet: t.market_wallet,
          };
        });
      }
      function I() {
        return s.fA.get("");
      }
      function C() {
        return s.fA.get("/network/stats/average_block_rewards");
      }
      function k() {
        return s.fA.get("/network/workers_map").then((e) => {
          let { data: t } = e;
          return t.data;
        });
      }
      function N(e) {
        return s.ZP.get("/account/usage/energy_chart/".concat(e)).then((e) => {
          let { data: t } = e;
          return { ...t, chart: t.chart || [] };
        });
      }
      function P(e) {
        return s.ZP.get("/account/job/solutions/".concat(e)).then((e) => {
          let { data: t } = e;
          return t.data.map((e) => ({ ...e, created_at: 1e3 * e.created_at }));
        });
      }
      var y = n(94660);
      let J = { userJobPostingsUpdater: 0, experts: [], postingFee: 0 },
        A = (0, y.Ue)((e) => ({
          ...J,
          updateUserJobPostings: () =>
            e((e) => ({
              userJobPostingsUpdater: e.userJobPostingsUpdater + 1,
            })),
          setPostingFee: (t) => e({ postingFee: t }),
          setExperts: (t) => e({ experts: t }),
        }));
      var U = n(59161),
        L = n(57437),
        Y = n(61396),
        R = n.n(Y),
        Z = n(16691),
        D = n.n(Z),
        M = n(50116),
        S = n(68200),
        T = n(28457),
        q = n(99763),
        E = n(80361),
        H = n(67025),
        V = n(5743),
        F = n.n(V);
      function z(e) {
        var t, n;
        let { jobPosting: o } = e,
          s = (0, M.useTranslations)(),
          a = (0, S.LM)((e) => e.accountId),
          i = A((e) => e.postingFee),
          c = A((e) => e.experts);
        return (0, L.jsxs)("div", {
          className: F().container,
          children: [
            (0, L.jsxs)("div", {
              className: F().name,
              children: [
                (0, L.jsx)(T.II, {
                  placeholder: s("compute-on-dynex.jobPosting.name"),
                  value: o.name,
                  size: "l",
                  disabled: !0,
                  onChange: () => {},
                }),
                o.fileUrl &&
                  (0, L.jsx)(R(), {
                    href: o.fileUrl,
                    target: "_blank",
                    children: (0, L.jsxs)(T.zx, {
                      onClick: () => {},
                      children: [
                        (0, L.jsx)("div", {
                          children:
                            (null === (t = /(?:\.([^.]+))?$/.exec(o.fileUrl)) ||
                            void 0 === t
                              ? void 0
                              : t[1]) || s("attachedFile"),
                        }),
                        (0, L.jsx)(D(), {
                          src: H.Z,
                          alt: "Download",
                          draggable: "false",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            (0, L.jsxs)("div", {
              className: F().row,
              children: [
                (0, L.jsx)(T.II, {
                  placeholder: s("compute-on-dynex.jobPosting.budget"),
                  value: o.budget,
                  size: "l",
                  hint:
                    o.customerId === a || o.expertId === a
                      ? s("compute-on-dynex.jobPosting.expertReceive", {
                          amount: (0, q.eL)(o.budget - i * o.budget, 3),
                        })
                      : void 0,
                  disabled: !0,
                  element: (0, L.jsx)("div", {
                    className: F().dnx,
                    children: "PTN",
                  }),
                  onChange: () => {},
                }),
                (0, L.jsx)(T.II, {
                  placeholder: s("compute-on-dynex.jobPosting.deadline"),
                  value: o.deadline
                    ? r()(o.deadline).format("DD/MM/YYYY HH:mm")
                    : "",
                  size: "l",
                  disabled: !0,
                  element: (0, L.jsx)(D(), {
                    src: E.Z,
                    className: F().calendarImage,
                    alt: "Calendar",
                    draggable: "false",
                  }),
                  onChange: () => {},
                }),
              ],
            }),
            (0, L.jsx)("div", {
              className: F().area,
              children: (0, L.jsx)(T.II, {
                placeholder: s("compute-on-dynex.jobPosting.description"),
                value: o.description,
                lines: 19,
                size: "l",
                disabled: !0,
                onChange: () => {},
              }),
            }),
            "number" == typeof o.expertId &&
              (0, L.jsx)("div", {
                className: F().expert,
                children: (0, L.jsx)(T.II, {
                  placeholder: s("compute-on-dynex.jobPosting.expert"),
                  value:
                    (null === (n = c.find((e) => e.id === o.expertId)) ||
                    void 0 === n
                      ? void 0
                      : n.username) || "",
                  size: "l",
                  disabled: !0,
                  onChange: () => {},
                }),
              }),
          ],
        });
      }
      var B = n(79466),
        W = n(23426),
        X = n.n(W);
      function $(e) {
        var t;
        let { job: n, variant: o = "public" } = e,
          s = (0, M.useTranslations)();
        return (0, L.jsxs)("div", {
          className: X().container,
          children: [
            (0, L.jsxs)("div", {
              className: X().scope,
              children: [
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.type") }),
                    (0, L.jsx)("div", { children: n ? U.No[n.type] : "-" }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.id") }),
                    (0, L.jsx)("div", { children: n ? n.id : "-" }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.status") }),
                    (0, L.jsx)("div", {
                      children: (0, L.jsx)(T.JT, {
                        status: null == n ? void 0 : n.status,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, L.jsxs)("div", {
              className: X().scope,
              children: [
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.start") }),
                    (0, L.jsx)("div", {
                      children: (null == n ? void 0 : n.createdAt)
                        ? r()(n.createdAt).format("YYYY-MM-DD HH:mm:ss")
                        : "-",
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.end") }),
                    (0, L.jsx)("div", {
                      children: (null == n ? void 0 : n.closedAt)
                        ? r()(n.closedAt).format("YYYY-MM-DD HH:mm:ss")
                        : "-",
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", {
                      children: s("jobInformation.duration"),
                    }),
                    (0, L.jsx)("div", {
                      children: n ? (0, B.bW)(n.duration) : "-",
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", {
                      children: s("jobInformation.description"),
                    }),
                    (0, L.jsx)("div", { children: n ? n.description : "-" }),
                  ],
                }),
                "private" === o &&
                  (0, L.jsxs)("div", {
                    className: X().row,
                    children: [
                      (0, L.jsx)("div", {
                        children: s("jobInformation.cancelReason"),
                      }),
                      (0, L.jsx)("div", {
                        className: X().reason,
                        children:
                          (null == n
                            ? void 0
                            : null === (t = n.cancelReason) || void 0 === t
                            ? void 0
                            : t.replaceAll("_", " ").toLowerCase()) || "-",
                      }),
                    ],
                  }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.fee") }),
                    (0, L.jsxs)("div", {
                      children: [n ? (0, q.eL)(n.fee, 3) : "-", " PTN"],
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.reward") }),
                    (0, L.jsxs)("div", {
                      children: [n ? (0, q.eL)(n.reward, 3) : "-", " PTN"],
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", {
                      children: s("jobInformation.totalJobCost"),
                    }),
                    (0, L.jsxs)("div", {
                      children: [
                        n ? (0, q.eL)(n.totalJobCost, 3) : "-",
                        " PTN",
                      ],
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsxs)("div", {
                      children: [s("jobInformation.totalJobCost"), " (USD)"],
                    }),
                    (0, L.jsxs)("div", {
                      children: [
                        n ? (0, q.eL)(n.totalJobCostUsd, 3) : "-",
                        " $",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, L.jsxs)("div", {
              className: X().scope,
              children: [
                (0, L.jsx)("div", {
                  className: X().scopeTitle,
                  children: s("jobInformation.statistics"),
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.chips") }),
                    (0, L.jsx)("div", {
                      children: n
                        ? ""
                            .concat((0, q.eL)(n.sumChips), " / ")
                            .concat((0, q.eL)(n.chipsRequired))
                        : "-",
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", {
                      children: s("jobInformation.workers"),
                    }),
                    (0, L.jsx)("div", {
                      children: n ? (0, q.eL)(n.workers) : "-",
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.loc") }),
                    (0, L.jsx)("div", {
                      children: n ? (0, q.eL)(n.minLoc) : "-",
                    }),
                  ],
                }),
                (0, L.jsxs)("div", {
                  className: X().row,
                  children: [
                    (0, L.jsx)("div", { children: s("jobInformation.energy") }),
                    (0, L.jsx)("div", {
                      children: n ? (0, q.eL)(n.minEnergy) : "-",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    99763: function (e, t, n) {
      "use strict";
      n.d(t, {
        KS: function () {
          return s;
        },
        eL: function () {
          return r;
        },
        u7: function () {
          return o;
        },
      });
      let o = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "....",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 6,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 6;
          return "".concat(e.slice(0, n)).concat(t).concat(e.slice(-o));
        },
        r = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : ",",
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = 10 ** t,
            s = (Math.round(+e * r) / r).toString().split(".");
          return ""
            .concat(s[0].replace(/\B(?=(\d{3})+(?!\d))/g, n))
            .concat(s[1] || o ? ".".concat(s[1] || "0".repeat(t)) : "");
        },
        s = (e, t) => {
          if (e === 1 / 0) return "0";
          let n = 0,
            o = e;
          for (; o > 1e3; ) (o /= 1e3), (n += 1);
          return (
            "number" != typeof o && (o = 0),
            ""
              .concat(o.toFixed(2), " ")
              .concat(["", " k", " M", " G", " T", " P"][n])
              .concat(t)
          );
        };
    },
    79466: function (e, t, n) {
      "use strict";
      n.d(t, {
        bW: function () {
          return r;
        },
        RF: function () {
          return s;
        },
        ry: function () {
          return a;
        },
      });
      let o = { "my-job": { reg: /\/my-job\/([0-9]+)$/gi, res: ["id"] } },
        r = (e) => {
          let t = Math.floor(e / 36e5),
            n = Math.floor((e - 36e5 * t) / 6e4),
            o = Math.floor((e - 36e5 * t - 6e4 * n) / 1e3);
          return ""
            .concat(t < 10 ? "0".concat(t) : t, ":")
            .concat(n < 10 ? "0".concat(n) : n, ":")
            .concat(o < 10 ? "0".concat(o) : o);
        },
        s = (e, t) => {
          let n = o[t];
          if (n) {
            let t = [...e.matchAll(n.reg)][0];
            return Object.fromEntries(n.res.map((e, n) => [e, t[n + 1]]));
          }
        },
        a = (e) => {
          let t = 0;
          for (let n = 0; n < e.length; n += 1)
            t = e.charCodeAt(n) + ((t << 5) - t);
          let n = "#";
          for (let e = 0; e < 3; e += 1) {
            let o = (t >> (8 * e)) & 255;
            n += "00".concat(o.toString(16)).slice(-2);
          }
          return n;
        };
    },
    5743: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "JobPostingView_container__gUXms",
        row: "JobPostingView_row__hheYB",
        name: "JobPostingView_name__hC1j3",
        area: "JobPostingView_area__4LGWV",
        expert: "JobPostingView_expert__BLYpb",
        dnx: "JobPostingView_dnx__hhp2i",
        calendarImage: "JobPostingView_calendarImage__pao_W",
        files: "JobPostingView_files__QV94t",
      };
    },
    23426: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        scope: "PouwJobInfo_scope__FgcbE",
        scopeTitle: "PouwJobInfo_scopeTitle__c6ATa",
        row: "PouwJobInfo_row__Ec9no",
        reason: "PouwJobInfo_reason__Kf3kB",
      };
    },
    67025: function (e, t) {
      "use strict";
      t.Z = {
        src: "/live.protoncoin.org/_next/static/media/download.439fa967.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
