function eC(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get
                ? s
                : {
                    enumerable: !0,
                    get: () => r[i],
                  }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function hv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var pv = { exports: {} },
  nf = {},
  mv = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dl = Symbol.for("react.element"),
  tC = Symbol.for("react.portal"),
  nC = Symbol.for("react.fragment"),
  rC = Symbol.for("react.strict_mode"),
  iC = Symbol.for("react.profiler"),
  sC = Symbol.for("react.provider"),
  oC = Symbol.for("react.context"),
  aC = Symbol.for("react.forward_ref"),
  lC = Symbol.for("react.suspense"),
  uC = Symbol.for("react.memo"),
  cC = Symbol.for("react.lazy"),
  Wg = Symbol.iterator;
function fC(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Wg && t[Wg]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var gv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yv = Object.assign,
  vv = {};
function qo(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = vv),
    (this.updater = n || gv);
}
qo.prototype.isReactComponent = {};
qo.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
qo.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function xv() {}
xv.prototype = qo.prototype;
function jp(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = vv),
    (this.updater = n || gv);
}
var Vp = (jp.prototype = new xv());
Vp.constructor = jp;
yv(Vp, qo.prototype);
Vp.isPureReactComponent = !0;
var Yg = Array.isArray,
  _v = Object.prototype.hasOwnProperty,
  Fp = { current: null },
  wv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sv(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      _v.call(e, r) && !wv.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Dl,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Fp.current,
  };
}
function dC(t, e) {
  return {
    $$typeof: Dl,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Ip(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Dl;
}
function hC(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Gg = /\/+/g;
function Nf(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? hC("" + t.key)
    : e.toString(36);
}
function Lu(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Dl:
          case tC:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + Nf(o, 0) : r),
      Yg(i)
        ? ((n = ""),
          t != null && (n = t.replace(Gg, "$&/") + "/"),
          Lu(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ip(i) &&
            (i = dC(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Gg, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Yg(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + Nf(s, a);
      o += Lu(s, e, n, l, i);
    }
  else if (((l = fC(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + Nf(s, a++)), (o += Lu(s, e, n, l, i));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Kl(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    Lu(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function pC(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Ht = { current: null },
  Mu = { transition: null },
  mC = {
    ReactCurrentDispatcher: Ht,
    ReactCurrentBatchConfig: Mu,
    ReactCurrentOwner: Fp,
  };
re.Children = {
  map: Kl,
  forEach: function (t, e, n) {
    Kl(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Kl(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Kl(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Ip(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
re.Component = qo;
re.Fragment = nC;
re.Profiler = iC;
re.PureComponent = jp;
re.StrictMode = rC;
re.Suspense = lC;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mC;
re.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = yv({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Fp.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      _v.call(e, l) &&
        !wv.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Dl, type: t.type, key: i, ref: s, props: r, _owner: o };
};
re.createContext = function (t) {
  return (
    (t = {
      $$typeof: oC,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: sC, _context: t }),
    (t.Consumer = t)
  );
};
re.createElement = Sv;
re.createFactory = function (t) {
  var e = Sv.bind(null, t);
  return (e.type = t), e;
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (t) {
  return { $$typeof: aC, render: t };
};
re.isValidElement = Ip;
re.lazy = function (t) {
  return { $$typeof: cC, _payload: { _status: -1, _result: t }, _init: pC };
};
re.memo = function (t, e) {
  return { $$typeof: uC, type: t, compare: e === void 0 ? null : e };
};
re.startTransition = function (t) {
  var e = Mu.transition;
  Mu.transition = {};
  try {
    t();
  } finally {
    Mu.transition = e;
  }
};
re.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
re.useCallback = function (t, e) {
  return Ht.current.useCallback(t, e);
};
re.useContext = function (t) {
  return Ht.current.useContext(t);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (t) {
  return Ht.current.useDeferredValue(t);
};
re.useEffect = function (t, e) {
  return Ht.current.useEffect(t, e);
};
re.useId = function () {
  return Ht.current.useId();
};
re.useImperativeHandle = function (t, e, n) {
  return Ht.current.useImperativeHandle(t, e, n);
};
re.useInsertionEffect = function (t, e) {
  return Ht.current.useInsertionEffect(t, e);
};
re.useLayoutEffect = function (t, e) {
  return Ht.current.useLayoutEffect(t, e);
};
re.useMemo = function (t, e) {
  return Ht.current.useMemo(t, e);
};
re.useReducer = function (t, e, n) {
  return Ht.current.useReducer(t, e, n);
};
re.useRef = function (t) {
  return Ht.current.useRef(t);
};
re.useState = function (t) {
  return Ht.current.useState(t);
};
re.useSyncExternalStore = function (t, e, n) {
  return Ht.current.useSyncExternalStore(t, e, n);
};
re.useTransition = function () {
  return Ht.current.useTransition();
};
re.version = "18.2.0";
mv.exports = re;
var k = mv.exports;
const X = hv(k),
  gC = eC({ __proto__: null, default: X }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yC = k,
  vC = Symbol.for("react.element"),
  xC = Symbol.for("react.fragment"),
  _C = Object.prototype.hasOwnProperty,
  wC = yC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  SC = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cv(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) _C.call(e, r) && !SC.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: vC,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: wC.current,
  };
}
nf.Fragment = xC;
nf.jsx = Cv;
nf.jsxs = Cv;
pv.exports = nf;
var S = pv.exports,
  zd = {},
  Pv = { exports: {} },
  Tn = {},
  kv = { exports: {} },
  Tv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(L, N) {
    var P = L.length;
    L.push(N);
    e: for (; 0 < P; ) {
      var V = (P - 1) >>> 1,
        q = L[V];
      if (0 < i(q, N)) (L[V] = N), (L[P] = q), (P = V);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var N = L[0],
      P = L.pop();
    if (P !== N) {
      L[0] = P;
      e: for (var V = 0, q = L.length, et = q >>> 1; V < et; ) {
        var le = 2 * (V + 1) - 1,
          Pe = L[le],
          he = le + 1,
          me = L[he];
        if (0 > i(Pe, P))
          he < q && 0 > i(me, Pe)
            ? ((L[V] = me), (L[he] = P), (V = he))
            : ((L[V] = Pe), (L[le] = P), (V = le));
        else if (he < q && 0 > i(me, P)) (L[V] = me), (L[he] = P), (V = he);
        else break e;
      }
    }
    return N;
  }
  function i(L, N) {
    var P = L.sortIndex - N.sortIndex;
    return P !== 0 ? P : L.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    m = !1,
    g = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(L) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= L)
        r(u), (N.sortIndex = N.expirationTime), e(l, N);
      else break;
      N = n(u);
    }
  }
  function x(L) {
    if (((g = !1), y(L), !m))
      if (n(l) !== null) (m = !0), W(w);
      else {
        var N = n(u);
        N !== null && j(x, N.startTime - L);
      }
  }
  function w(L, N) {
    (m = !1), g && ((g = !1), v(E), (E = -1)), (h = !0);
    var P = f;
    try {
      for (
        y(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (L && !D()));

      ) {
        var V = d.callback;
        if (typeof V == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var q = V(d.expirationTime <= N);
          (N = t.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(l) && r(l),
            y(N);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var et = !0;
      else {
        var le = n(u);
        le !== null && j(x, le.startTime - N), (et = !1);
      }
      return et;
    } finally {
      (d = null), (f = P), (h = !1);
    }
  }
  var T = !1,
    C = null,
    E = -1,
    b = 5,
    O = -1;
  function D() {
    return !(t.unstable_now() - O < b);
  }
  function A() {
    if (C !== null) {
      var L = t.unstable_now();
      O = L;
      var N = !0;
      try {
        N = C(!0, L);
      } finally {
        N ? H() : ((T = !1), (C = null));
      }
    } else T = !1;
  }
  var H;
  if (typeof p == "function")
    H = function () {
      p(A);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      I = F.port2;
    (F.port1.onmessage = A),
      (H = function () {
        I.postMessage(null);
      });
  } else
    H = function () {
      _(A, 0);
    };
  function W(L) {
    (C = L), T || ((T = !0), H());
  }
  function j(L, N) {
    E = _(function () {
      L(t.unstable_now());
    }, N);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      m || h || ((m = !0), W(w));
    }),
    (t.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (b = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = f;
      }
      var P = f;
      f = N;
      try {
        return L();
      } finally {
        f = P;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (L, N) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var P = f;
      f = L;
      try {
        return N();
      } finally {
        f = P;
      }
    }),
    (t.unstable_scheduleCallback = function (L, N, P) {
      var V = t.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? V + P : V))
          : (P = V),
        L)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = P + q),
        (L = {
          id: c++,
          callback: N,
          priorityLevel: L,
          startTime: P,
          expirationTime: q,
          sortIndex: -1,
        }),
        P > V
          ? ((L.sortIndex = P),
            e(u, L),
            n(l) === null &&
              L === n(u) &&
              (g ? (v(E), (E = -1)) : (g = !0), j(x, P - V)))
          : ((L.sortIndex = q), e(l, L), m || h || ((m = !0), W(w))),
        L
      );
    }),
    (t.unstable_shouldYield = D),
    (t.unstable_wrapCallback = function (L) {
      var N = f;
      return function () {
        var P = f;
        f = N;
        try {
          return L.apply(this, arguments);
        } finally {
          f = P;
        }
      };
    });
})(Tv);
kv.exports = Tv;
var CC = kv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ev = k,
  Cn = CC;
function M(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var bv = new Set(),
  rl = {};
function Fs(t, e) {
  jo(t, e), jo(t + "Capture", e);
}
function jo(t, e) {
  for (rl[t] = e, t = 0; t < e.length; t++) bv.add(e[t]);
}
var Wr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Bd = Object.prototype.hasOwnProperty,
  PC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Kg = {},
  Xg = {};
function kC(t) {
  return Bd.call(Xg, t)
    ? !0
    : Bd.call(Kg, t)
    ? !1
    : PC.test(t)
    ? (Xg[t] = !0)
    : ((Kg[t] = !0), !1);
}
function TC(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function EC(t, e, n, r) {
  if (e === null || typeof e > "u" || TC(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Wt(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var St = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    St[t] = new Wt(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  St[e] = new Wt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  St[t] = new Wt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  St[t] = new Wt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    St[t] = new Wt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  St[t] = new Wt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  St[t] = new Wt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  St[t] = new Wt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  St[t] = new Wt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var zp = /[\-:]([a-z])/g;
function Bp(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(zp, Bp);
    St[e] = new Wt(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(zp, Bp);
    St[e] = new Wt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(zp, Bp);
  St[e] = new Wt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  St[t] = new Wt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
St.xlinkHref = new Wt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  St[t] = new Wt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function $p(t, e, n, r) {
  var i = St.hasOwnProperty(e) ? St[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (EC(e, n, i, r) && (n = null),
    r || i === null
      ? kC(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Jr = Ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xl = Symbol.for("react.element"),
  ro = Symbol.for("react.portal"),
  io = Symbol.for("react.fragment"),
  Up = Symbol.for("react.strict_mode"),
  $d = Symbol.for("react.profiler"),
  Ov = Symbol.for("react.provider"),
  Rv = Symbol.for("react.context"),
  Hp = Symbol.for("react.forward_ref"),
  Ud = Symbol.for("react.suspense"),
  Hd = Symbol.for("react.suspense_list"),
  Wp = Symbol.for("react.memo"),
  ii = Symbol.for("react.lazy"),
  Lv = Symbol.for("react.offscreen"),
  Qg = Symbol.iterator;
function aa(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Qg && t[Qg]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var De = Object.assign,
  jf;
function Ca(t) {
  if (jf === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      jf = (e && e[1]) || "";
    }
  return (
    `
` +
    jf +
    t
  );
}
var Vf = !1;
function Ff(t, e) {
  if (!t || Vf) return "";
  Vf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Vf = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? Ca(t) : "";
}
function bC(t) {
  switch (t.tag) {
    case 5:
      return Ca(t.type);
    case 16:
      return Ca("Lazy");
    case 13:
      return Ca("Suspense");
    case 19:
      return Ca("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Ff(t.type, !1)), t;
    case 11:
      return (t = Ff(t.type.render, !1)), t;
    case 1:
      return (t = Ff(t.type, !0)), t;
    default:
      return "";
  }
}
function Wd(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case io:
      return "Fragment";
    case ro:
      return "Portal";
    case $d:
      return "Profiler";
    case Up:
      return "StrictMode";
    case Ud:
      return "Suspense";
    case Hd:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Rv:
        return (t.displayName || "Context") + ".Consumer";
      case Ov:
        return (t._context.displayName || "Context") + ".Provider";
      case Hp:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Wp:
        return (
          (e = t.displayName || null), e !== null ? e : Wd(t.type) || "Memo"
        );
      case ii:
        (e = t._payload), (t = t._init);
        try {
          return Wd(t(e));
        } catch {}
    }
  return null;
}
function OC(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Wd(e);
    case 8:
      return e === Up ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Mi(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Mv(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function RC(t) {
  var e = Mv(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Ql(t) {
  t._valueTracker || (t._valueTracker = RC(t));
}
function Av(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Mv(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function tc(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Yd(t, e) {
  var n = e.checked;
  return De({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function qg(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Mi(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Dv(t, e) {
  (e = e.checked), e != null && $p(t, "checked", e, !1);
}
function Gd(t, e) {
  Dv(t, e);
  var n = Mi(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Kd(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Kd(t, e.type, Mi(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Jg(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function Kd(t, e, n) {
  (e !== "number" || tc(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Pa = Array.isArray;
function Po(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Mi(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Xd(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(M(91));
  return De({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Zg(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(M(92));
      if (Pa(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Mi(n) };
}
function Nv(t, e) {
  var n = Mi(e.value),
    r = Mi(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function e0(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function jv(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qd(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? jv(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var ql,
  Vv = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        ql = ql || document.createElement("div"),
          ql.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = ql.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function il(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Aa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  LC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Aa).forEach(function (t) {
  LC.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Aa[e] = Aa[t]);
  });
});
function Fv(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Aa.hasOwnProperty(t) && Aa[t])
    ? ("" + e).trim()
    : e + "px";
}
function Iv(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Fv(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var MC = De(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function qd(t, e) {
  if (e) {
    if (MC[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(M(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(M(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(M(62));
  }
}
function Jd(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Zd = null;
function Yp(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var eh = null,
  ko = null,
  To = null;
function t0(t) {
  if ((t = Vl(t))) {
    if (typeof eh != "function") throw Error(M(280));
    var e = t.stateNode;
    e && ((e = lf(e)), eh(t.stateNode, t.type, e));
  }
}
function zv(t) {
  ko ? (To ? To.push(t) : (To = [t])) : (ko = t);
}
function Bv() {
  if (ko) {
    var t = ko,
      e = To;
    if (((To = ko = null), t0(t), e)) for (t = 0; t < e.length; t++) t0(e[t]);
  }
}
function $v(t, e) {
  return t(e);
}
function Uv() {}
var If = !1;
function Hv(t, e, n) {
  if (If) return t(e, n);
  If = !0;
  try {
    return $v(t, e, n);
  } finally {
    (If = !1), (ko !== null || To !== null) && (Uv(), Bv());
  }
}
function sl(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = lf(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(M(231, e, typeof n));
  return n;
}
var th = !1;
if (Wr)
  try {
    var la = {};
    Object.defineProperty(la, "passive", {
      get: function () {
        th = !0;
      },
    }),
      window.addEventListener("test", la, la),
      window.removeEventListener("test", la, la);
  } catch {
    th = !1;
  }
function AC(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Da = !1,
  nc = null,
  rc = !1,
  nh = null,
  DC = {
    onError: function (t) {
      (Da = !0), (nc = t);
    },
  };
function NC(t, e, n, r, i, s, o, a, l) {
  (Da = !1), (nc = null), AC.apply(DC, arguments);
}
function jC(t, e, n, r, i, s, o, a, l) {
  if ((NC.apply(this, arguments), Da)) {
    if (Da) {
      var u = nc;
      (Da = !1), (nc = null);
    } else throw Error(M(198));
    rc || ((rc = !0), (nh = u));
  }
}
function Is(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Wv(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function n0(t) {
  if (Is(t) !== t) throw Error(M(188));
}
function VC(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Is(t)), e === null)) throw Error(M(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return n0(i), t;
        if (s === r) return n0(i), e;
        s = s.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? t : e;
}
function Yv(t) {
  return (t = VC(t)), t !== null ? Gv(t) : null;
}
function Gv(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Gv(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Kv = Cn.unstable_scheduleCallback,
  r0 = Cn.unstable_cancelCallback,
  FC = Cn.unstable_shouldYield,
  IC = Cn.unstable_requestPaint,
  He = Cn.unstable_now,
  zC = Cn.unstable_getCurrentPriorityLevel,
  Gp = Cn.unstable_ImmediatePriority,
  Xv = Cn.unstable_UserBlockingPriority,
  ic = Cn.unstable_NormalPriority,
  BC = Cn.unstable_LowPriority,
  Qv = Cn.unstable_IdlePriority,
  rf = null,
  wr = null;
function $C(t) {
  if (wr && typeof wr.onCommitFiberRoot == "function")
    try {
      wr.onCommitFiberRoot(rf, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var rr = Math.clz32 ? Math.clz32 : WC,
  UC = Math.log,
  HC = Math.LN2;
function WC(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((UC(t) / HC) | 0)) | 0;
}
var Jl = 64,
  Zl = 4194304;
function ka(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function sc(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = ka(a)) : ((s &= o), s !== 0 && (r = ka(s)));
  } else (o = n & ~i), o !== 0 ? (r = ka(o)) : s !== 0 && (r = ka(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - rr(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function YC(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function GC(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - rr(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = YC(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function rh(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function qv() {
  var t = Jl;
  return (Jl <<= 1), !(Jl & 4194240) && (Jl = 64), t;
}
function zf(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Nl(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - rr(e)),
    (t[e] = n);
}
function KC(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - rr(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Kp(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - rr(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var pe = 0;
function Jv(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zv,
  Xp,
  ex,
  tx,
  nx,
  ih = !1,
  eu = [],
  vi = null,
  xi = null,
  _i = null,
  ol = new Map(),
  al = new Map(),
  li = [],
  XC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function i0(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      vi = null;
      break;
    case "dragenter":
    case "dragleave":
      xi = null;
      break;
    case "mouseover":
    case "mouseout":
      _i = null;
      break;
    case "pointerover":
    case "pointerout":
      ol.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      al.delete(e.pointerId);
  }
}
function ua(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = Vl(e)), e !== null && Xp(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function QC(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (vi = ua(vi, t, e, n, r, i)), !0;
    case "dragenter":
      return (xi = ua(xi, t, e, n, r, i)), !0;
    case "mouseover":
      return (_i = ua(_i, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ol.set(s, ua(ol.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), al.set(s, ua(al.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function rx(t) {
  var e = cs(t.target);
  if (e !== null) {
    var n = Is(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Wv(n)), e !== null)) {
          (t.blockedOn = e),
            nx(t.priority, function () {
              ex(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Au(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = sh(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zd = r), n.target.dispatchEvent(r), (Zd = null);
    } else return (e = Vl(n)), e !== null && Xp(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function s0(t, e, n) {
  Au(t) && n.delete(e);
}
function qC() {
  (ih = !1),
    vi !== null && Au(vi) && (vi = null),
    xi !== null && Au(xi) && (xi = null),
    _i !== null && Au(_i) && (_i = null),
    ol.forEach(s0),
    al.forEach(s0);
}
function ca(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    ih ||
      ((ih = !0),
      Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority, qC)));
}
function ll(t) {
  function e(i) {
    return ca(i, t);
  }
  if (0 < eu.length) {
    ca(eu[0], t);
    for (var n = 1; n < eu.length; n++) {
      var r = eu[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    vi !== null && ca(vi, t),
      xi !== null && ca(xi, t),
      _i !== null && ca(_i, t),
      ol.forEach(e),
      al.forEach(e),
      n = 0;
    n < li.length;
    n++
  )
    (r = li[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < li.length && ((n = li[0]), n.blockedOn === null); )
    rx(n), n.blockedOn === null && li.shift();
}
var Eo = Jr.ReactCurrentBatchConfig,
  oc = !0;
function JC(t, e, n, r) {
  var i = pe,
    s = Eo.transition;
  Eo.transition = null;
  try {
    (pe = 1), Qp(t, e, n, r);
  } finally {
    (pe = i), (Eo.transition = s);
  }
}
function ZC(t, e, n, r) {
  var i = pe,
    s = Eo.transition;
  Eo.transition = null;
  try {
    (pe = 4), Qp(t, e, n, r);
  } finally {
    (pe = i), (Eo.transition = s);
  }
}
function Qp(t, e, n, r) {
  if (oc) {
    var i = sh(t, e, n, r);
    if (i === null) Qf(t, e, r, ac, n), i0(t, r);
    else if (QC(i, t, e, n, r)) r.stopPropagation();
    else if ((i0(t, r), e & 4 && -1 < XC.indexOf(t))) {
      for (; i !== null; ) {
        var s = Vl(i);
        if (
          (s !== null && Zv(s),
          (s = sh(t, e, n, r)),
          s === null && Qf(t, e, r, ac, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Qf(t, e, r, null, n);
  }
}
var ac = null;
function sh(t, e, n, r) {
  if (((ac = null), (t = Yp(r)), (t = cs(t)), t !== null))
    if (((e = Is(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Wv(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (ac = t), null;
}
function ix(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zC()) {
        case Gp:
          return 1;
        case Xv:
          return 4;
        case ic:
        case BC:
          return 16;
        case Qv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ci = null,
  qp = null,
  Du = null;
function sx() {
  if (Du) return Du;
  var t,
    e = qp,
    n = e.length,
    r,
    i = "value" in ci ? ci.value : ci.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (Du = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Nu(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function tu() {
  return !0;
}
function o0() {
  return !1;
}
function En(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? tu
        : o0),
      (this.isPropagationStopped = o0),
      this
    );
  }
  return (
    De(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = tu));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = tu));
      },
      persist: function () {},
      isPersistent: tu,
    }),
    e
  );
}
var Jo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jp = En(Jo),
  jl = De({}, Jo, { view: 0, detail: 0 }),
  eP = En(jl),
  Bf,
  $f,
  fa,
  sf = De({}, jl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zp,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== fa &&
            (fa && t.type === "mousemove"
              ? ((Bf = t.screenX - fa.screenX), ($f = t.screenY - fa.screenY))
              : ($f = Bf = 0),
            (fa = t)),
          Bf);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : $f;
    },
  }),
  a0 = En(sf),
  tP = De({}, sf, { dataTransfer: 0 }),
  nP = En(tP),
  rP = De({}, jl, { relatedTarget: 0 }),
  Uf = En(rP),
  iP = De({}, Jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sP = En(iP),
  oP = De({}, Jo, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  aP = En(oP),
  lP = De({}, Jo, { data: 0 }),
  l0 = En(lP),
  uP = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cP = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  fP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function dP(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = fP[t]) ? !!e[t] : !1;
}
function Zp() {
  return dP;
}
var hP = De({}, jl, {
    key: function (t) {
      if (t.key) {
        var e = uP[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Nu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? cP[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zp,
    charCode: function (t) {
      return t.type === "keypress" ? Nu(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Nu(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  pP = En(hP),
  mP = De({}, sf, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  u0 = En(mP),
  gP = De({}, jl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zp,
  }),
  yP = En(gP),
  vP = De({}, Jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xP = En(vP),
  _P = De({}, sf, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wP = En(_P),
  SP = [9, 13, 27, 32],
  em = Wr && "CompositionEvent" in window,
  Na = null;
Wr && "documentMode" in document && (Na = document.documentMode);
var CP = Wr && "TextEvent" in window && !Na,
  ox = Wr && (!em || (Na && 8 < Na && 11 >= Na)),
  c0 = String.fromCharCode(32),
  f0 = !1;
function ax(t, e) {
  switch (t) {
    case "keyup":
      return SP.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function lx(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var so = !1;
function PP(t, e) {
  switch (t) {
    case "compositionend":
      return lx(e);
    case "keypress":
      return e.which !== 32 ? null : ((f0 = !0), c0);
    case "textInput":
      return (t = e.data), t === c0 && f0 ? null : t;
    default:
      return null;
  }
}
function kP(t, e) {
  if (so)
    return t === "compositionend" || (!em && ax(t, e))
      ? ((t = sx()), (Du = qp = ci = null), (so = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return ox && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var TP = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function d0(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!TP[t.type] : e === "textarea";
}
function ux(t, e, n, r) {
  zv(r),
    (e = lc(e, "onChange")),
    0 < e.length &&
      ((n = new Jp("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var ja = null,
  ul = null;
function EP(t) {
  _x(t, 0);
}
function of(t) {
  var e = lo(t);
  if (Av(e)) return t;
}
function bP(t, e) {
  if (t === "change") return e;
}
var cx = !1;
if (Wr) {
  var Hf;
  if (Wr) {
    var Wf = "oninput" in document;
    if (!Wf) {
      var h0 = document.createElement("div");
      h0.setAttribute("oninput", "return;"),
        (Wf = typeof h0.oninput == "function");
    }
    Hf = Wf;
  } else Hf = !1;
  cx = Hf && (!document.documentMode || 9 < document.documentMode);
}
function p0() {
  ja && (ja.detachEvent("onpropertychange", fx), (ul = ja = null));
}
function fx(t) {
  if (t.propertyName === "value" && of(ul)) {
    var e = [];
    ux(e, ul, t, Yp(t)), Hv(EP, e);
  }
}
function OP(t, e, n) {
  t === "focusin"
    ? (p0(), (ja = e), (ul = n), ja.attachEvent("onpropertychange", fx))
    : t === "focusout" && p0();
}
function RP(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return of(ul);
}
function LP(t, e) {
  if (t === "click") return of(e);
}
function MP(t, e) {
  if (t === "input" || t === "change") return of(e);
}
function AP(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var ar = typeof Object.is == "function" ? Object.is : AP;
function cl(t, e) {
  if (ar(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Bd.call(e, i) || !ar(t[i], e[i])) return !1;
  }
  return !0;
}
function m0(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function g0(t, e) {
  var n = m0(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = m0(n);
  }
}
function dx(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? dx(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function hx() {
  for (var t = window, e = tc(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = tc(t.document);
  }
  return e;
}
function tm(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function DP(t) {
  var e = hx(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    dx(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tm(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = g0(n, s));
        var o = g0(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var NP = Wr && "documentMode" in document && 11 >= document.documentMode,
  oo = null,
  oh = null,
  Va = null,
  ah = !1;
function y0(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ah ||
    oo == null ||
    oo !== tc(r) ||
    ((r = oo),
    "selectionStart" in r && tm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Va && cl(Va, r)) ||
      ((Va = r),
      (r = lc(oh, "onSelect")),
      0 < r.length &&
        ((e = new Jp("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = oo))));
}
function nu(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var ao = {
    animationend: nu("Animation", "AnimationEnd"),
    animationiteration: nu("Animation", "AnimationIteration"),
    animationstart: nu("Animation", "AnimationStart"),
    transitionend: nu("Transition", "TransitionEnd"),
  },
  Yf = {},
  px = {};
Wr &&
  ((px = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ao.animationend.animation,
    delete ao.animationiteration.animation,
    delete ao.animationstart.animation),
  "TransitionEvent" in window || delete ao.transitionend.transition);
function af(t) {
  if (Yf[t]) return Yf[t];
  if (!ao[t]) return t;
  var e = ao[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in px) return (Yf[t] = e[n]);
  return t;
}
var mx = af("animationend"),
  gx = af("animationiteration"),
  yx = af("animationstart"),
  vx = af("transitionend"),
  xx = new Map(),
  v0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ii(t, e) {
  xx.set(t, e), Fs(e, [t]);
}
for (var Gf = 0; Gf < v0.length; Gf++) {
  var Kf = v0[Gf],
    jP = Kf.toLowerCase(),
    VP = Kf[0].toUpperCase() + Kf.slice(1);
  Ii(jP, "on" + VP);
}
Ii(mx, "onAnimationEnd");
Ii(gx, "onAnimationIteration");
Ii(yx, "onAnimationStart");
Ii("dblclick", "onDoubleClick");
Ii("focusin", "onFocus");
Ii("focusout", "onBlur");
Ii(vx, "onTransitionEnd");
jo("onMouseEnter", ["mouseout", "mouseover"]);
jo("onMouseLeave", ["mouseout", "mouseover"]);
jo("onPointerEnter", ["pointerout", "pointerover"]);
jo("onPointerLeave", ["pointerout", "pointerover"]);
Fs(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Fs(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Fs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fs(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Fs(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Fs(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ta =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  FP = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));
function x0(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), jC(r, e, void 0, t), (t.currentTarget = null);
}
function _x(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          x0(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          x0(i, a, u), (s = l);
        }
    }
  }
  if (rc) throw ((t = nh), (rc = !1), (nh = null), t);
}
function we(t, e) {
  var n = e[dh];
  n === void 0 && (n = e[dh] = new Set());
  var r = t + "__bubble";
  n.has(r) || (wx(e, t, 2, !1), n.add(r));
}
function Xf(t, e, n) {
  var r = 0;
  e && (r |= 4), wx(n, t, r, e);
}
var ru = "_reactListening" + Math.random().toString(36).slice(2);
function fl(t) {
  if (!t[ru]) {
    (t[ru] = !0),
      bv.forEach(function (n) {
        n !== "selectionchange" && (FP.has(n) || Xf(n, !1, t), Xf(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[ru] || ((e[ru] = !0), Xf("selectionchange", !1, e));
  }
}
function wx(t, e, n, r) {
  switch (ix(e)) {
    case 1:
      var i = JC;
      break;
    case 4:
      i = ZC;
      break;
    default:
      i = Qp;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !th ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function Qf(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = cs(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Hv(function () {
    var u = s,
      c = Yp(n),
      d = [];
    e: {
      var f = xx.get(t);
      if (f !== void 0) {
        var h = Jp,
          m = t;
        switch (t) {
          case "keypress":
            if (Nu(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = pP;
            break;
          case "focusin":
            (m = "focus"), (h = Uf);
            break;
          case "focusout":
            (m = "blur"), (h = Uf);
            break;
          case "beforeblur":
          case "afterblur":
            h = Uf;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = a0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = nP;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = yP;
            break;
          case mx:
          case gx:
          case yx:
            h = sP;
            break;
          case vx:
            h = xP;
            break;
          case "scroll":
            h = eP;
            break;
          case "wheel":
            h = wP;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = aP;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = u0;
        }
        var g = (e & 4) !== 0,
          _ = !g && t === "scroll",
          v = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var x = y.stateNode;
          if (
            (y.tag === 5 &&
              x !== null &&
              ((y = x),
              v !== null && ((x = sl(p, v)), x != null && g.push(dl(p, x, y)))),
            _)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((f = new h(f, m, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((f = t === "mouseover" || t === "pointerover"),
          (h = t === "mouseout" || t === "pointerout"),
          f &&
            n !== Zd &&
            (m = n.relatedTarget || n.fromElement) &&
            (cs(m) || m[Yr]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((m = n.relatedTarget || n.toElement),
              (h = u),
              (m = m ? cs(m) : null),
              m !== null &&
                ((_ = Is(m)), m !== _ || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((h = null), (m = u)),
          h !== m)
        ) {
          if (
            ((g = a0),
            (x = "onMouseLeave"),
            (v = "onMouseEnter"),
            (p = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((g = u0),
              (x = "onPointerLeave"),
              (v = "onPointerEnter"),
              (p = "pointer")),
            (_ = h == null ? f : lo(h)),
            (y = m == null ? f : lo(m)),
            (f = new g(x, p + "leave", h, n, c)),
            (f.target = _),
            (f.relatedTarget = y),
            (x = null),
            cs(c) === u &&
              ((g = new g(v, p + "enter", m, n, c)),
              (g.target = y),
              (g.relatedTarget = _),
              (x = g)),
            (_ = x),
            h && m)
          )
            t: {
              for (g = h, v = m, p = 0, y = g; y; y = Gs(y)) p++;
              for (y = 0, x = v; x; x = Gs(x)) y++;
              for (; 0 < p - y; ) (g = Gs(g)), p--;
              for (; 0 < y - p; ) (v = Gs(v)), y--;
              for (; p--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = Gs(g)), (v = Gs(v));
              }
              g = null;
            }
          else g = null;
          h !== null && _0(d, f, h, g, !1),
            m !== null && _ !== null && _0(d, _, m, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? lo(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var w = bP;
        else if (d0(f))
          if (cx) w = MP;
          else {
            w = RP;
            var T = OP;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (w = LP);
        if (w && (w = w(t, u))) {
          ux(d, w, n, c);
          break e;
        }
        T && T(t, f, u),
          t === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Kd(f, "number", f.value);
      }
      switch (((T = u ? lo(u) : window), t)) {
        case "focusin":
          (d0(T) || T.contentEditable === "true") &&
            ((oo = T), (oh = u), (Va = null));
          break;
        case "focusout":
          Va = oh = oo = null;
          break;
        case "mousedown":
          ah = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ah = !1), y0(d, n, c);
          break;
        case "selectionchange":
          if (NP) break;
        case "keydown":
        case "keyup":
          y0(d, n, c);
      }
      var C;
      if (em)
        e: {
          switch (t) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        so
          ? ax(t, n) && (E = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (ox &&
          n.locale !== "ko" &&
          (so || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && so && (C = sx())
            : ((ci = c),
              (qp = "value" in ci ? ci.value : ci.textContent),
              (so = !0))),
        (T = lc(u, E)),
        0 < T.length &&
          ((E = new l0(E, t, null, n, c)),
          d.push({ event: E, listeners: T }),
          C ? (E.data = C) : ((C = lx(n)), C !== null && (E.data = C)))),
        (C = CP ? PP(t, n) : kP(t, n)) &&
          ((u = lc(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new l0("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    _x(d, e);
  });
}
function dl(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function lc(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = sl(t, n)),
      s != null && r.unshift(dl(t, s, i)),
      (s = sl(t, e)),
      s != null && r.push(dl(t, s, i))),
      (t = t.return);
  }
  return r;
}
function Gs(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function _0(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = sl(n, s)), l != null && o.unshift(dl(n, l, a)))
        : i || ((l = sl(n, s)), l != null && o.push(dl(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var IP = /\r\n?/g,
  zP = /\u0000|\uFFFD/g;
function w0(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      IP,
      `
`
    )
    .replace(zP, "");
}
function iu(t, e, n) {
  if (((e = w0(e)), w0(t) !== e && n)) throw Error(M(425));
}
function uc() {}
var lh = null,
  uh = null;
function ch(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var fh = typeof setTimeout == "function" ? setTimeout : void 0,
  BP = typeof clearTimeout == "function" ? clearTimeout : void 0,
  S0 = typeof Promise == "function" ? Promise : void 0,
  $P =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof S0 < "u"
      ? function (t) {
          return S0.resolve(null).then(t).catch(UP);
        }
      : fh;
function UP(t) {
  setTimeout(function () {
    throw t;
  });
}
function qf(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), ll(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ll(e);
}
function wi(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function C0(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Zo = Math.random().toString(36).slice(2),
  gr = "__reactFiber$" + Zo,
  hl = "__reactProps$" + Zo,
  Yr = "__reactContainer$" + Zo,
  dh = "__reactEvents$" + Zo,
  HP = "__reactListeners$" + Zo,
  WP = "__reactHandles$" + Zo;
function cs(t) {
  var e = t[gr];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Yr] || n[gr])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = C0(t); t !== null; ) {
          if ((n = t[gr])) return n;
          t = C0(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Vl(t) {
  return (
    (t = t[gr] || t[Yr]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function lo(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(M(33));
}
function lf(t) {
  return t[hl] || null;
}
var hh = [],
  uo = -1;
function zi(t) {
  return { current: t };
}
function Ce(t) {
  0 > uo || ((t.current = hh[uo]), (hh[uo] = null), uo--);
}
function xe(t, e) {
  uo++, (hh[uo] = t.current), (t.current = e);
}
var Ai = {},
  Mt = zi(Ai),
  Jt = zi(!1),
  Es = Ai;
function Vo(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Ai;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Zt(t) {
  return (t = t.childContextTypes), t != null;
}
function cc() {
  Ce(Jt), Ce(Mt);
}
function P0(t, e, n) {
  if (Mt.current !== Ai) throw Error(M(168));
  xe(Mt, e), xe(Jt, n);
}
function Sx(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(M(108, OC(t) || "Unknown", i));
  return De({}, n, r);
}
function fc(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Ai),
    (Es = Mt.current),
    xe(Mt, t),
    xe(Jt, Jt.current),
    !0
  );
}
function k0(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((t = Sx(t, e, Es)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Ce(Jt),
      Ce(Mt),
      xe(Mt, t))
    : Ce(Jt),
    xe(Jt, n);
}
var Mr = null,
  uf = !1,
  Jf = !1;
function Cx(t) {
  Mr === null ? (Mr = [t]) : Mr.push(t);
}
function YP(t) {
  (uf = !0), Cx(t);
}
function Bi() {
  if (!Jf && Mr !== null) {
    Jf = !0;
    var t = 0,
      e = pe;
    try {
      var n = Mr;
      for (pe = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Mr = null), (uf = !1);
    } catch (i) {
      throw (Mr !== null && (Mr = Mr.slice(t + 1)), Kv(Gp, Bi), i);
    } finally {
      (pe = e), (Jf = !1);
    }
  }
  return null;
}
var co = [],
  fo = 0,
  dc = null,
  hc = 0,
  Ln = [],
  Mn = 0,
  bs = null,
  Nr = 1,
  jr = "";
function rs(t, e) {
  (co[fo++] = hc), (co[fo++] = dc), (dc = t), (hc = e);
}
function Px(t, e, n) {
  (Ln[Mn++] = Nr), (Ln[Mn++] = jr), (Ln[Mn++] = bs), (bs = t);
  var r = Nr;
  t = jr;
  var i = 32 - rr(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - rr(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Nr = (1 << (32 - rr(e) + i)) | (n << i) | r),
      (jr = s + t);
  } else (Nr = (1 << s) | (n << i) | r), (jr = t);
}
function nm(t) {
  t.return !== null && (rs(t, 1), Px(t, 1, 0));
}
function rm(t) {
  for (; t === dc; )
    (dc = co[--fo]), (co[fo] = null), (hc = co[--fo]), (co[fo] = null);
  for (; t === bs; )
    (bs = Ln[--Mn]),
      (Ln[Mn] = null),
      (jr = Ln[--Mn]),
      (Ln[Mn] = null),
      (Nr = Ln[--Mn]),
      (Ln[Mn] = null);
}
var wn = null,
  _n = null,
  ke = !1,
  tr = null;
function kx(t, e) {
  var n = Nn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function T0(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (wn = t), (_n = wi(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (wn = t), (_n = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = bs !== null ? { id: Nr, overflow: jr } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Nn(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (wn = t),
            (_n = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ph(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function mh(t) {
  if (ke) {
    var e = _n;
    if (e) {
      var n = e;
      if (!T0(t, e)) {
        if (ph(t)) throw Error(M(418));
        e = wi(n.nextSibling);
        var r = wn;
        e && T0(t, e)
          ? kx(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (ke = !1), (wn = t));
      }
    } else {
      if (ph(t)) throw Error(M(418));
      (t.flags = (t.flags & -4097) | 2), (ke = !1), (wn = t);
    }
  }
}
function E0(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  wn = t;
}
function su(t) {
  if (t !== wn) return !1;
  if (!ke) return E0(t), (ke = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !ch(t.type, t.memoizedProps))),
    e && (e = _n))
  ) {
    if (ph(t)) throw (Tx(), Error(M(418)));
    for (; e; ) kx(t, e), (e = wi(e.nextSibling));
  }
  if ((E0(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(M(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              _n = wi(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      _n = null;
    }
  } else _n = wn ? wi(t.stateNode.nextSibling) : null;
  return !0;
}
function Tx() {
  for (var t = _n; t; ) t = wi(t.nextSibling);
}
function Fo() {
  (_n = wn = null), (ke = !1);
}
function im(t) {
  tr === null ? (tr = [t]) : tr.push(t);
}
var GP = Jr.ReactCurrentBatchConfig;
function Zn(t, e) {
  if (t && t.defaultProps) {
    (e = De({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var pc = zi(null),
  mc = null,
  ho = null,
  sm = null;
function om() {
  sm = ho = mc = null;
}
function am(t) {
  var e = pc.current;
  Ce(pc), (t._currentValue = e);
}
function gh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function bo(t, e) {
  (mc = t),
    (sm = ho = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (qt = !0), (t.firstContext = null));
}
function Bn(t) {
  var e = t._currentValue;
  if (sm !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), ho === null)) {
      if (mc === null) throw Error(M(308));
      (ho = t), (mc.dependencies = { lanes: 0, firstContext: t });
    } else ho = ho.next = t;
  return e;
}
var fs = null;
function lm(t) {
  fs === null ? (fs = [t]) : fs.push(t);
}
function Ex(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), lm(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Gr(t, r)
  );
}
function Gr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var si = !1;
function um(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bx(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function zr(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Si(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), fe & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      Gr(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), lm(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Gr(t, n)
  );
}
function ju(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Kp(t, n);
  }
}
function b0(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function gc(t, e, n, r) {
  var i = t.updateQueue;
  si = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = t,
            g = a;
          switch (((f = e), (h = n), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == "function")) {
                d = m.call(h, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (f = typeof m == "function" ? m.call(h, d, f) : m),
                f == null)
              )
                break e;
              d = De({}, d, f);
              break e;
            case 2:
              si = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (Rs |= o), (t.lanes = o), (t.memoizedState = d);
  }
}
function O0(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var Ox = new Ev.Component().refs;
function yh(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : De({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var cf = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Is(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Ut(),
      i = Pi(t),
      s = zr(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = Si(t, s, i)),
      e !== null && (ir(e, t, i, r), ju(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Ut(),
      i = Pi(t),
      s = zr(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = Si(t, s, i)),
      e !== null && (ir(e, t, i, r), ju(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Ut(),
      r = Pi(t),
      i = zr(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = Si(t, i, r)),
      e !== null && (ir(e, t, r, n), ju(e, t, r));
  },
};
function R0(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !cl(n, r) || !cl(i, s)
      : !0
  );
}
function Rx(t, e, n) {
  var r = !1,
    i = Ai,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Bn(s))
      : ((i = Zt(e) ? Es : Mt.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? Vo(t, i) : Ai)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = cf),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function L0(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && cf.enqueueReplaceState(e, e.state, null);
}
function vh(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = Ox), um(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Bn(s))
    : ((s = Zt(e) ? Es : Mt.current), (i.context = Vo(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (yh(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && cf.enqueueReplaceState(i, i.state, null),
      gc(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function da(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === Ox && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, t));
  }
  return t;
}
function ou(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      M(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function M0(t) {
  var e = t._init;
  return e(t._payload);
}
function Lx(t) {
  function e(v, p) {
    if (t) {
      var y = v.deletions;
      y === null ? ((v.deletions = [p]), (v.flags |= 16)) : y.push(p);
    }
  }
  function n(v, p) {
    if (!t) return null;
    for (; p !== null; ) e(v, p), (p = p.sibling);
    return null;
  }
  function r(v, p) {
    for (v = new Map(); p !== null; )
      p.key !== null ? v.set(p.key, p) : v.set(p.index, p), (p = p.sibling);
    return v;
  }
  function i(v, p) {
    return (v = ki(v, p)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, p, y) {
    return (
      (v.index = y),
      t
        ? ((y = v.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((v.flags |= 2), p) : y)
            : ((v.flags |= 2), p))
        : ((v.flags |= 1048576), p)
    );
  }
  function o(v) {
    return t && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, p, y, x) {
    return p === null || p.tag !== 6
      ? ((p = sd(y, v.mode, x)), (p.return = v), p)
      : ((p = i(p, y)), (p.return = v), p);
  }
  function l(v, p, y, x) {
    var w = y.type;
    return w === io
      ? c(v, p, y.props.children, x, y.key)
      : p !== null &&
        (p.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === ii &&
            M0(w) === p.type))
      ? ((x = i(p, y.props)), (x.ref = da(v, p, y)), (x.return = v), x)
      : ((x = $u(y.type, y.key, y.props, null, v.mode, x)),
        (x.ref = da(v, p, y)),
        (x.return = v),
        x);
  }
  function u(v, p, y, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = od(y, v.mode, x)), (p.return = v), p)
      : ((p = i(p, y.children || [])), (p.return = v), p);
  }
  function c(v, p, y, x, w) {
    return p === null || p.tag !== 7
      ? ((p = xs(y, v.mode, x, w)), (p.return = v), p)
      : ((p = i(p, y)), (p.return = v), p);
  }
  function d(v, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = sd("" + p, v.mode, y)), (p.return = v), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Xl:
          return (
            (y = $u(p.type, p.key, p.props, null, v.mode, y)),
            (y.ref = da(v, null, p)),
            (y.return = v),
            y
          );
        case ro:
          return (p = od(p, v.mode, y)), (p.return = v), p;
        case ii:
          var x = p._init;
          return d(v, x(p._payload), y);
      }
      if (Pa(p) || aa(p))
        return (p = xs(p, v.mode, y, null)), (p.return = v), p;
      ou(v, p);
    }
    return null;
  }
  function f(v, p, y, x) {
    var w = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return w !== null ? null : a(v, p, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Xl:
          return y.key === w ? l(v, p, y, x) : null;
        case ro:
          return y.key === w ? u(v, p, y, x) : null;
        case ii:
          return (w = y._init), f(v, p, w(y._payload), x);
      }
      if (Pa(y) || aa(y)) return w !== null ? null : c(v, p, y, x, null);
      ou(v, y);
    }
    return null;
  }
  function h(v, p, y, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (v = v.get(y) || null), a(p, v, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Xl:
          return (v = v.get(x.key === null ? y : x.key) || null), l(p, v, x, w);
        case ro:
          return (v = v.get(x.key === null ? y : x.key) || null), u(p, v, x, w);
        case ii:
          var T = x._init;
          return h(v, p, y, T(x._payload), w);
      }
      if (Pa(x) || aa(x)) return (v = v.get(y) || null), c(p, v, x, w, null);
      ou(p, x);
    }
    return null;
  }
  function m(v, p, y, x) {
    for (
      var w = null, T = null, C = p, E = (p = 0), b = null;
      C !== null && E < y.length;
      E++
    ) {
      C.index > E ? ((b = C), (C = null)) : (b = C.sibling);
      var O = f(v, C, y[E], x);
      if (O === null) {
        C === null && (C = b);
        break;
      }
      t && C && O.alternate === null && e(v, C),
        (p = s(O, p, E)),
        T === null ? (w = O) : (T.sibling = O),
        (T = O),
        (C = b);
    }
    if (E === y.length) return n(v, C), ke && rs(v, E), w;
    if (C === null) {
      for (; E < y.length; E++)
        (C = d(v, y[E], x)),
          C !== null &&
            ((p = s(C, p, E)), T === null ? (w = C) : (T.sibling = C), (T = C));
      return ke && rs(v, E), w;
    }
    for (C = r(v, C); E < y.length; E++)
      (b = h(C, v, E, y[E], x)),
        b !== null &&
          (t && b.alternate !== null && C.delete(b.key === null ? E : b.key),
          (p = s(b, p, E)),
          T === null ? (w = b) : (T.sibling = b),
          (T = b));
    return (
      t &&
        C.forEach(function (D) {
          return e(v, D);
        }),
      ke && rs(v, E),
      w
    );
  }
  function g(v, p, y, x) {
    var w = aa(y);
    if (typeof w != "function") throw Error(M(150));
    if (((y = w.call(y)), y == null)) throw Error(M(151));
    for (
      var T = (w = null), C = p, E = (p = 0), b = null, O = y.next();
      C !== null && !O.done;
      E++, O = y.next()
    ) {
      C.index > E ? ((b = C), (C = null)) : (b = C.sibling);
      var D = f(v, C, O.value, x);
      if (D === null) {
        C === null && (C = b);
        break;
      }
      t && C && D.alternate === null && e(v, C),
        (p = s(D, p, E)),
        T === null ? (w = D) : (T.sibling = D),
        (T = D),
        (C = b);
    }
    if (O.done) return n(v, C), ke && rs(v, E), w;
    if (C === null) {
      for (; !O.done; E++, O = y.next())
        (O = d(v, O.value, x)),
          O !== null &&
            ((p = s(O, p, E)), T === null ? (w = O) : (T.sibling = O), (T = O));
      return ke && rs(v, E), w;
    }
    for (C = r(v, C); !O.done; E++, O = y.next())
      (O = h(C, v, E, O.value, x)),
        O !== null &&
          (t && O.alternate !== null && C.delete(O.key === null ? E : O.key),
          (p = s(O, p, E)),
          T === null ? (w = O) : (T.sibling = O),
          (T = O));
    return (
      t &&
        C.forEach(function (A) {
          return e(v, A);
        }),
      ke && rs(v, E),
      w
    );
  }
  function _(v, p, y, x) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === io &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Xl:
          e: {
            for (var w = y.key, T = p; T !== null; ) {
              if (T.key === w) {
                if (((w = y.type), w === io)) {
                  if (T.tag === 7) {
                    n(v, T.sibling),
                      (p = i(T, y.props.children)),
                      (p.return = v),
                      (v = p);
                    break e;
                  }
                } else if (
                  T.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === ii &&
                    M0(w) === T.type)
                ) {
                  n(v, T.sibling),
                    (p = i(T, y.props)),
                    (p.ref = da(v, T, y)),
                    (p.return = v),
                    (v = p);
                  break e;
                }
                n(v, T);
                break;
              } else e(v, T);
              T = T.sibling;
            }
            y.type === io
              ? ((p = xs(y.props.children, v.mode, x, y.key)),
                (p.return = v),
                (v = p))
              : ((x = $u(y.type, y.key, y.props, null, v.mode, x)),
                (x.ref = da(v, p, y)),
                (x.return = v),
                (v = x));
          }
          return o(v);
        case ro:
          e: {
            for (T = y.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(v, p.sibling),
                    (p = i(p, y.children || [])),
                    (p.return = v),
                    (v = p);
                  break e;
                } else {
                  n(v, p);
                  break;
                }
              else e(v, p);
              p = p.sibling;
            }
            (p = od(y, v.mode, x)), (p.return = v), (v = p);
          }
          return o(v);
        case ii:
          return (T = y._init), _(v, p, T(y._payload), x);
      }
      if (Pa(y)) return m(v, p, y, x);
      if (aa(y)) return g(v, p, y, x);
      ou(v, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(v, p.sibling), (p = i(p, y)), (p.return = v), (v = p))
          : (n(v, p), (p = sd(y, v.mode, x)), (p.return = v), (v = p)),
        o(v))
      : n(v, p);
  }
  return _;
}
var Io = Lx(!0),
  Mx = Lx(!1),
  Fl = {},
  Sr = zi(Fl),
  pl = zi(Fl),
  ml = zi(Fl);
function ds(t) {
  if (t === Fl) throw Error(M(174));
  return t;
}
function cm(t, e) {
  switch ((xe(ml, e), xe(pl, t), xe(Sr, Fl), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Qd(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Qd(e, t));
  }
  Ce(Sr), xe(Sr, e);
}
function zo() {
  Ce(Sr), Ce(pl), Ce(ml);
}
function Ax(t) {
  ds(ml.current);
  var e = ds(Sr.current),
    n = Qd(e, t.type);
  e !== n && (xe(pl, t), xe(Sr, n));
}
function fm(t) {
  pl.current === t && (Ce(Sr), Ce(pl));
}
var Oe = zi(0);
function yc(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Zf = [];
function dm() {
  for (var t = 0; t < Zf.length; t++)
    Zf[t]._workInProgressVersionPrimary = null;
  Zf.length = 0;
}
var Vu = Jr.ReactCurrentDispatcher,
  ed = Jr.ReactCurrentBatchConfig,
  Os = 0,
  Ae = null,
  nt = null,
  ct = null,
  vc = !1,
  Fa = !1,
  gl = 0,
  KP = 0;
function kt() {
  throw Error(M(321));
}
function hm(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!ar(t[n], e[n])) return !1;
  return !0;
}
function pm(t, e, n, r, i, s) {
  if (
    ((Os = s),
    (Ae = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Vu.current = t === null || t.memoizedState === null ? JP : ZP),
    (t = n(r, i)),
    Fa)
  ) {
    s = 0;
    do {
      if (((Fa = !1), (gl = 0), 25 <= s)) throw Error(M(301));
      (s += 1),
        (ct = nt = null),
        (e.updateQueue = null),
        (Vu.current = ek),
        (t = n(r, i));
    } while (Fa);
  }
  if (
    ((Vu.current = xc),
    (e = nt !== null && nt.next !== null),
    (Os = 0),
    (ct = nt = Ae = null),
    (vc = !1),
    e)
  )
    throw Error(M(300));
  return t;
}
function mm() {
  var t = gl !== 0;
  return (gl = 0), t;
}
function hr() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ct === null ? (Ae.memoizedState = ct = t) : (ct = ct.next = t), ct;
}
function $n() {
  if (nt === null) {
    var t = Ae.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = nt.next;
  var e = ct === null ? Ae.memoizedState : ct.next;
  if (e !== null) (ct = e), (nt = t);
  else {
    if (t === null) throw Error(M(310));
    (nt = t),
      (t = {
        memoizedState: nt.memoizedState,
        baseState: nt.baseState,
        baseQueue: nt.baseQueue,
        queue: nt.queue,
        next: null,
      }),
      ct === null ? (Ae.memoizedState = ct = t) : (ct = ct.next = t);
  }
  return ct;
}
function yl(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function td(t) {
  var e = $n(),
    n = e.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = t;
  var r = nt,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Os & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (Ae.lanes |= c),
          (Rs |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      ar(r, e.memoizedState) || (qt = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (Ae.lanes |= s), (Rs |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function nd(t) {
  var e = $n(),
    n = e.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    ar(s, e.memoizedState) || (qt = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Dx() {}
function Nx(t, e) {
  var n = Ae,
    r = $n(),
    i = e(),
    s = !ar(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (qt = !0)),
    (r = r.queue),
    gm(Fx.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (ct !== null && ct.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vl(9, Vx.bind(null, n, r, i, e), void 0, null),
      ft === null)
    )
      throw Error(M(349));
    Os & 30 || jx(n, e, i);
  }
  return i;
}
function jx(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Ae.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Ae.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Vx(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), Ix(e) && zx(t);
}
function Fx(t, e, n) {
  return n(function () {
    Ix(e) && zx(t);
  });
}
function Ix(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !ar(t, n);
  } catch {
    return !0;
  }
}
function zx(t) {
  var e = Gr(t, 1);
  e !== null && ir(e, t, 1, -1);
}
function A0(t) {
  var e = hr();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yl,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = qP.bind(null, Ae, t)),
    [e.memoizedState, t]
  );
}
function vl(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Ae.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Ae.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Bx() {
  return $n().memoizedState;
}
function Fu(t, e, n, r) {
  var i = hr();
  (Ae.flags |= t),
    (i.memoizedState = vl(1 | e, n, void 0, r === void 0 ? null : r));
}
function ff(t, e, n, r) {
  var i = $n();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (nt !== null) {
    var o = nt.memoizedState;
    if (((s = o.destroy), r !== null && hm(r, o.deps))) {
      i.memoizedState = vl(e, n, s, r);
      return;
    }
  }
  (Ae.flags |= t), (i.memoizedState = vl(1 | e, n, s, r));
}
function D0(t, e) {
  return Fu(8390656, 8, t, e);
}
function gm(t, e) {
  return ff(2048, 8, t, e);
}
function $x(t, e) {
  return ff(4, 2, t, e);
}
function Ux(t, e) {
  return ff(4, 4, t, e);
}
function Hx(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Wx(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), ff(4, 4, Hx.bind(null, e, t), n)
  );
}
function ym() {}
function Yx(t, e) {
  var n = $n();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && hm(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Gx(t, e) {
  var n = $n();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && hm(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Kx(t, e, n) {
  return Os & 21
    ? (ar(n, e) || ((n = qv()), (Ae.lanes |= n), (Rs |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (qt = !0)), (t.memoizedState = n));
}
function XP(t, e) {
  var n = pe;
  (pe = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = ed.transition;
  ed.transition = {};
  try {
    t(!1), e();
  } finally {
    (pe = n), (ed.transition = r);
  }
}
function Xx() {
  return $n().memoizedState;
}
function QP(t, e, n) {
  var r = Pi(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qx(t))
  )
    qx(e, n);
  else if (((n = Ex(t, e, n, r)), n !== null)) {
    var i = Ut();
    ir(n, t, r, i), Jx(n, e, r);
  }
}
function qP(t, e, n) {
  var r = Pi(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qx(t)) qx(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), ar(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((i.next = i), lm(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ex(t, e, i, r)),
      n !== null && ((i = Ut()), ir(n, t, r, i), Jx(n, e, r));
  }
}
function Qx(t) {
  var e = t.alternate;
  return t === Ae || (e !== null && e === Ae);
}
function qx(t, e) {
  Fa = vc = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Jx(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Kp(t, n);
  }
}
var xc = {
    readContext: Bn,
    useCallback: kt,
    useContext: kt,
    useEffect: kt,
    useImperativeHandle: kt,
    useInsertionEffect: kt,
    useLayoutEffect: kt,
    useMemo: kt,
    useReducer: kt,
    useRef: kt,
    useState: kt,
    useDebugValue: kt,
    useDeferredValue: kt,
    useTransition: kt,
    useMutableSource: kt,
    useSyncExternalStore: kt,
    useId: kt,
    unstable_isNewReconciler: !1,
  },
  JP = {
    readContext: Bn,
    useCallback: function (t, e) {
      return (hr().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Bn,
    useEffect: D0,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        Fu(4194308, 4, Hx.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return Fu(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Fu(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = hr();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = hr();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = QP.bind(null, Ae, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = hr();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: A0,
    useDebugValue: ym,
    useDeferredValue: function (t) {
      return (hr().memoizedState = t);
    },
    useTransition: function () {
      var t = A0(!1),
        e = t[0];
      return (t = XP.bind(null, t[1])), (hr().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Ae,
        i = hr();
      if (ke) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = e()), ft === null)) throw Error(M(349));
        Os & 30 || jx(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        D0(Fx.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        vl(9, Vx.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = hr(),
        e = ft.identifierPrefix;
      if (ke) {
        var n = jr,
          r = Nr;
        (n = (r & ~(1 << (32 - rr(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = gl++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = KP++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  ZP = {
    readContext: Bn,
    useCallback: Yx,
    useContext: Bn,
    useEffect: gm,
    useImperativeHandle: Wx,
    useInsertionEffect: $x,
    useLayoutEffect: Ux,
    useMemo: Gx,
    useReducer: td,
    useRef: Bx,
    useState: function () {
      return td(yl);
    },
    useDebugValue: ym,
    useDeferredValue: function (t) {
      var e = $n();
      return Kx(e, nt.memoizedState, t);
    },
    useTransition: function () {
      var t = td(yl)[0],
        e = $n().memoizedState;
      return [t, e];
    },
    useMutableSource: Dx,
    useSyncExternalStore: Nx,
    useId: Xx,
    unstable_isNewReconciler: !1,
  },
  ek = {
    readContext: Bn,
    useCallback: Yx,
    useContext: Bn,
    useEffect: gm,
    useImperativeHandle: Wx,
    useInsertionEffect: $x,
    useLayoutEffect: Ux,
    useMemo: Gx,
    useReducer: nd,
    useRef: Bx,
    useState: function () {
      return nd(yl);
    },
    useDebugValue: ym,
    useDeferredValue: function (t) {
      var e = $n();
      return nt === null ? (e.memoizedState = t) : Kx(e, nt.memoizedState, t);
    },
    useTransition: function () {
      var t = nd(yl)[0],
        e = $n().memoizedState;
      return [t, e];
    },
    useMutableSource: Dx,
    useSyncExternalStore: Nx,
    useId: Xx,
    unstable_isNewReconciler: !1,
  };
function Bo(t, e) {
  try {
    var n = "",
      r = e;
    do (n += bC(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function rd(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function xh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tk = typeof WeakMap == "function" ? WeakMap : Map;
function Zx(t, e, n) {
  (n = zr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      wc || ((wc = !0), (Oh = r)), xh(t, e);
    }),
    n
  );
}
function e_(t, e, n) {
  (n = zr(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        xh(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        xh(t, e),
          typeof r != "function" &&
            (Ci === null ? (Ci = new Set([this])) : Ci.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function N0(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new tk();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = mk.bind(null, t, e, n)), e.then(t, t));
}
function j0(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function V0(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = zr(-1, 1)), (e.tag = 2), Si(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var nk = Jr.ReactCurrentOwner,
  qt = !1;
function Vt(t, e, n, r) {
  e.child = t === null ? Mx(e, null, n, r) : Io(e, t.child, n, r);
}
function F0(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    bo(e, i),
    (r = pm(t, e, n, r, s, i)),
    (n = mm()),
    t !== null && !qt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Kr(t, e, i))
      : (ke && n && nm(e), (e.flags |= 1), Vt(t, e, r, i), e.child)
  );
}
function I0(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !km(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), t_(t, e, s, r, i))
      : ((t = $u(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cl), n(o, r) && t.ref === e.ref)
    )
      return Kr(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = ki(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function t_(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (cl(s, r) && t.ref === e.ref)
      if (((qt = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (qt = !0);
      else return (e.lanes = t.lanes), Kr(t, e, i);
  }
  return _h(t, e, n, r, i);
}
function n_(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        xe(mo, mn),
        (mn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          xe(mo, mn),
          (mn |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        xe(mo, mn),
        (mn |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      xe(mo, mn),
      (mn |= r);
  return Vt(t, e, i, n), e.child;
}
function r_(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function _h(t, e, n, r, i) {
  var s = Zt(n) ? Es : Mt.current;
  return (
    (s = Vo(e, s)),
    bo(e, i),
    (n = pm(t, e, n, r, s, i)),
    (r = mm()),
    t !== null && !qt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Kr(t, e, i))
      : (ke && r && nm(e), (e.flags |= 1), Vt(t, e, n, i), e.child)
  );
}
function z0(t, e, n, r, i) {
  if (Zt(n)) {
    var s = !0;
    fc(e);
  } else s = !1;
  if ((bo(e, i), e.stateNode === null))
    Iu(t, e), Rx(e, n, r), vh(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Bn(u))
      : ((u = Zt(n) ? Es : Mt.current), (u = Vo(e, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && L0(e, o, r, u)),
      (si = !1);
    var f = e.memoizedState;
    (o.state = f),
      gc(e, r, o, i),
      (l = e.memoizedState),
      a !== r || f !== l || Jt.current || si
        ? (typeof c == "function" && (yh(e, n, c, r), (l = e.memoizedState)),
          (a = si || R0(e, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      bx(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Zn(e.type, a)),
      (o.props = u),
      (d = e.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Bn(l))
        : ((l = Zt(n) ? Es : Mt.current), (l = Vo(e, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && L0(e, o, r, l)),
      (si = !1),
      (f = e.memoizedState),
      (o.state = f),
      gc(e, r, o, i);
    var m = e.memoizedState;
    a !== d || f !== m || Jt.current || si
      ? (typeof h == "function" && (yh(e, n, h, r), (m = e.memoizedState)),
        (u = si || R0(e, n, u, r, f, m, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, m, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, m, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = m)),
        (o.props = r),
        (o.state = m),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return wh(t, e, n, r, s, i);
}
function wh(t, e, n, r, i, s) {
  r_(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && k0(e, n, !1), Kr(t, e, s);
  (r = e.stateNode), (nk.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Io(e, t.child, null, s)), (e.child = Io(e, null, a, s)))
      : Vt(t, e, a, s),
    (e.memoizedState = r.state),
    i && k0(e, n, !0),
    e.child
  );
}
function i_(t) {
  var e = t.stateNode;
  e.pendingContext
    ? P0(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && P0(t, e.context, !1),
    cm(t, e.containerInfo);
}
function B0(t, e, n, r, i) {
  return Fo(), im(i), (e.flags |= 256), Vt(t, e, n, r), e.child;
}
var Sh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ch(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function s_(t, e, n) {
  var r = e.pendingProps,
    i = Oe.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    xe(Oe, i & 1),
    t === null)
  )
    return (
      mh(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = pf(o, r, 0, null)),
              (t = xs(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Ch(n)),
              (e.memoizedState = Sh),
              t)
            : vm(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return rk(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = ki(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = ki(a, s)) : ((s = xs(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Ch(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Sh),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = ki(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function vm(t, e) {
  return (
    (e = pf({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function au(t, e, n, r) {
  return (
    r !== null && im(r),
    Io(e, t.child, null, n),
    (t = vm(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function rk(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = rd(Error(M(422)))), au(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = pf({ mode: "visible", children: r.children }, i, 0, null)),
        (s = xs(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && Io(e, t.child, null, o),
        (e.child.memoizedState = Ch(o)),
        (e.memoizedState = Sh),
        s);
  if (!(e.mode & 1)) return au(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(M(419))), (r = rd(s, r, void 0)), au(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), qt || a)) {
    if (((r = ft), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Gr(t, i), ir(r, t, i, -1));
    }
    return Pm(), (r = rd(Error(M(421)))), au(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = gk.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (_n = wi(i.nextSibling)),
      (wn = e),
      (ke = !0),
      (tr = null),
      t !== null &&
        ((Ln[Mn++] = Nr),
        (Ln[Mn++] = jr),
        (Ln[Mn++] = bs),
        (Nr = t.id),
        (jr = t.overflow),
        (bs = e)),
      (e = vm(e, r.children)),
      (e.flags |= 4096),
      e);
}
function $0(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), gh(t.return, e, n);
}
function id(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function o_(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Vt(t, e, r.children, n), (r = Oe.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && $0(t, n, e);
        else if (t.tag === 19) $0(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((xe(Oe, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && yc(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          id(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && yc(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        id(e, !0, n, null, s);
        break;
      case "together":
        id(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Iu(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Kr(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Rs |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(M(153));
  if (e.child !== null) {
    for (
      t = e.child, n = ki(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = ki(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function ik(t, e, n) {
  switch (e.tag) {
    case 3:
      i_(e), Fo();
      break;
    case 5:
      Ax(e);
      break;
    case 1:
      Zt(e.type) && fc(e);
      break;
    case 4:
      cm(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      xe(pc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (xe(Oe, Oe.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? s_(t, e, n)
          : (xe(Oe, Oe.current & 1),
            (t = Kr(t, e, n)),
            t !== null ? t.sibling : null);
      xe(Oe, Oe.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return o_(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        xe(Oe, Oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), n_(t, e, n);
  }
  return Kr(t, e, n);
}
var a_, Ph, l_, u_;
a_ = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ph = function () {};
l_ = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), ds(Sr.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Yd(t, i)), (r = Yd(t, r)), (s = []);
        break;
      case "select":
        (i = De({}, i, { value: void 0 })),
          (r = De({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Xd(t, i)), (r = Xd(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = uc);
    }
    qd(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (rl.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (rl.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && we("scroll", t),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
u_ = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function ha(t, e) {
  if (!ke)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Tt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function sk(t, e, n) {
  var r = e.pendingProps;
  switch ((rm(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Tt(e), null;
    case 1:
      return Zt(e.type) && cc(), Tt(e), null;
    case 3:
      return (
        (r = e.stateNode),
        zo(),
        Ce(Jt),
        Ce(Mt),
        dm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (su(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), tr !== null && (Mh(tr), (tr = null)))),
        Ph(t, e),
        Tt(e),
        null
      );
    case 5:
      fm(e);
      var i = ds(ml.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        l_(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(M(166));
          return Tt(e), null;
        }
        if (((t = ds(Sr.current)), su(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[gr] = e), (r[hl] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ta.length; i++) we(Ta[i], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we("error", r), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              qg(r, s), we("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                we("invalid", r);
              break;
            case "textarea":
              Zg(r, s), we("invalid", r);
          }
          qd(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      iu(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      iu(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : rl.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  we("scroll", r);
            }
          switch (n) {
            case "input":
              Ql(r), Jg(r, s, !0);
              break;
            case "textarea":
              Ql(r), e0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = uc);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = jv(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[gr] = e),
            (t[hl] = r),
            a_(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Jd(n, r)), n)) {
              case "dialog":
                we("cancel", t), we("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ta.length; i++) we(Ta[i], t);
                i = r;
                break;
              case "source":
                we("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                we("error", t), we("load", t), (i = r);
                break;
              case "details":
                we("toggle", t), (i = r);
                break;
              case "input":
                qg(t, r), (i = Yd(t, r)), we("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = De({}, r, { value: void 0 })),
                  we("invalid", t);
                break;
              case "textarea":
                Zg(t, r), (i = Xd(t, r)), we("invalid", t);
                break;
              default:
                i = r;
            }
            qd(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Iv(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Vv(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && il(t, l)
                    : typeof l == "number" && il(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (rl.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && we("scroll", t)
                      : l != null && $p(t, s, l, o));
              }
            switch (n) {
              case "input":
                Ql(t), Jg(t, r, !1);
                break;
              case "textarea":
                Ql(t), e0(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Mi(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Po(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Po(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = uc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Tt(e), null;
    case 6:
      if (t && e.stateNode != null) u_(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(M(166));
        if (((n = ds(ml.current)), ds(Sr.current), su(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[gr] = e),
            (s = r.nodeValue !== n) && ((t = wn), t !== null))
          )
            switch (t.tag) {
              case 3:
                iu(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  iu(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gr] = e),
            (e.stateNode = r);
      }
      return Tt(e), null;
    case 13:
      if (
        (Ce(Oe),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ke && _n !== null && e.mode & 1 && !(e.flags & 128))
          Tx(), Fo(), (e.flags |= 98560), (s = !1);
        else if (((s = su(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(M(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(M(317));
            s[gr] = e;
          } else
            Fo(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Tt(e), (s = !1);
        } else tr !== null && (Mh(tr), (tr = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Oe.current & 1 ? it === 0 && (it = 3) : Pm())),
          e.updateQueue !== null && (e.flags |= 4),
          Tt(e),
          null);
    case 4:
      return (
        zo(), Ph(t, e), t === null && fl(e.stateNode.containerInfo), Tt(e), null
      );
    case 10:
      return am(e.type._context), Tt(e), null;
    case 17:
      return Zt(e.type) && cc(), Tt(e), null;
    case 19:
      if ((Ce(Oe), (s = e.memoizedState), s === null)) return Tt(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) ha(s, !1);
        else {
          if (it !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = yc(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    ha(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return xe(Oe, (Oe.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            He() > $o &&
            ((e.flags |= 128), (r = !0), ha(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = yc(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              ha(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ke)
            )
              return Tt(e), null;
          } else
            2 * He() - s.renderingStartTime > $o &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), ha(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = He()),
          (e.sibling = null),
          (n = Oe.current),
          xe(Oe, r ? (n & 1) | 2 : n & 1),
          e)
        : (Tt(e), null);
    case 22:
    case 23:
      return (
        Cm(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? mn & 1073741824 && (Tt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Tt(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, e.tag));
}
function ok(t, e) {
  switch ((rm(e), e.tag)) {
    case 1:
      return (
        Zt(e.type) && cc(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        zo(),
        Ce(Jt),
        Ce(Mt),
        dm(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return fm(e), null;
    case 13:
      if (
        (Ce(Oe), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(M(340));
        Fo();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return Ce(Oe), null;
    case 4:
      return zo(), null;
    case 10:
      return am(e.type._context), null;
    case 22:
    case 23:
      return Cm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var lu = !1,
  bt = !1,
  ak = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function po(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ve(t, e, r);
      }
    else n.current = null;
}
function kh(t, e, n) {
  try {
    n();
  } catch (r) {
    Ve(t, e, r);
  }
}
var U0 = !1;
function lk(t, e) {
  if (((lh = oc), (t = hx()), tm(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = t,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === t) break t;
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (uh = { focusedElem: t, selectionRange: n }, oc = !1, z = e; z !== null; )
    if (((e = z), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (z = t);
    else
      for (; z !== null; ) {
        e = z;
        try {
          var m = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    _ = m.memoizedState,
                    v = e.stateNode,
                    p = v.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? g : Zn(e.type, g),
                      _
                    );
                  v.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (x) {
          Ve(e, e.return, x);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (z = t);
          break;
        }
        z = e.return;
      }
  return (m = U0), (U0 = !1), m;
}
function Ia(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && kh(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function df(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Th(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function c_(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), c_(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[gr], delete e[hl], delete e[dh], delete e[HP], delete e[WP])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function f_(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function H0(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || f_(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Eh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = uc));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Eh(t, e, n), t = t.sibling; t !== null; ) Eh(t, e, n), (t = t.sibling);
}
function bh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (bh(t, e, n), t = t.sibling; t !== null; ) bh(t, e, n), (t = t.sibling);
}
var vt = null,
  er = !1;
function ti(t, e, n) {
  for (n = n.child; n !== null; ) d_(t, e, n), (n = n.sibling);
}
function d_(t, e, n) {
  if (wr && typeof wr.onCommitFiberUnmount == "function")
    try {
      wr.onCommitFiberUnmount(rf, n);
    } catch {}
  switch (n.tag) {
    case 5:
      bt || po(n, e);
    case 6:
      var r = vt,
        i = er;
      (vt = null),
        ti(t, e, n),
        (vt = r),
        (er = i),
        vt !== null &&
          (er
            ? ((t = vt),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : vt.removeChild(n.stateNode));
      break;
    case 18:
      vt !== null &&
        (er
          ? ((t = vt),
            (n = n.stateNode),
            t.nodeType === 8
              ? qf(t.parentNode, n)
              : t.nodeType === 1 && qf(t, n),
            ll(t))
          : qf(vt, n.stateNode));
      break;
    case 4:
      (r = vt),
        (i = er),
        (vt = n.stateNode.containerInfo),
        (er = !0),
        ti(t, e, n),
        (vt = r),
        (er = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !bt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && kh(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      ti(t, e, n);
      break;
    case 1:
      if (
        !bt &&
        (po(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ve(n, e, a);
        }
      ti(t, e, n);
      break;
    case 21:
      ti(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((bt = (r = bt) || n.memoizedState !== null), ti(t, e, n), (bt = r))
        : ti(t, e, n);
      break;
    default:
      ti(t, e, n);
  }
}
function W0(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new ak()),
      e.forEach(function (r) {
        var i = yk.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function qn(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (vt = a.stateNode), (er = !1);
              break e;
            case 3:
              (vt = a.stateNode.containerInfo), (er = !0);
              break e;
            case 4:
              (vt = a.stateNode.containerInfo), (er = !0);
              break e;
          }
          a = a.return;
        }
        if (vt === null) throw Error(M(160));
        d_(s, o, i), (vt = null), (er = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Ve(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) h_(e, t), (e = e.sibling);
}
function h_(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qn(e, t), dr(t), r & 4)) {
        try {
          Ia(3, t, t.return), df(3, t);
        } catch (g) {
          Ve(t, t.return, g);
        }
        try {
          Ia(5, t, t.return);
        } catch (g) {
          Ve(t, t.return, g);
        }
      }
      break;
    case 1:
      qn(e, t), dr(t), r & 512 && n !== null && po(n, n.return);
      break;
    case 5:
      if (
        (qn(e, t),
        dr(t),
        r & 512 && n !== null && po(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          il(i, "");
        } catch (g) {
          Ve(t, t.return, g);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Dv(i, s),
              Jd(a, o);
            var u = Jd(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? Iv(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Vv(i, d)
                : c === "children"
                ? il(i, d)
                : $p(i, c, d, u);
            }
            switch (a) {
              case "input":
                Gd(i, s);
                break;
              case "textarea":
                Nv(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var h = s.value;
                h != null
                  ? Po(i, !!s.multiple, h, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Po(i, !!s.multiple, s.defaultValue, !0)
                      : Po(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[hl] = s;
          } catch (g) {
            Ve(t, t.return, g);
          }
      }
      break;
    case 6:
      if ((qn(e, t), dr(t), r & 4)) {
        if (t.stateNode === null) throw Error(M(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (g) {
          Ve(t, t.return, g);
        }
      }
      break;
    case 3:
      if (
        (qn(e, t), dr(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ll(e.containerInfo);
        } catch (g) {
          Ve(t, t.return, g);
        }
      break;
    case 4:
      qn(e, t), dr(t);
      break;
    case 13:
      qn(e, t),
        dr(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (wm = He())),
        r & 4 && W0(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((bt = (u = bt) || c), qn(e, t), (bt = u)) : qn(e, t),
        dr(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (z = t, c = t.child; c !== null; ) {
            for (d = z = c; z !== null; ) {
              switch (((f = z), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ia(4, f, f.return);
                  break;
                case 1:
                  po(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (e = r),
                        (m.props = e.memoizedProps),
                        (m.state = e.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      Ve(r, n, g);
                    }
                  }
                  break;
                case 5:
                  po(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    G0(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (z = h)) : G0(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = t; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Fv("display", o)));
              } catch (g) {
                Ve(t, t.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Ve(t, t.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === t) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === t) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === t) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      qn(e, t), dr(t), r & 4 && W0(t);
      break;
    case 21:
      break;
    default:
      qn(e, t), dr(t);
  }
}
function dr(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (f_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (il(i, ""), (r.flags &= -33));
          var s = H0(t);
          bh(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = H0(t);
          Eh(t, a, o);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      Ve(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function uk(t, e, n) {
  (z = t), p_(t);
}
function p_(t, e, n) {
  for (var r = (t.mode & 1) !== 0; z !== null; ) {
    var i = z,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || lu;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || bt;
        a = lu;
        var u = bt;
        if (((lu = o), (bt = l) && !u))
          for (z = i; z !== null; )
            (o = z),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? K0(i)
                : l !== null
                ? ((l.return = o), (z = l))
                : K0(i);
        for (; s !== null; ) (z = s), p_(s), (s = s.sibling);
        (z = i), (lu = a), (bt = u);
      }
      Y0(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (z = s)) : Y0(t);
  }
}
function Y0(t) {
  for (; z !== null; ) {
    var e = z;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              bt || df(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !bt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Zn(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = e.updateQueue;
              s !== null && O0(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                O0(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ll(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        bt || (e.flags & 512 && Th(e));
      } catch (f) {
        Ve(e, e.return, f);
      }
    }
    if (e === t) {
      z = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (z = n);
      break;
    }
    z = e.return;
  }
}
function G0(t) {
  for (; z !== null; ) {
    var e = z;
    if (e === t) {
      z = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (z = n);
      break;
    }
    z = e.return;
  }
}
function K0(t) {
  for (; z !== null; ) {
    var e = z;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            df(4, e);
          } catch (l) {
            Ve(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ve(e, i, l);
            }
          }
          var s = e.return;
          try {
            Th(e);
          } catch (l) {
            Ve(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Th(e);
          } catch (l) {
            Ve(e, o, l);
          }
      }
    } catch (l) {
      Ve(e, e.return, l);
    }
    if (e === t) {
      z = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (z = a);
      break;
    }
    z = e.return;
  }
}
var ck = Math.ceil,
  _c = Jr.ReactCurrentDispatcher,
  xm = Jr.ReactCurrentOwner,
  In = Jr.ReactCurrentBatchConfig,
  fe = 0,
  ft = null,
  qe = null,
  wt = 0,
  mn = 0,
  mo = zi(0),
  it = 0,
  xl = null,
  Rs = 0,
  hf = 0,
  _m = 0,
  za = null,
  Xt = null,
  wm = 0,
  $o = 1 / 0,
  Rr = null,
  wc = !1,
  Oh = null,
  Ci = null,
  uu = !1,
  fi = null,
  Sc = 0,
  Ba = 0,
  Rh = null,
  zu = -1,
  Bu = 0;
function Ut() {
  return fe & 6 ? He() : zu !== -1 ? zu : (zu = He());
}
function Pi(t) {
  return t.mode & 1
    ? fe & 2 && wt !== 0
      ? wt & -wt
      : GP.transition !== null
      ? (Bu === 0 && (Bu = qv()), Bu)
      : ((t = pe),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : ix(t.type))),
        t)
    : 1;
}
function ir(t, e, n, r) {
  if (50 < Ba) throw ((Ba = 0), (Rh = null), Error(M(185)));
  Nl(t, n, r),
    (!(fe & 2) || t !== ft) &&
      (t === ft && (!(fe & 2) && (hf |= n), it === 4 && ui(t, wt)),
      en(t, r),
      n === 1 && fe === 0 && !(e.mode & 1) && (($o = He() + 500), uf && Bi()));
}
function en(t, e) {
  var n = t.callbackNode;
  GC(t, e);
  var r = sc(t, t === ft ? wt : 0);
  if (r === 0)
    n !== null && r0(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && r0(n), e === 1))
      t.tag === 0 ? YP(X0.bind(null, t)) : Cx(X0.bind(null, t)),
        $P(function () {
          !(fe & 6) && Bi();
        }),
        (n = null);
    else {
      switch (Jv(r)) {
        case 1:
          n = Gp;
          break;
        case 4:
          n = Xv;
          break;
        case 16:
          n = ic;
          break;
        case 536870912:
          n = Qv;
          break;
        default:
          n = ic;
      }
      n = S_(n, m_.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function m_(t, e) {
  if (((zu = -1), (Bu = 0), fe & 6)) throw Error(M(327));
  var n = t.callbackNode;
  if (Oo() && t.callbackNode !== n) return null;
  var r = sc(t, t === ft ? wt : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Cc(t, r);
  else {
    e = r;
    var i = fe;
    fe |= 2;
    var s = y_();
    (ft !== t || wt !== e) && ((Rr = null), ($o = He() + 500), vs(t, e));
    do
      try {
        hk();
        break;
      } catch (a) {
        g_(t, a);
      }
    while (1);
    om(),
      (_c.current = s),
      (fe = i),
      qe !== null ? (e = 0) : ((ft = null), (wt = 0), (e = it));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = rh(t)), i !== 0 && ((r = i), (e = Lh(t, i)))), e === 1)
    )
      throw ((n = xl), vs(t, 0), ui(t, r), en(t, He()), n);
    if (e === 6) ui(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !fk(i) &&
          ((e = Cc(t, r)),
          e === 2 && ((s = rh(t)), s !== 0 && ((r = s), (e = Lh(t, s)))),
          e === 1))
      )
        throw ((n = xl), vs(t, 0), ui(t, r), en(t, He()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          is(t, Xt, Rr);
          break;
        case 3:
          if (
            (ui(t, r), (r & 130023424) === r && ((e = wm + 500 - He()), 10 < e))
          ) {
            if (sc(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              Ut(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = fh(is.bind(null, t, Xt, Rr), e);
            break;
          }
          is(t, Xt, Rr);
          break;
        case 4:
          if ((ui(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - rr(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = He() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ck(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = fh(is.bind(null, t, Xt, Rr), r);
            break;
          }
          is(t, Xt, Rr);
          break;
        case 5:
          is(t, Xt, Rr);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return en(t, He()), t.callbackNode === n ? m_.bind(null, t) : null;
}
function Lh(t, e) {
  var n = za;
  return (
    t.current.memoizedState.isDehydrated && (vs(t, e).flags |= 256),
    (t = Cc(t, e)),
    t !== 2 && ((e = Xt), (Xt = n), e !== null && Mh(e)),
    t
  );
}
function Mh(t) {
  Xt === null ? (Xt = t) : Xt.push.apply(Xt, t);
}
function fk(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ar(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function ui(t, e) {
  for (
    e &= ~_m,
      e &= ~hf,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - rr(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function X0(t) {
  if (fe & 6) throw Error(M(327));
  Oo();
  var e = sc(t, 0);
  if (!(e & 1)) return en(t, He()), null;
  var n = Cc(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = rh(t);
    r !== 0 && ((e = r), (n = Lh(t, r)));
  }
  if (n === 1) throw ((n = xl), vs(t, 0), ui(t, e), en(t, He()), n);
  if (n === 6) throw Error(M(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    is(t, Xt, Rr),
    en(t, He()),
    null
  );
}
function Sm(t, e) {
  var n = fe;
  fe |= 1;
  try {
    return t(e);
  } finally {
    (fe = n), fe === 0 && (($o = He() + 500), uf && Bi());
  }
}
function Ls(t) {
  fi !== null && fi.tag === 0 && !(fe & 6) && Oo();
  var e = fe;
  fe |= 1;
  var n = In.transition,
    r = pe;
  try {
    if (((In.transition = null), (pe = 1), t)) return t();
  } finally {
    (pe = r), (In.transition = n), (fe = e), !(fe & 6) && Bi();
  }
}
function Cm() {
  (mn = mo.current), Ce(mo);
}
function vs(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), BP(n)), qe !== null))
    for (n = qe.return; n !== null; ) {
      var r = n;
      switch ((rm(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cc();
          break;
        case 3:
          zo(), Ce(Jt), Ce(Mt), dm();
          break;
        case 5:
          fm(r);
          break;
        case 4:
          zo();
          break;
        case 13:
          Ce(Oe);
          break;
        case 19:
          Ce(Oe);
          break;
        case 10:
          am(r.type._context);
          break;
        case 22:
        case 23:
          Cm();
      }
      n = n.return;
    }
  if (
    ((ft = t),
    (qe = t = ki(t.current, null)),
    (wt = mn = e),
    (it = 0),
    (xl = null),
    (_m = hf = Rs = 0),
    (Xt = za = null),
    fs !== null)
  ) {
    for (e = 0; e < fs.length; e++)
      if (((n = fs[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    fs = null;
  }
  return t;
}
function g_(t, e) {
  do {
    var n = qe;
    try {
      if ((om(), (Vu.current = xc), vc)) {
        for (var r = Ae.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vc = !1;
      }
      if (
        ((Os = 0),
        (ct = nt = Ae = null),
        (Fa = !1),
        (gl = 0),
        (xm.current = null),
        n === null || n.return === null)
      ) {
        (it = 1), (xl = e), (qe = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = wt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = j0(o);
          if (h !== null) {
            (h.flags &= -257),
              V0(h, o, a, s, e),
              h.mode & 1 && N0(s, u, e),
              (e = h),
              (l = u);
            var m = e.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(l), (e.updateQueue = g);
            } else m.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              N0(s, u, e), Pm();
              break e;
            }
            l = Error(M(426));
          }
        } else if (ke && a.mode & 1) {
          var _ = j0(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              V0(_, o, a, s, e),
              im(Bo(l, a));
            break e;
          }
        }
        (s = l = Bo(l, a)),
          it !== 4 && (it = 2),
          za === null ? (za = [s]) : za.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var v = Zx(s, l, e);
              b0(s, v);
              break e;
            case 1:
              a = l;
              var p = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Ci === null || !Ci.has(y))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var x = e_(s, a, e);
                b0(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      x_(n);
    } catch (w) {
      (e = w), qe === n && n !== null && (qe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function y_() {
  var t = _c.current;
  return (_c.current = xc), t === null ? xc : t;
}
function Pm() {
  (it === 0 || it === 3 || it === 2) && (it = 4),
    ft === null || (!(Rs & 268435455) && !(hf & 268435455)) || ui(ft, wt);
}
function Cc(t, e) {
  var n = fe;
  fe |= 2;
  var r = y_();
  (ft !== t || wt !== e) && ((Rr = null), vs(t, e));
  do
    try {
      dk();
      break;
    } catch (i) {
      g_(t, i);
    }
  while (1);
  if ((om(), (fe = n), (_c.current = r), qe !== null)) throw Error(M(261));
  return (ft = null), (wt = 0), it;
}
function dk() {
  for (; qe !== null; ) v_(qe);
}
function hk() {
  for (; qe !== null && !FC(); ) v_(qe);
}
function v_(t) {
  var e = w_(t.alternate, t, mn);
  (t.memoizedProps = t.pendingProps),
    e === null ? x_(t) : (qe = e),
    (xm.current = null);
}
function x_(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = ok(n, e)), n !== null)) {
        (n.flags &= 32767), (qe = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (it = 6), (qe = null);
        return;
      }
    } else if (((n = sk(n, e, mn)), n !== null)) {
      qe = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      qe = e;
      return;
    }
    qe = e = t;
  } while (e !== null);
  it === 0 && (it = 5);
}
function is(t, e, n) {
  var r = pe,
    i = In.transition;
  try {
    (In.transition = null), (pe = 1), pk(t, e, n, r);
  } finally {
    (In.transition = i), (pe = r);
  }
  return null;
}
function pk(t, e, n, r) {
  do Oo();
  while (fi !== null);
  if (fe & 6) throw Error(M(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(M(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (KC(t, s),
    t === ft && ((qe = ft = null), (wt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      uu ||
      ((uu = !0),
      S_(ic, function () {
        return Oo(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = In.transition), (In.transition = null);
    var o = pe;
    pe = 1;
    var a = fe;
    (fe |= 4),
      (xm.current = null),
      lk(t, n),
      h_(n, t),
      DP(uh),
      (oc = !!lh),
      (uh = lh = null),
      (t.current = n),
      uk(n),
      IC(),
      (fe = a),
      (pe = o),
      (In.transition = s);
  } else t.current = n;
  if (
    (uu && ((uu = !1), (fi = t), (Sc = i)),
    (s = t.pendingLanes),
    s === 0 && (Ci = null),
    $C(n.stateNode),
    en(t, He()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (wc) throw ((wc = !1), (t = Oh), (Oh = null), t);
  return (
    Sc & 1 && t.tag !== 0 && Oo(),
    (s = t.pendingLanes),
    s & 1 ? (t === Rh ? Ba++ : ((Ba = 0), (Rh = t))) : (Ba = 0),
    Bi(),
    null
  );
}
function Oo() {
  if (fi !== null) {
    var t = Jv(Sc),
      e = In.transition,
      n = pe;
    try {
      if (((In.transition = null), (pe = 16 > t ? 16 : t), fi === null))
        var r = !1;
      else {
        if (((t = fi), (fi = null), (Sc = 0), fe & 6)) throw Error(M(331));
        var i = fe;
        for (fe |= 4, z = t.current; z !== null; ) {
          var s = z,
            o = s.child;
          if (z.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (z = u; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ia(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (z = d);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var f = c.sibling,
                        h = c.return;
                      if ((c_(c), c === u)) {
                        z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (z = f);
                        break;
                      }
                      z = h;
                    }
                }
              }
              var m = s.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var _ = g.sibling;
                    (g.sibling = null), (g = _);
                  } while (g !== null);
                }
              }
              z = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (z = o);
          else
            e: for (; z !== null; ) {
              if (((s = z), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ia(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (z = v);
                break e;
              }
              z = s.return;
            }
        }
        var p = t.current;
        for (z = p; z !== null; ) {
          o = z;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (z = y);
          else
            e: for (o = p; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      df(9, a);
                  }
                } catch (w) {
                  Ve(a, a.return, w);
                }
              if (a === o) {
                z = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (z = x);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((fe = i), Bi(), wr && typeof wr.onPostCommitFiberRoot == "function")
        )
          try {
            wr.onPostCommitFiberRoot(rf, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (pe = n), (In.transition = e);
    }
  }
  return !1;
}
function Q0(t, e, n) {
  (e = Bo(n, e)),
    (e = Zx(t, e, 1)),
    (t = Si(t, e, 1)),
    (e = Ut()),
    t !== null && (Nl(t, 1, e), en(t, e));
}
function Ve(t, e, n) {
  if (t.tag === 3) Q0(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Q0(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ci === null || !Ci.has(r)))
        ) {
          (t = Bo(n, t)),
            (t = e_(e, t, 1)),
            (e = Si(e, t, 1)),
            (t = Ut()),
            e !== null && (Nl(e, 1, t), en(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function mk(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = Ut()),
    (t.pingedLanes |= t.suspendedLanes & n),
    ft === t &&
      (wt & n) === n &&
      (it === 4 || (it === 3 && (wt & 130023424) === wt && 500 > He() - wm)
        ? vs(t, 0)
        : (_m |= n)),
    en(t, e);
}
function __(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Zl), (Zl <<= 1), !(Zl & 130023424) && (Zl = 4194304))
      : (e = 1));
  var n = Ut();
  (t = Gr(t, e)), t !== null && (Nl(t, e, n), en(t, n));
}
function gk(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), __(t, n);
}
function yk(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(e), __(t, n);
}
var w_;
w_ = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Jt.current) qt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (qt = !1), ik(t, e, n);
      qt = !!(t.flags & 131072);
    }
  else (qt = !1), ke && e.flags & 1048576 && Px(e, hc, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Iu(t, e), (t = e.pendingProps);
      var i = Vo(e, Mt.current);
      bo(e, n), (i = pm(null, e, r, t, i, n));
      var s = mm();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Zt(r) ? ((s = !0), fc(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            um(e),
            (i.updater = cf),
            (e.stateNode = i),
            (i._reactInternals = e),
            vh(e, r, t, n),
            (e = wh(null, e, r, !0, s, n)))
          : ((e.tag = 0), ke && s && nm(e), Vt(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Iu(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = xk(r)),
          (t = Zn(r, t)),
          i)
        ) {
          case 0:
            e = _h(null, e, r, t, n);
            break e;
          case 1:
            e = z0(null, e, r, t, n);
            break e;
          case 11:
            e = F0(null, e, r, t, n);
            break e;
          case 14:
            e = I0(null, e, r, Zn(r.type, t), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Zn(r, i)),
        _h(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Zn(r, i)),
        z0(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((i_(e), t === null)) throw Error(M(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          bx(t, e),
          gc(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = Bo(Error(M(423)), e)), (e = B0(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Bo(Error(M(424)), e)), (e = B0(t, e, r, n, i));
            break e;
          } else
            for (
              _n = wi(e.stateNode.containerInfo.firstChild),
                wn = e,
                ke = !0,
                tr = null,
                n = Mx(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fo(), r === i)) {
            e = Kr(t, e, n);
            break e;
          }
          Vt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Ax(e),
        t === null && mh(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        ch(r, i) ? (o = null) : s !== null && ch(r, s) && (e.flags |= 32),
        r_(t, e),
        Vt(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && mh(e), null;
    case 13:
      return s_(t, e, n);
    case 4:
      return (
        cm(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Io(e, null, r, n)) : Vt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Zn(r, i)),
        F0(t, e, r, i, n)
      );
    case 7:
      return Vt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Vt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Vt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          xe(pc, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ar(s.value, o)) {
            if (s.children === i.children && !Jt.current) {
              e = Kr(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = zr(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      gh(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(M(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  gh(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Vt(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        bo(e, n),
        (i = Bn(i)),
        (r = r(i)),
        (e.flags |= 1),
        Vt(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = Zn(r, e.pendingProps)),
        (i = Zn(r.type, i)),
        I0(t, e, r, i, n)
      );
    case 15:
      return t_(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Zn(r, i)),
        Iu(t, e),
        (e.tag = 1),
        Zt(r) ? ((t = !0), fc(e)) : (t = !1),
        bo(e, n),
        Rx(e, r, i),
        vh(e, r, i, n),
        wh(null, e, r, !0, t, n)
      );
    case 19:
      return o_(t, e, n);
    case 22:
      return n_(t, e, n);
  }
  throw Error(M(156, e.tag));
};
function S_(t, e) {
  return Kv(t, e);
}
function vk(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Nn(t, e, n, r) {
  return new vk(t, e, n, r);
}
function km(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function xk(t) {
  if (typeof t == "function") return km(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Hp)) return 11;
    if (t === Wp) return 14;
  }
  return 2;
}
function ki(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Nn(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function $u(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) km(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case io:
        return xs(n.children, i, s, e);
      case Up:
        (o = 8), (i |= 8);
        break;
      case $d:
        return (
          (t = Nn(12, n, e, i | 2)), (t.elementType = $d), (t.lanes = s), t
        );
      case Ud:
        return (t = Nn(13, n, e, i)), (t.elementType = Ud), (t.lanes = s), t;
      case Hd:
        return (t = Nn(19, n, e, i)), (t.elementType = Hd), (t.lanes = s), t;
      case Lv:
        return pf(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Ov:
              o = 10;
              break e;
            case Rv:
              o = 9;
              break e;
            case Hp:
              o = 11;
              break e;
            case Wp:
              o = 14;
              break e;
            case ii:
              (o = 16), (r = null);
              break e;
          }
        throw Error(M(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Nn(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function xs(t, e, n, r) {
  return (t = Nn(7, t, r, e)), (t.lanes = n), t;
}
function pf(t, e, n, r) {
  return (
    (t = Nn(22, t, r, e)),
    (t.elementType = Lv),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function sd(t, e, n) {
  return (t = Nn(6, t, null, e)), (t.lanes = n), t;
}
function od(t, e, n) {
  return (
    (e = Nn(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function _k(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zf(0)),
    (this.expirationTimes = zf(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zf(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Tm(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new _k(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Nn(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    um(s),
    t
  );
}
function wk(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ro,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function C_(t) {
  if (!t) return Ai;
  t = t._reactInternals;
  e: {
    if (Is(t) !== t || t.tag !== 1) throw Error(M(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Zt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(M(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Zt(n)) return Sx(t, n, e);
  }
  return e;
}
function P_(t, e, n, r, i, s, o, a, l) {
  return (
    (t = Tm(n, r, !0, t, i, s, o, a, l)),
    (t.context = C_(null)),
    (n = t.current),
    (r = Ut()),
    (i = Pi(n)),
    (s = zr(r, i)),
    (s.callback = e ?? null),
    Si(n, s, i),
    (t.current.lanes = i),
    Nl(t, i, r),
    en(t, r),
    t
  );
}
function mf(t, e, n, r) {
  var i = e.current,
    s = Ut(),
    o = Pi(i);
  return (
    (n = C_(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = zr(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Si(i, e, o)),
    t !== null && (ir(t, i, o, s), ju(t, i, o)),
    o
  );
}
function Pc(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function q0(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Em(t, e) {
  q0(t, e), (t = t.alternate) && q0(t, e);
}
function Sk() {
  return null;
}
var k_ =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function bm(t) {
  this._internalRoot = t;
}
gf.prototype.render = bm.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(M(409));
  mf(t, e, null, null);
};
gf.prototype.unmount = bm.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Ls(function () {
      mf(null, t, null, null);
    }),
      (e[Yr] = null);
  }
};
function gf(t) {
  this._internalRoot = t;
}
gf.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = tx();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < li.length && e !== 0 && e < li[n].priority; n++);
    li.splice(n, 0, t), n === 0 && rx(t);
  }
};
function Om(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function yf(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function J0() {}
function Ck(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Pc(o);
        s.call(u);
      };
    }
    var o = P_(e, r, t, 0, null, !1, !1, "", J0);
    return (
      (t._reactRootContainer = o),
      (t[Yr] = o.current),
      fl(t.nodeType === 8 ? t.parentNode : t),
      Ls(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Pc(l);
      a.call(u);
    };
  }
  var l = Tm(t, 0, !1, null, null, !1, !1, "", J0);
  return (
    (t._reactRootContainer = l),
    (t[Yr] = l.current),
    fl(t.nodeType === 8 ? t.parentNode : t),
    Ls(function () {
      mf(e, l, n, r);
    }),
    l
  );
}
function vf(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Pc(o);
        a.call(l);
      };
    }
    mf(e, o, t, i);
  } else o = Ck(n, e, t, i, r);
  return Pc(o);
}
Zv = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = ka(e.pendingLanes);
        n !== 0 &&
          (Kp(e, n | 1), en(e, He()), !(fe & 6) && (($o = He() + 500), Bi()));
      }
      break;
    case 13:
      Ls(function () {
        var r = Gr(t, 1);
        if (r !== null) {
          var i = Ut();
          ir(r, t, 1, i);
        }
      }),
        Em(t, 1);
  }
};
Xp = function (t) {
  if (t.tag === 13) {
    var e = Gr(t, 134217728);
    if (e !== null) {
      var n = Ut();
      ir(e, t, 134217728, n);
    }
    Em(t, 134217728);
  }
};
ex = function (t) {
  if (t.tag === 13) {
    var e = Pi(t),
      n = Gr(t, e);
    if (n !== null) {
      var r = Ut();
      ir(n, t, e, r);
    }
    Em(t, e);
  }
};
tx = function () {
  return pe;
};
nx = function (t, e) {
  var n = pe;
  try {
    return (pe = t), e();
  } finally {
    pe = n;
  }
};
eh = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Gd(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = lf(r);
            if (!i) throw Error(M(90));
            Av(r), Gd(r, i);
          }
        }
      }
      break;
    case "textarea":
      Nv(t, n);
      break;
    case "select":
      (e = n.value), e != null && Po(t, !!n.multiple, e, !1);
  }
};
$v = Sm;
Uv = Ls;
var Pk = { usingClientEntryPoint: !1, Events: [Vl, lo, lf, zv, Bv, Sm] },
  pa = {
    findFiberByHostInstance: cs,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  kk = {
    bundleType: pa.bundleType,
    version: pa.version,
    rendererPackageName: pa.rendererPackageName,
    rendererConfig: pa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Jr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Yv(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: pa.findFiberByHostInstance || Sk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cu.isDisabled && cu.supportsFiber)
    try {
      (rf = cu.inject(kk)), (wr = cu);
    } catch {}
}
Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pk;
Tn.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Om(e)) throw Error(M(200));
  return wk(t, e, null, n);
};
Tn.createRoot = function (t, e) {
  if (!Om(t)) throw Error(M(299));
  var n = !1,
    r = "",
    i = k_;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Tm(t, 1, !1, null, null, n, !1, r, i)),
    (t[Yr] = e.current),
    fl(t.nodeType === 8 ? t.parentNode : t),
    new bm(e)
  );
};
Tn.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(M(188))
      : ((t = Object.keys(t).join(",")), Error(M(268, t)));
  return (t = Yv(e)), (t = t === null ? null : t.stateNode), t;
};
Tn.flushSync = function (t) {
  return Ls(t);
};
Tn.hydrate = function (t, e, n) {
  if (!yf(e)) throw Error(M(200));
  return vf(null, t, e, !0, n);
};
Tn.hydrateRoot = function (t, e, n) {
  if (!Om(t)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = k_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = P_(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[Yr] = e.current),
    fl(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new gf(e);
};
Tn.render = function (t, e, n) {
  if (!yf(e)) throw Error(M(200));
  return vf(null, t, e, !1, n);
};
Tn.unmountComponentAtNode = function (t) {
  if (!yf(t)) throw Error(M(40));
  return t._reactRootContainer
    ? (Ls(function () {
        vf(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Yr] = null);
        });
      }),
      !0)
    : !1;
};
Tn.unstable_batchedUpdates = Sm;
Tn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!yf(n)) throw Error(M(200));
  if (t == null || t._reactInternals === void 0) throw Error(M(38));
  return vf(t, e, n, !1, r);
};
Tn.version = "18.2.0-next-9e3b772b8-20220608";
function T_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T_);
    } catch (t) {
      console.error(t);
    }
}
T_(), (Pv.exports = Tn);
var Tk = Pv.exports,
  Z0 = Tk;
(zd.createRoot = Z0.createRoot), (zd.hydrateRoot = Z0.hydrateRoot);
function Lr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function E_(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Sn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Uo = { duration: 0.5, overwrite: !1, delay: 0 },
  Rm,
  Rt,
  Fe,
  jn = 1e8,
  ve = 1 / jn,
  Ah = Math.PI * 2,
  Ek = Ah / 4,
  bk = 0,
  b_ = Math.sqrt,
  Ok = Math.cos,
  Rk = Math.sin,
  dt = function (e) {
    return typeof e == "string";
  },
  ze = function (e) {
    return typeof e == "function";
  },
  Xr = function (e) {
    return typeof e == "number";
  },
  Lm = function (e) {
    return typeof e > "u";
  },
  Tr = function (e) {
    return typeof e == "object";
  },
  tn = function (e) {
    return e !== !1;
  },
  Mm = function () {
    return typeof window < "u";
  },
  fu = function (e) {
    return ze(e) || dt(e);
  },
  O_ =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Lt = Array.isArray,
  Dh = /(?:-?\.?\d|\.)+/gi,
  R_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  go = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ad = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  L_ = /[+-]=-?[.\d]+/,
  M_ = /[^,'"\[\]\s]+/gi,
  Lk = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Re,
  Rn,
  Nh,
  Am,
  Pn = {},
  kc = {},
  A_,
  D_ = function (e) {
    return (kc = Ms(e, Pn)) && sn;
  },
  Dm = function (e, n) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Tc = function (e, n) {
    return !n && console.warn(e);
  },
  N_ = function (e, n) {
    return (e && (Pn[e] = n) && kc && (kc[e] = n)) || Pn;
  },
  _l = function () {
    return 0;
  },
  Mk = { suppressEvents: !0, isStart: !0, kill: !1 },
  Uu = { suppressEvents: !0, kill: !1 },
  Ak = { suppressEvents: !0 },
  Nm = {},
  Ti = [],
  jh = {},
  j_,
  yn = {},
  ld = {},
  e1 = 30,
  Hu = [],
  jm = "",
  Vm = function (e) {
    var n = e[0],
      r,
      i;
    if ((Tr(n) || ze(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
      for (i = Hu.length; i-- && !Hu[i].targetTest(n); );
      r = Hu[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new ow(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  _s = function (e) {
    return e._gsap || Vm(Vn(e))[0]._gsap;
  },
  V_ = function (e, n, r) {
    return (r = e[n]) && ze(r)
      ? e[n]()
      : (Lm(r) && e.getAttribute && e.getAttribute(n)) || r;
  },
  nn = function (e, n) {
    return (e = e.split(",")).forEach(n) || e;
  },
  Ue = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  xt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Ro = function (e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    );
  },
  Dk = function (e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
    return i < r;
  },
  Ec = function () {
    var e = Ti.length,
      n = Ti.slice(0),
      r,
      i;
    for (jh = {}, Ti.length = 0, r = 0; r < e; r++)
      (i = n[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  F_ = function (e, n, r, i) {
    Ti.length && !Rt && Ec(),
      e.render(n, r, i || (Rt && n < 0 && (e._initted || e._startAt))),
      Ti.length && !Rt && Ec();
  },
  I_ = function (e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(M_).length < 2
      ? n
      : dt(e)
      ? e.trim()
      : e;
  },
  z_ = function (e) {
    return e;
  },
  Un = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  Nk = function (e) {
    return function (n, r) {
      for (var i in r)
        i in n || (i === "duration" && e) || i === "ease" || (n[i] = r[i]);
    };
  },
  Ms = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  t1 = function t(e, n) {
    for (var r in n)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = Tr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e;
  },
  bc = function (e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r;
  },
  $a = function (e) {
    var n = e.parent || Re,
      r = e.keyframes ? Nk(Lt(e.keyframes)) : Un;
    if (tn(e.inherit))
      for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
    return e;
  },
  jk = function (e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
    return r < 0;
  },
  B_ = function (e, n, r, i, s) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var o = e[i],
      a;
    if (s) for (a = n[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((n._next = o._next), (o._next = n)) : ((n._next = e[r]), (e[r] = n)),
      n._next ? (n._next._prev = n) : (e[i] = n),
      (n._prev = o),
      (n.parent = n._dp = e),
      n
    );
  },
  xf = function (e, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var s = n._prev,
      o = n._next;
    s ? (s._next = o) : e[r] === n && (e[r] = o),
      o ? (o._prev = s) : e[i] === n && (e[i] = s),
      (n._next = n._prev = n.parent = null);
  },
  Di = function (e, n) {
    e.parent &&
      (!n || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  ws = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  Vk = function (e) {
    for (var n = e.parent; n && n.parent; )
      (n._dirty = 1), n.totalDuration(), (n = n.parent);
    return e;
  },
  Vh = function (e, n, r, i) {
    return (
      e._startAt &&
      (Rt
        ? e._startAt.revert(Uu)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(n, !0, i))
    );
  },
  Fk = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  n1 = function (e) {
    return e._repeat ? Ho(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Ho = function (e, n) {
    var r = Math.floor((e /= n));
    return e && r === e ? r - 1 : r;
  },
  Oc = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  _f = function (e) {
    return (e._end = xt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ve) || 0)
    ));
  },
  wf = function (e, n) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = xt(
          r._time -
            (e._ts > 0
              ? n / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
        )),
        _f(e),
        r._dirty || ws(r, e)),
      e
    );
  },
  $_ = function (e, n) {
    var r;
    if (
      ((n._time ||
        (!n._dur && n._initted) ||
        (n._start < e._time && (n._dur || !n.add))) &&
        ((r = Oc(e.rawTime(), n)),
        (!n._dur || Il(0, n.totalDuration(), r) - n._tTime > ve) &&
          n.render(r, !0)),
      ws(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -ve;
    }
  },
  yr = function (e, n, r, i) {
    return (
      n.parent && Di(n),
      (n._start = xt(
        (Xr(r) ? r : r || e !== Re ? On(e, r, n) : e._time) + n._delay
      )),
      (n._end = xt(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      B_(e, n, "_first", "_last", e._sort ? "_start" : 0),
      Fh(n) || (e._recent = n),
      i || $_(e, n),
      e._ts < 0 && wf(e, e._tTime),
      e
    );
  },
  U_ = function (e, n) {
    return (
      (Pn.ScrollTrigger || Dm("scrollTrigger", n)) &&
      Pn.ScrollTrigger.create(n, e)
    );
  },
  H_ = function (e, n, r, i, s) {
    if ((Im(e, n, s), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !Rt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      j_ !== vn.frame
    )
      return Ti.push(e), (e._lazy = [s, i]), 1;
  },
  Ik = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
  },
  Fh = function (e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart";
  },
  zk = function (e, n, r, i) {
    var s = e.ratio,
      o =
        n < 0 ||
        (!n &&
          ((!e._start && Ik(e) && !(!e._initted && Fh(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Fh(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      u,
      c,
      d;
    if (
      (a &&
        e._repeat &&
        ((l = Il(0, e._tDur, n)),
        (c = Ho(l, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== Ho(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Rt || i || e._zTime === ve || (!n && e._zTime))
    ) {
      if (!e._initted && H_(e, n, i, r, l)) return;
      for (
        d = e._zTime,
          e._zTime = n || (r ? ve : 0),
          r || (r = n && !d),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(o, u.d), (u = u._next);
      n < 0 && Vh(e, n, r, !0),
        e._onUpdate && !r && Fn(e, "onUpdate"),
        l && e._repeat && !r && e.parent && Fn(e, "onRepeat"),
        (n >= e._tDur || n < 0) &&
          e.ratio === o &&
          (o && Di(e, 1),
          !r &&
            !Rt &&
            (Fn(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = n);
  },
  Bk = function (e, n, r) {
    var i;
    if (r > n)
      for (i = e._first; i && i._start <= r; ) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r; ) {
        if (i.data === "isPause" && i._start < n) return i;
        i = i._prev;
      }
  },
  Wo = function (e, n, r, i) {
    var s = e._repeat,
      o = xt(n) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !i && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : xt(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !i && wf(e, (e._tTime = e._tDur * a)),
      e.parent && _f(e),
      r || ws(e.parent, e),
      e
    );
  },
  r1 = function (e) {
    return e instanceof Qt ? ws(e) : Wo(e, e._dur);
  },
  $k = { _start: 0, endTime: _l, totalDuration: _l },
  On = function t(e, n, r) {
    var i = e.labels,
      s = e._recent || $k,
      o = e.duration() >= jn ? s.endTime(!1) : e._dur,
      a,
      l,
      u;
    return dt(n) && (isNaN(n) || n in i)
      ? ((l = n.charAt(0)),
        (u = n.substr(-1) === "%"),
        (a = n.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (n = n.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (u ? (a < 0 ? s : r).totalDuration() / 100 : 1))
          : a < 0
          ? (n in i || (i[n] = o), i[n])
          : ((l = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
            u && r && (l = (l / 100) * (Lt(r) ? r[0] : r).totalDuration()),
            a > 1 ? t(e, n.substr(0, a - 1), r) + l : o + l))
      : n == null
      ? o
      : +n;
  },
  Ua = function (e, n, r) {
    var i = Xr(n[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = n[s],
      a,
      l;
    if ((i && (o.duration = n[1]), (o.parent = r), e)) {
      for (a = o, l = r; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = tn(l.vars.inherit) && l.parent);
      (o.immediateRender = tn(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = n[s - 1]);
    }
    return new Qe(n[0], o, n[s + 1]);
  },
  $i = function (e, n) {
    return e || e === 0 ? n(e) : n;
  },
  Il = function (e, n, r) {
    return r < e ? e : r > n ? n : r;
  },
  Ot = function (e, n) {
    return !dt(e) || !(n = Lk.exec(e)) ? "" : n[1];
  },
  Uk = function (e, n, r) {
    return $i(r, function (i) {
      return Il(e, n, i);
    });
  },
  Ih = [].slice,
  W_ = function (e, n) {
    return (
      e &&
      Tr(e) &&
      "length" in e &&
      ((!n && !e.length) || (e.length - 1 in e && Tr(e[0]))) &&
      !e.nodeType &&
      e !== Rn
    );
  },
  Hk = function (e, n, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (i) {
        var s;
        return (dt(i) && !n) || W_(i, 1)
          ? (s = r).push.apply(s, Vn(i))
          : r.push(i);
      }) || r
    );
  },
  Vn = function (e, n, r) {
    return Fe && !n && Fe.selector
      ? Fe.selector(e)
      : dt(e) && !r && (Nh || !Yo())
      ? Ih.call((n || Am).querySelectorAll(e), 0)
      : Lt(e)
      ? Hk(e, r)
      : W_(e)
      ? Ih.call(e, 0)
      : e
      ? [e]
      : [];
  },
  zh = function (e) {
    return (
      (e = Vn(e)[0] || Tc("Invalid scope") || {}),
      function (n) {
        var r = e.current || e.nativeElement || e;
        return Vn(
          n,
          r.querySelectorAll
            ? r
            : r === e
            ? Tc("Invalid scope") || Am.createElement("div")
            : e
        );
      }
    );
  },
  Y_ = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  G_ = function (e) {
    if (ze(e)) return e;
    var n = Tr(e) ? e : { each: e },
      r = Ss(n.ease),
      i = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      u = n.axis,
      c = i,
      d = i;
    return (
      dt(i)
        ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && l && ((c = i[0]), (d = i[1])),
      function (f, h, m) {
        var g = (m || n).length,
          _ = o[g],
          v,
          p,
          y,
          x,
          w,
          T,
          C,
          E,
          b;
        if (!_) {
          if (((b = n.grid === "auto" ? 0 : (n.grid || [1, jn])[1]), !b)) {
            for (
              C = -jn;
              C < (C = m[b++].getBoundingClientRect().left) && b < g;

            );
            b--;
          }
          for (
            _ = o[g] = [],
              v = l ? Math.min(b, g) * c - 0.5 : i % b,
              p = b === jn ? 0 : l ? (g * d) / b - 0.5 : (i / b) | 0,
              C = 0,
              E = jn,
              T = 0;
            T < g;
            T++
          )
            (y = (T % b) - v),
              (x = p - ((T / b) | 0)),
              (_[T] = w = u ? Math.abs(u === "y" ? x : y) : b_(y * y + x * x)),
              w > C && (C = w),
              w < E && (E = w);
          i === "random" && Y_(_),
            (_.max = C - E),
            (_.min = E),
            (_.v = g =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                  (b > g
                    ? g - 1
                    : u
                    ? u === "y"
                      ? g / b
                      : b
                    : Math.max(b, g / b)) ||
                0) * (i === "edges" ? -1 : 1)),
            (_.b = g < 0 ? s - g : s),
            (_.u = Ot(n.amount || n.each) || 0),
            (r = r && g < 0 ? rw(r) : r);
        }
        return (
          (g = (_[f] - _.min) / _.max || 0),
          xt(_.b + (r ? r(g) : g) * _.v) + _.u
        );
      }
    );
  },
  Bh = function (e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = xt(Math.round(parseFloat(r) / e) * e * n);
      return (i - (i % 1)) / n + (Xr(r) ? 0 : Ot(r));
    };
  },
  K_ = function (e, n) {
    var r = Lt(e),
      i,
      s;
    return (
      !r &&
        Tr(e) &&
        ((i = r = e.radius || jn),
        e.values
          ? ((e = Vn(e.values)), (s = !Xr(e[0])) && (i *= i))
          : (e = Bh(e.increment))),
      $i(
        n,
        r
          ? ze(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= i ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    u = jn,
                    c = 0,
                    d = e.length,
                    f,
                    h;
                  d--;

                )
                  s
                    ? ((f = e[d].x - a), (h = e[d].y - l), (f = f * f + h * h))
                    : (f = Math.abs(e[d] - a)),
                    f < u && ((u = f), (c = d));
                return (
                  (c = !i || u <= i ? e[c] : o),
                  s || c === o || Xr(o) ? c : c + Ot(o)
                );
              }
          : Bh(e)
      )
    );
  },
  X_ = function (e, n, r, i) {
    return $i(Lt(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
      return Lt(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
                r *
                i
            ) / i;
    });
  },
  Wk = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduce(function (s, o) {
        return o(s);
      }, i);
    };
  },
  Yk = function (e, n) {
    return function (r) {
      return e(parseFloat(r)) + (n || Ot(r));
    };
  },
  Gk = function (e, n, r) {
    return q_(e, n, 0, 1, r);
  },
  Q_ = function (e, n, r) {
    return $i(r, function (i) {
      return e[~~n(i)];
    });
  },
  Kk = function t(e, n, r) {
    var i = n - e;
    return Lt(e)
      ? Q_(e, t(0, e.length), n)
      : $i(r, function (s) {
          return ((i + ((s - e) % i)) % i) + e;
        });
  },
  Xk = function t(e, n, r) {
    var i = n - e,
      s = i * 2;
    return Lt(e)
      ? Q_(e, t(0, e.length - 1), n)
      : $i(r, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o);
        });
  },
  wl = function (e) {
    for (var n = 0, r = "", i, s, o, a; ~(i = e.indexOf("random(", n)); )
      (o = e.indexOf(")", i)),
        (a = e.charAt(i + 7) === "["),
        (s = e.substr(i + 7, o - i - 7).match(a ? M_ : Dh)),
        (r +=
          e.substr(n, i - n) + X_(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (n = o + 1);
    return r + e.substr(n, e.length - n);
  },
  q_ = function (e, n, r, i, s) {
    var o = n - e,
      a = i - r;
    return $i(s, function (l) {
      return r + (((l - e) / o) * a || 0);
    });
  },
  Qk = function t(e, n, r, i) {
    var s = isNaN(e + n)
      ? 0
      : function (h) {
          return (1 - h) * e + h * n;
        };
    if (!s) {
      var o = dt(e),
        a = {},
        l,
        u,
        c,
        d,
        f;
      if ((r === !0 && (i = 1) && (r = null), o))
        (e = { p: e }), (n = { p: n });
      else if (Lt(e) && !Lt(n)) {
        for (c = [], d = e.length, f = d - 2, u = 1; u < d; u++)
          c.push(t(e[u - 1], e[u]));
        d--,
          (s = function (m) {
            m *= d;
            var g = Math.min(f, ~~m);
            return c[g](m - g);
          }),
          (r = n);
      } else i || (e = Ms(Lt(e) ? [] : {}, e));
      if (!c) {
        for (l in n) Fm.call(a, e, l, "get", n[l]);
        s = function (m) {
          return $m(m, a) || (o ? e.p : e);
        };
      }
    }
    return $i(r, s);
  },
  i1 = function (e, n, r) {
    var i = e.labels,
      s = jn,
      o,
      a,
      l;
    for (o in i)
      (a = i[o] - n),
        a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  Fn = function (e, n, r) {
    var i = e.vars,
      s = i[n],
      o = Fe,
      a = e._ctx,
      l,
      u,
      c;
    if (s)
      return (
        (l = i[n + "Params"]),
        (u = i.callbackScope || e),
        r && Ti.length && Ec(),
        a && (Fe = a),
        (c = l ? s.apply(u, l) : s.call(u)),
        (Fe = o),
        c
      );
  },
  Ea = function (e) {
    return (
      Di(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Rt),
      e.progress() < 1 && Fn(e, "onInterrupt"),
      e
    );
  },
  yo,
  J_ = [],
  Z_ = function (e) {
    if (Mm() && e) {
      e = (!e.name && e.default) || e;
      var n = e.name,
        r = ze(e),
        i =
          n && !r && e.init
            ? function () {
                this._props = [];
              }
            : e,
        s = {
          init: _l,
          render: $m,
          add: Fm,
          kill: dT,
          modifier: fT,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: Bm, aliases: {}, register: 0 };
      if ((Yo(), e !== i)) {
        if (yn[n]) return;
        Un(i, Un(bc(e, s), o)),
          Ms(i.prototype, Ms(s, bc(e, o))),
          (yn[(i.prop = n)] = i),
          e.targetTest && (Hu.push(i), (Nm[n] = 1)),
          (n =
            (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
            "Plugin");
      }
      N_(n, i), e.register && e.register(sn, i, rn);
    } else e && J_.push(e);
  },
  ye = 255,
  ba = {
    aqua: [0, ye, ye],
    lime: [0, ye, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ye],
    navy: [0, 0, 128],
    white: [ye, ye, ye],
    olive: [128, 128, 0],
    yellow: [ye, ye, 0],
    orange: [ye, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ye, 0, 0],
    pink: [ye, 192, 203],
    cyan: [0, ye, ye],
    transparent: [ye, ye, ye, 0],
  },
  ud = function (e, n, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? n + (r - n) * e * 6
        : e < 0.5
        ? r
        : e * 3 < 2
        ? n + (r - n) * (2 / 3 - e) * 6
        : n) *
        ye +
        0.5) |
        0
    );
  },
  ew = function (e, n, r) {
    var i = e ? (Xr(e) ? [e >> 16, (e >> 8) & ye, e & ye] : 0) : ba.black,
      s,
      o,
      a,
      l,
      u,
      c,
      d,
      f,
      h,
      m;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ba[e]))
        i = ba[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & ye, i & ye, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & ye, e & ye]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = m = e.match(Dh)), !n))
          (l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (c = +i[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (s = c * 2 - o),
            i.length > 3 && (i[3] *= 1),
            (i[0] = ud(l + 1 / 3, s, o)),
            (i[1] = ud(l, s, o)),
            (i[2] = ud(l - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (i = e.match(R_)), r && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(Dh) || ba.transparent;
      i = i.map(Number);
    }
    return (
      n &&
        !m &&
        ((s = i[0] / ye),
        (o = i[1] / ye),
        (a = i[2] / ye),
        (d = Math.max(s, o, a)),
        (f = Math.min(s, o, a)),
        (c = (d + f) / 2),
        d === f
          ? (l = u = 0)
          : ((h = d - f),
            (u = c > 0.5 ? h / (2 - d - f) : h / (d + f)),
            (l =
              d === s
                ? (o - a) / h + (o < a ? 6 : 0)
                : d === o
                ? (a - s) / h + 2
                : (s - o) / h + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  tw = function (e) {
    var n = [],
      r = [],
      i = -1;
    return (
      e.split(Ei).forEach(function (s) {
        var o = s.match(go) || [];
        n.push.apply(n, o), r.push((i += o.length + 1));
      }),
      (n.c = r),
      n
    );
  },
  s1 = function (e, n, r) {
    var i = "",
      s = (e + i).match(Ei),
      o = n ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      d;
    if (!s) return e;
    if (
      ((s = s.map(function (f) {
        return (
          (f = ew(f, n, 1)) &&
          o +
            (n ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
            ")"
        );
      })),
      r && ((c = tw(e)), (l = r.c), l.join(i) !== c.c.join(i)))
    )
      for (u = e.replace(Ei, "1").split(go), d = u.length - 1; a < d; a++)
        i +=
          u[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : r).shift());
    if (!u)
      for (u = e.split(Ei), d = u.length - 1; a < d; a++) i += u[a] + s[a];
    return i + u[d];
  },
  Ei = (function () {
    var t =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in ba) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  qk = /hsl[a]?\(/,
  nw = function (e) {
    var n = e.join(" "),
      r;
    if (((Ei.lastIndex = 0), Ei.test(n)))
      return (
        (r = qk.test(n)),
        (e[1] = s1(e[1], r)),
        (e[0] = s1(e[0], r, tw(e[1]))),
        !0
      );
  },
  Sl,
  vn = (function () {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      u,
      c,
      d,
      f,
      h,
      m = function g(_) {
        var v = t() - i,
          p = _ === !0,
          y,
          x,
          w,
          T;
        if (
          (v > e && (r += v - n),
          (i += v),
          (w = i - r),
          (y = w - o),
          (y > 0 || p) &&
            ((T = ++d.frame),
            (f = w - d.time * 1e3),
            (d.time = w = w / 1e3),
            (o += y + (y >= s ? 4 : s - y)),
            (x = 1)),
          p || (l = u(g)),
          x)
        )
          for (h = 0; h < a.length; h++) a[h](w, f, T, _);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (_) {
          return f / (1e3 / (_ || 60));
        },
        wake: function () {
          A_ &&
            (!Nh &&
              Mm() &&
              ((Rn = Nh = window),
              (Am = Rn.document || {}),
              (Pn.gsap = sn),
              (Rn.gsapVersions || (Rn.gsapVersions = [])).push(sn.version),
              D_(kc || Rn.GreenSockGlobals || (!Rn.gsap && Rn) || {}),
              (c = Rn.requestAnimationFrame),
              J_.forEach(Z_)),
            l && d.sleep(),
            (u =
              c ||
              function (_) {
                return setTimeout(_, (o - d.time * 1e3 + 1) | 0);
              }),
            (Sl = 1),
            m(2));
        },
        sleep: function () {
          (c ? Rn.cancelAnimationFrame : clearTimeout)(l), (Sl = 0), (u = _l);
        },
        lagSmoothing: function (_, v) {
          (e = _ || 1 / 0), (n = Math.min(v || 33, e));
        },
        fps: function (_) {
          (s = 1e3 / (_ || 240)), (o = d.time * 1e3 + s);
        },
        add: function (_, v, p) {
          var y = v
            ? function (x, w, T, C) {
                _(x, w, T, C), d.remove(y);
              }
            : _;
          return d.remove(_), a[p ? "unshift" : "push"](y), Yo(), y;
        },
        remove: function (_, v) {
          ~(v = a.indexOf(_)) && a.splice(v, 1) && h >= v && h--;
        },
        _listeners: a,
      }),
      d
    );
  })(),
  Yo = function () {
    return !Sl && vn.wake();
  },
  oe = {},
  Jk = /^[\d.\-M][\d.\-,\s]/,
  Zk = /["']/g,
  eT = function (e) {
    for (
      var n = {},
        r = e.substr(1, e.length - 3).split(":"),
        i = r[0],
        s = 1,
        o = r.length,
        a,
        l,
        u;
      s < o;
      s++
    )
      (l = r[s]),
        (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (n[i] = isNaN(u) ? u.replace(Zk, "").trim() : +u),
        (i = l.substr(a + 1).trim());
    return n;
  },
  tT = function (e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  nT = function (e) {
    var n = (e + "").split("("),
      r = oe[n[0]];
    return r && n.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [eT(n[1])] : tT(e).split(",").map(I_)
        )
      : oe._CE && Jk.test(e)
      ? oe._CE("", e)
      : r;
  },
  rw = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  iw = function t(e, n) {
    for (var r = e._first, i; r; )
      r instanceof Qt
        ? t(r, n)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== n &&
          (r.timeline
            ? t(r.timeline, n)
            : ((i = r._ease),
              (r._ease = r._yEase),
              (r._yEase = i),
              (r._yoyo = n))),
        (r = r._next);
  },
  Ss = function (e, n) {
    return (e && (ze(e) ? e : oe[e] || nT(e))) || n;
  },
  zs = function (e, n, r, i) {
    r === void 0 &&
      (r = function (l) {
        return 1 - n(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2;
        });
    var s = { easeIn: n, easeOut: r, easeInOut: i },
      o;
    return (
      nn(e, function (a) {
        (oe[a] = Pn[a] = s), (oe[(o = a.toLowerCase())] = r);
        for (var l in s)
          oe[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = oe[a + "." + l] = s[l];
      }),
      s
    );
  },
  sw = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
    };
  },
  cd = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (s / Ah) * (Math.asin(1 / i) || 0),
      a = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Rk((c - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : sw(a);
    return (
      (s = Ah / s),
      (l.config = function (u, c) {
        return t(e, u, c);
      }),
      l
    );
  },
  fd = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function (o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
      },
      i =
        e === "out"
          ? r
          : e === "in"
          ? function (s) {
              return 1 - r(1 - s);
            }
          : sw(r);
    return (
      (i.config = function (s) {
        return t(e, s);
      }),
      i
    );
  };
nn("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  zs(
    t + ",Power" + (n - 1),
    e
      ? function (r) {
          return Math.pow(r, n);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, n) / 2
        : 1 - Math.pow((1 - r) * 2, n) / 2;
    }
  );
});
oe.Linear.easeNone = oe.none = oe.Linear.easeIn;
zs("Elastic", cd("in"), cd("out"), cd());
(function (t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    s = function (a) {
      return a < n
        ? t * a * a
        : a < r
        ? t * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < i
        ? t * (a -= 2.25 / e) * a + 0.9375
        : t * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  zs(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
zs("Expo", function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
zs("Circ", function (t) {
  return -(b_(1 - t * t) - 1);
});
zs("Sine", function (t) {
  return t === 1 ? 1 : -Ok(t * Ek) + 1;
});
zs("Back", fd("in"), fd("out"), fd());
oe.SteppedEase =
  oe.steps =
  Pn.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          i = e + (n ? 0 : 1),
          s = n ? 1 : 0,
          o = 1 - ve;
        return function (a) {
          return (((i * Il(0, o, a)) | 0) + s) * r;
        };
      },
    };
Uo.ease = oe["quad.out"];
nn(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (t) {
    return (jm += t + "," + t + "Params,");
  }
);
var ow = function (e, n) {
    (this.id = bk++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = n),
      (this.get = n ? n.get : V_),
      (this.set = n ? n.getSetter : Bm);
  },
  Cl = (function () {
    function t(n) {
      (this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
          ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        Wo(this, +n.duration, 1, 1),
        (this.data = n.data),
        Fe && ((this._ctx = Fe), Fe.data.push(this)),
        Sl || vn.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            Wo(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((Yo(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (wf(this, r), !s._dp || s.parent || $_(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            yr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === ve) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), F_(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + n1(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                n1(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (r, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * s, i)
          : this._repeat
          ? Ho(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (r) {
        if (!arguments.length) return this._rts === -ve ? 0 : this._rts;
        if (this._rts === r) return this;
        var i =
          this.parent && this._ts ? Oc(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -ve ? 0 : this._rts),
          this.totalTime(Il(-Math.abs(this._delay), this._tDur, i), !0),
          _f(this),
          Vk(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Yo(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ve &&
                      (this._tTime -= ve)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && yr(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (tn(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Oc(i.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = Ak);
        var i = Rt;
        return (
          (Rt = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (Rt = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
          (s = i._start + s / (i._ts || 1)), (i = i._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1 / 0
            : this._sat.globalTime(r)
          : s;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), r1(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), r1(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime(On(this, r), tn(i));
      }),
      (e.restart = function (r, i) {
        return this.play().totalTime(r ? -this._delay : 0, tn(i));
      }),
      (e.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -ve : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -ve), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          s;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (s = r.rawTime(!0)) >= i &&
            s < this.endTime(!0) - ve)
        );
      }),
      (e.eventCallback = function (r, i, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (i
              ? ((o[r] = i),
                s && (o[r + "Params"] = s),
                r === "onUpdate" && (this._onUpdate = i))
              : delete o[r],
            this)
          : o[r];
      }),
      (e.then = function (r) {
        var i = this;
        return new Promise(function (s) {
          var o = ze(r) ? r : z_,
            a = function () {
              var u = i.then;
              (i.then = null),
                ze(o) && (o = o(i)) && (o.then || o === i) && (i.then = u),
                s(o),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? a()
            : (i._prom = a);
        });
      }),
      (e.kill = function () {
        Ea(this);
      }),
      t
    );
  })();
Un(Cl.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ve,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Qt = (function (t) {
  E_(e, t);
  function e(r, i) {
    var s;
    return (
      r === void 0 && (r = {}),
      (s = t.call(this, r) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!r.smoothChildTiming),
      (s.autoRemoveChildren = !!r.autoRemoveChildren),
      (s._sort = tn(r.sortChildren)),
      Re && yr(r.parent || Re, Lr(s), i),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      r.scrollTrigger && U_(Lr(s), r.scrollTrigger),
      s
    );
  }
  var n = e.prototype;
  return (
    (n.to = function (i, s, o) {
      return Ua(0, arguments, this), this;
    }),
    (n.from = function (i, s, o) {
      return Ua(1, arguments, this), this;
    }),
    (n.fromTo = function (i, s, o, a) {
      return Ua(2, arguments, this), this;
    }),
    (n.set = function (i, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        $a(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Qe(i, s, On(this, o), 1),
        this
      );
    }),
    (n.call = function (i, s, o) {
      return yr(this, Qe.delayedCall(0, i, s), o);
    }),
    (n.staggerTo = function (i, s, o, a, l, u, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new Qe(i, o, On(this, l)),
        this
      );
    }),
    (n.staggerFrom = function (i, s, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        ($a(o).immediateRender = tn(o.immediateRender)),
        this.staggerTo(i, s, o, a, l, u, c)
      );
    }),
    (n.staggerFromTo = function (i, s, o, a, l, u, c, d) {
      return (
        (a.startAt = o),
        ($a(a).immediateRender = tn(a.immediateRender)),
        this.staggerTo(i, s, a, l, u, c, d)
      );
    }),
    (n.render = function (i, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = i <= 0 ? 0 : xt(i),
        d = this._zTime < 0 != i < 0 && (this._initted || !u),
        f,
        h,
        m,
        g,
        _,
        v,
        p,
        y,
        x,
        w,
        T,
        C;
      if (
        (this !== Re && c > l && i >= 0 && (c = l), c !== this._tTime || o || d)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (i += this._time - a)),
          (f = c),
          (x = this._start),
          (y = this._ts),
          (v = !y),
          d && (u || (a = this._zTime), (i || !s) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((T = this._yoyo),
            (_ = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(_ * 100 + i, s, o);
          if (
            ((f = xt(c % _)),
            c === l
              ? ((g = this._repeat), (f = u))
              : ((g = ~~(c / _)),
                g && g === c / _ && ((f = u), g--),
                f > u && (f = u)),
            (w = Ho(this._tTime, _)),
            !a &&
              this._tTime &&
              w !== g &&
              this._tTime - w * _ - this._dur <= 0 &&
              (w = g),
            T && g & 1 && ((f = u - f), (C = 1)),
            g !== w && !this._lock)
          ) {
            var E = T && w & 1,
              b = E === (T && g & 1);
            if (
              (g < w && (E = !E),
              (a = E ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (C ? 0 : xt(g * _)), s, !u)._lock = 0),
              (this._tTime = c),
              !s && this.parent && Fn(this, "onRepeat"),
              this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                v !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              b &&
                ((this._lock = 2),
                (a = E ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !C && this.invalidate()),
              (this._lock = 0),
              !this._ts && !v)
            )
              return this;
            iw(this, C);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((p = Bk(this, xt(a), xt(f))), p && (c -= f - (f = p._start))),
          (this._tTime = c),
          (this._time = f),
          (this._act = !y),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (a = 0)),
          !a && f && !s && !g && (Fn(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (f >= a && i >= 0)
          for (h = this._first; h; ) {
            if (
              ((m = h._next), (h._act || f >= h._start) && h._ts && p !== h)
            ) {
              if (h.parent !== this) return this.render(i, s, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (f - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (f - h._start) * h._ts,
                  s,
                  o
                ),
                f !== this._time || (!this._ts && !v))
              ) {
                (p = 0), m && (c += this._zTime = -ve);
                break;
              }
            }
            h = m;
          }
        else {
          h = this._last;
          for (var O = i < 0 ? i : f; h; ) {
            if (((m = h._prev), (h._act || O <= h._end) && h._ts && p !== h)) {
              if (h.parent !== this) return this.render(i, s, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (O - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (O - h._start) * h._ts,
                  s,
                  o || (Rt && (h._initted || h._startAt))
                ),
                f !== this._time || (!this._ts && !v))
              ) {
                (p = 0), m && (c += this._zTime = O ? -ve : ve);
                break;
              }
            }
            h = m;
          }
        }
        if (
          p &&
          !s &&
          (this.pause(),
          (p.render(f >= a ? 0 : -ve)._zTime = f >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = x), _f(this), this.render(i, s, o);
        this._onUpdate && !s && Fn(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (x === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Di(this, 1),
              !s &&
                !(i < 0 && !a) &&
                (c || a || !l) &&
                (Fn(
                  this,
                  c === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (n.add = function (i, s) {
      var o = this;
      if ((Xr(s) || (s = On(this, s, i)), !(i instanceof Cl))) {
        if (Lt(i))
          return (
            i.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (dt(i)) return this.addLabel(i, s);
        if (ze(i)) i = Qe.delayedCall(0, i);
        else return this;
      }
      return this !== i ? yr(this, i, s) : this;
    }),
    (n.getChildren = function (i, s, o, a) {
      i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -jn);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Qe
            ? s && l.push(u)
            : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, s, o)))),
          (u = u._next);
      return l;
    }),
    (n.getById = function (i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === i) return s[o];
    }),
    (n.remove = function (i) {
      return dt(i)
        ? this.removeLabel(i)
        : ze(i)
        ? this.killTweensOf(i)
        : (xf(this, i),
          i === this._recent && (this._recent = this._last),
          ws(this));
    }),
    (n.totalTime = function (i, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = xt(
              vn.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          t.prototype.totalTime.call(this, i, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, s) {
      return (this.labels[i] = On(this, s)), this;
    }),
    (n.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (n.addPause = function (i, s, o) {
      var a = Qe.delayedCall(0, s || _l, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), yr(this, a, On(this, i))
      );
    }),
    (n.removePause = function (i) {
      var s = this._first;
      for (i = On(this, i); s; )
        s._start === i && s.data === "isPause" && Di(s), (s = s._next);
    }),
    (n.killTweensOf = function (i, s, o) {
      for (var a = this.getTweensOf(i, o), l = a.length; l--; )
        di !== a[l] && a[l].kill(i, s);
      return this;
    }),
    (n.getTweensOf = function (i, s) {
      for (var o = [], a = Vn(i), l = this._first, u = Xr(s), c; l; )
        l instanceof Qe
          ? Dk(l._targets, a) &&
            (u
              ? (!di || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
          (l = l._next);
      return o;
    }),
    (n.tweenTo = function (i, s) {
      s = s || {};
      var o = this,
        a = On(o, i),
        l = s,
        u = l.startAt,
        c = l.onStart,
        d = l.onStartParams,
        f = l.immediateRender,
        h,
        m = Qe.to(
          o,
          Un(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                ) ||
                ve,
              onStart: function () {
                if ((o.pause(), !h)) {
                  var _ =
                    s.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale()
                    );
                  m._dur !== _ && Wo(m, _, 0, 1).render(m._time, !0, !0),
                    (h = 1);
                }
                c && c.apply(m, d || []);
              },
            },
            s
          )
        );
      return f ? m.render(0) : m;
    }),
    (n.tweenFromTo = function (i, s, o) {
      return this.tweenTo(s, Un({ startAt: { time: On(this, i) } }, o));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return i === void 0 && (i = this._time), i1(this, On(this, i));
    }),
    (n.previousLabel = function (i) {
      return i === void 0 && (i = this._time), i1(this, On(this, i), 1);
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + ve);
    }),
    (n.shiftChildren = function (i, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, u; a; )
        a._start >= o && ((a._start += i), (a._end += i)), (a = a._next);
      if (s) for (u in l) l[u] >= o && (l[u] += i);
      return ws(this);
    }),
    (n.invalidate = function (i) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
      return t.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      i === void 0 && (i = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        ws(this)
      );
    }),
    (n.totalDuration = function (i) {
      var s = 0,
        o = this,
        a = o._last,
        l = jn,
        u,
        c,
        d;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -i : i)
        );
      if (o._dirty) {
        for (d = o.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (yr(o, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((s -= c),
              ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = u);
        Wo(o, o === Re && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Re._ts && (F_(Re, Oc(i, Re)), (j_ = vn.frame)), vn.frame >= e1)) {
        e1 += Sn.autoSleep || 120;
        var s = Re._first;
        if ((!s || !s._ts) && Sn.autoSleep && vn._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || vn.sleep();
        }
      }
    }),
    e
  );
})(Cl);
Un(Qt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var rT = function (e, n, r, i, s, o, a) {
    var l = new rn(this._pt, e, n, 0, 1, dw, null, s),
      u = 0,
      c = 0,
      d,
      f,
      h,
      m,
      g,
      _,
      v,
      p;
    for (
      l.b = r,
        l.e = i,
        r += "",
        i += "",
        (v = ~i.indexOf("random(")) && (i = wl(i)),
        o && ((p = [r, i]), o(p, e, n), (r = p[0]), (i = p[1])),
        f = r.match(ad) || [];
      (d = ad.exec(i));

    )
      (m = d[0]),
        (g = i.substring(u, d.index)),
        h ? (h = (h + 1) % 5) : g.substr(-5) === "rgba(" && (h = 1),
        m !== f[c++] &&
          ((_ = parseFloat(f[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: g || c === 1 ? g : ",",
            s: _,
            c: m.charAt(1) === "=" ? Ro(_, m) - _ : parseFloat(m) - _,
            m: h && h < 4 ? Math.round : 0,
          }),
          (u = ad.lastIndex));
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ""),
      (l.fp = a),
      (L_.test(i) || v) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Fm = function (e, n, r, i, s, o, a, l, u, c) {
    ze(i) && (i = i(s || 0, e, o));
    var d = e[n],
      f =
        r !== "get"
          ? r
          : ze(d)
          ? u
            ? e[
                n.indexOf("set") || !ze(e["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](u)
            : e[n]()
          : d,
      h = ze(d) ? (u ? lT : cw) : zm,
      m;
    if (
      (dt(i) &&
        (~i.indexOf("random(") && (i = wl(i)),
        i.charAt(1) === "=" &&
          ((m = Ro(f, i) + (Ot(f) || 0)), (m || m === 0) && (i = m))),
      !c || f !== i || $h)
    )
      return !isNaN(f * i) && i !== ""
        ? ((m = new rn(
            this._pt,
            e,
            n,
            +f || 0,
            i - (f || 0),
            typeof d == "boolean" ? cT : fw,
            0,
            h
          )),
          u && (m.fp = u),
          a && m.modifier(a, this, e),
          (this._pt = m))
        : (!d && !(n in e) && Dm(n, i),
          rT.call(this, e, n, f, i, h, l || Sn.stringFilter, u));
  },
  iT = function (e, n, r, i, s) {
    if (
      (ze(e) && (e = Ha(e, s, n, r, i)),
      !Tr(e) || (e.style && e.nodeType) || Lt(e) || O_(e))
    )
      return dt(e) ? Ha(e, s, n, r, i) : e;
    var o = {},
      a;
    for (a in e) o[a] = Ha(e[a], s, n, r, i);
    return o;
  },
  aw = function (e, n, r, i, s, o) {
    var a, l, u, c;
    if (
      yn[e] &&
      (a = new yn[e]()).init(
        s,
        a.rawVars ? n[e] : iT(n[e], i, s, o, r),
        r,
        i,
        o
      ) !== !1 &&
      ((r._pt = l = new rn(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      r !== yo)
    )
      for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
        u[a._props[c]] = l;
    return a;
  },
  di,
  $h,
  Im = function t(e, n, r) {
    var i = e.vars,
      s = i.ease,
      o = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      c = i.onUpdateParams,
      d = i.callbackScope,
      f = i.runBackwards,
      h = i.yoyoEase,
      m = i.keyframes,
      g = i.autoRevert,
      _ = e._dur,
      v = e._startAt,
      p = e._targets,
      y = e.parent,
      x = y && y.data === "nested" ? y.vars.targets : p,
      w = e._overwrite === "auto" && !Rm,
      T = e.timeline,
      C,
      E,
      b,
      O,
      D,
      A,
      H,
      F,
      I,
      W,
      j,
      L,
      N;
    if (
      (T && (!m || !s) && (s = "none"),
      (e._ease = Ss(s, Uo.ease)),
      (e._yEase = h ? rw(Ss(h === !0 ? s : h, Uo.ease)) : 0),
      h &&
        e._yoyo &&
        !e._repeat &&
        ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
      (e._from = !T && !!i.runBackwards),
      !T || (m && !i.stagger))
    ) {
      if (
        ((F = p[0] ? _s(p[0]).harness : 0),
        (L = F && i[F.prop]),
        (C = bc(i, Nm)),
        v &&
          (v._zTime < 0 && v.progress(1),
          n < 0 && f && a && !g ? v.render(-1, !0) : v.revert(f && _ ? Uu : Mk),
          (v._lazy = 0)),
        o)
      ) {
        if (
          (Di(
            (e._startAt = Qe.set(
              p,
              Un(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: y,
                  immediateRender: !0,
                  lazy: !v && tn(l),
                  startAt: null,
                  delay: 0,
                  onUpdate: u,
                  onUpdateParams: c,
                  callbackScope: d,
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Rt || (!a && !g)) && e._startAt.revert(Uu),
          a && _ && n <= 0 && r <= 0)
        ) {
          n && (e._zTime = n);
          return;
        }
      } else if (f && _ && !v) {
        if (
          (n && (a = !1),
          (b = Un(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !v && tn(l),
              immediateRender: a,
              stagger: 0,
              parent: y,
            },
            C
          )),
          L && (b[F.prop] = L),
          Di((e._startAt = Qe.set(p, b))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Rt ? e._startAt.revert(Uu) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          !a)
        )
          t(e._startAt, ve, ve);
        else if (!n) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (_ && tn(l)) || (l && !_), E = 0;
        E < p.length;
        E++
      ) {
        if (
          ((D = p[E]),
          (H = D._gsap || Vm(p)[E]._gsap),
          (e._ptLookup[E] = W = {}),
          jh[H.id] && Ti.length && Ec(),
          (j = x === p ? E : x.indexOf(D)),
          F &&
            (I = new F()).init(D, L || C, e, j, x) !== !1 &&
            ((e._pt = O =
              new rn(e._pt, D, I.name, 0, 1, I.render, I, 0, I.priority)),
            I._props.forEach(function (P) {
              W[P] = O;
            }),
            I.priority && (A = 1)),
          !F || L)
        )
          for (b in C)
            yn[b] && (I = aw(b, C, e, j, D, x))
              ? I.priority && (A = 1)
              : (W[b] = O =
                  Fm.call(e, D, b, "get", C[b], j, x, 0, i.stringFilter));
        e._op && e._op[E] && e.kill(D, e._op[E]),
          w &&
            e._pt &&
            ((di = e),
            Re.killTweensOf(D, W, e.globalTime(n)),
            (N = !e.parent),
            (di = 0)),
          e._pt && l && (jh[H.id] = 1);
      }
      A && hw(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !N),
      m && n <= 0 && T.render(jn, !0, !0);
  },
  sT = function (e, n, r, i, s, o, a) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      u,
      c,
      d,
      f;
    if (!l)
      for (
        l = e._ptCache[n] = [], d = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((u = d[f][n]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next;
        if (!u) return ($h = 1), (e.vars[n] = "+=0"), Im(e, a), ($h = 0), 1;
        l.push(u);
      }
    for (f = l.length; f--; )
      (c = l[f]),
        (u = c._pt || c),
        (u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + o * u.c),
        (u.c = r - u.s),
        c.e && (c.e = Ue(r) + Ot(c.e)),
        c.b && (c.b = u.s + Ot(c.b));
  },
  oT = function (e, n) {
    var r = e[0] ? _s(e[0]).harness : 0,
      i = r && r.aliases,
      s,
      o,
      a,
      l;
    if (!i) return n;
    s = Ms({}, n);
    for (o in i)
      if (o in s) for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  aT = function (e, n, r, i) {
    var s = n.ease || i || "power1.inOut",
      o,
      a;
    if (Lt(n))
      (a = r[e] || (r[e] = [])),
        n.forEach(function (l, u) {
          return a.push({ t: (u / (n.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in n)
        (a = r[o] || (r[o] = [])),
          o === "ease" || a.push({ t: parseFloat(e), v: n[o], e: s });
  },
  Ha = function (e, n, r, i, s) {
    return ze(e)
      ? e.call(n, r, i, s)
      : dt(e) && ~e.indexOf("random(")
      ? wl(e)
      : e;
  },
  lw = jm + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  uw = {};
nn(lw + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (uw[t] = 1);
});
var Qe = (function (t) {
  E_(e, t);
  function e(r, i, s, o) {
    var a;
    typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
      (a = t.call(this, o ? i : $a(i)) || this);
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      d = l.immediateRender,
      f = l.stagger,
      h = l.overwrite,
      m = l.keyframes,
      g = l.defaults,
      _ = l.scrollTrigger,
      v = l.yoyoEase,
      p = i.parent || Re,
      y = (Lt(r) || O_(r) ? Xr(r[0]) : "length" in i) ? [r] : Vn(r),
      x,
      w,
      T,
      C,
      E,
      b,
      O,
      D;
    if (
      ((a._targets = y.length
        ? Vm(y)
        : Tc(
            "GSAP target " + r + " not found. https://greensock.com",
            !Sn.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = h),
      m || f || fu(u) || fu(c))
    ) {
      if (
        ((i = a.vars),
        (x = a.timeline =
          new Qt({
            data: "nested",
            defaults: g || {},
            targets: p && p.data === "nested" ? p.vars.targets : y,
          })),
        x.kill(),
        (x.parent = x._dp = Lr(a)),
        (x._start = 0),
        f || fu(u) || fu(c))
      ) {
        if (((C = y.length), (O = f && G_(f)), Tr(f)))
          for (E in f) ~lw.indexOf(E) && (D || (D = {}), (D[E] = f[E]));
        for (w = 0; w < C; w++)
          (T = bc(i, uw)),
            (T.stagger = 0),
            v && (T.yoyoEase = v),
            D && Ms(T, D),
            (b = y[w]),
            (T.duration = +Ha(u, Lr(a), w, b, y)),
            (T.delay = (+Ha(c, Lr(a), w, b, y) || 0) - a._delay),
            !f &&
              C === 1 &&
              T.delay &&
              ((a._delay = c = T.delay), (a._start += c), (T.delay = 0)),
            x.to(b, T, O ? O(w, b, y) : 0),
            (x._ease = oe.none);
        x.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (m) {
        $a(Un(x.vars.defaults, { ease: "none" })),
          (x._ease = Ss(m.ease || i.ease || "none"));
        var A = 0,
          H,
          F,
          I;
        if (Lt(m))
          m.forEach(function (W) {
            return x.to(y, W, ">");
          }),
            x.duration();
        else {
          T = {};
          for (E in m)
            E === "ease" || E === "easeEach" || aT(E, m[E], T, m.easeEach);
          for (E in T)
            for (
              H = T[E].sort(function (W, j) {
                return W.t - j.t;
              }),
                A = 0,
                w = 0;
              w < H.length;
              w++
            )
              (F = H[w]),
                (I = {
                  ease: F.e,
                  duration: ((F.t - (w ? H[w - 1].t : 0)) / 100) * u,
                }),
                (I[E] = F.v),
                x.to(y, I, A),
                (A += I.duration);
          x.duration() < u && x.to({}, { duration: u - x.duration() });
        }
      }
      u || a.duration((u = x.duration()));
    } else a.timeline = 0;
    return (
      h === !0 && !Rm && ((di = Lr(a)), Re.killTweensOf(y), (di = 0)),
      yr(p, Lr(a), s),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (d ||
        (!u &&
          !m &&
          a._start === xt(p._time) &&
          tn(d) &&
          Fk(Lr(a)) &&
          p.data !== "nested")) &&
        ((a._tTime = -ve), a.render(Math.max(0, -c) || 0)),
      _ && U_(Lr(a), _),
      a
    );
  }
  var n = e.prototype;
  return (
    (n.render = function (i, s, o) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = i < 0,
        d = i > l - ve && !c ? l : i < ve ? 0 : i,
        f,
        h,
        m,
        g,
        _,
        v,
        p,
        y,
        x;
      if (!u) zk(this, i, s, o);
      else if (
        d !== this._tTime ||
        !i ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c)
      ) {
        if (((f = d), (y = this.timeline), this._repeat)) {
          if (((g = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(g * 100 + i, s, o);
          if (
            ((f = xt(d % g)),
            d === l
              ? ((m = this._repeat), (f = u))
              : ((m = ~~(d / g)),
                m && m === d / g && ((f = u), m--),
                f > u && (f = u)),
            (v = this._yoyo && m & 1),
            v && ((x = this._yEase), (f = u - f)),
            (_ = Ho(this._tTime, g)),
            f === a && !o && this._initted)
          )
            return (this._tTime = d), this;
          m !== _ &&
            (y && this._yEase && iw(y, v),
            this.vars.repeatRefresh &&
              !v &&
              !this._lock &&
              ((this._lock = o = 1),
              (this.render(xt(g * m), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (H_(this, c ? i : f, o, s, d)) return (this._tTime = 0), this;
          if (a !== this._time) return this;
          if (u !== this._dur) return this.render(i, s, o);
        }
        if (
          ((this._tTime = d),
          (this._time = f),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = p = (x || this._ease)(f / u)),
          this._from && (this.ratio = p = 1 - p),
          f && !a && !s && !m && (Fn(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (h = this._pt; h; ) h.r(p, h.d), (h = h._next);
        (y &&
          y.render(
            i < 0 ? i : !f && v ? -ve : y._dur * y._ease(f / this._dur),
            s,
            o
          )) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !s &&
            (c && Vh(this, i, s, o), Fn(this, "onUpdate")),
          this._repeat &&
            m !== _ &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Fn(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (c && !this._onUpdate && Vh(this, i, !0, !0),
            (i || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Di(this, 1),
            !s &&
              !(c && !a) &&
              (d || a || v) &&
              (Fn(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, s, o, a) {
      Sl || vn.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || Im(this, l),
        (u = this._ease(l / this._dur)),
        sT(this, i, s, o, a, u, l)
          ? this.resetTo(i, s, o, a)
          : (wf(this, 0),
            this.parent ||
              B_(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (n.kill = function (i, s) {
      if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Ea(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, s, di && di.vars.overwrite !== !0)
            ._first || Ea(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Wo(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = i ? Vn(i) : a,
        u = this._ptLookup,
        c = this._pt,
        d,
        f,
        h,
        m,
        g,
        _,
        v;
      if ((!s || s === "all") && jk(a, l))
        return s === "all" && (this._pt = 0), Ea(this);
      for (
        d = this._op = this._op || [],
          s !== "all" &&
            (dt(s) &&
              ((g = {}),
              nn(s, function (p) {
                return (g[p] = 1);
              }),
              (s = g)),
            (s = oT(a, s))),
          v = a.length;
        v--;

      )
        if (~l.indexOf(a[v])) {
          (f = u[v]),
            s === "all"
              ? ((d[v] = s), (m = f), (h = {}))
              : ((h = d[v] = d[v] || {}), (m = s));
          for (g in m)
            (_ = f && f[g]),
              _ &&
                ((!("kill" in _.d) || _.d.kill(g) === !0) && xf(this, _, "_pt"),
                delete f[g]),
              h !== "all" && (h[g] = 1);
        }
      return this._initted && !this._pt && c && Ea(this), this;
    }),
    (e.to = function (i, s) {
      return new e(i, s, arguments[2]);
    }),
    (e.from = function (i, s) {
      return Ua(1, arguments);
    }),
    (e.delayedCall = function (i, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (i, s, o) {
      return Ua(2, arguments);
    }),
    (e.set = function (i, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
    }),
    (e.killTweensOf = function (i, s, o) {
      return Re.killTweensOf(i, s, o);
    }),
    e
  );
})(Cl);
Un(Qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
nn("staggerTo,staggerFrom,staggerFromTo", function (t) {
  Qe[t] = function () {
    var e = new Qt(),
      n = Ih.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var zm = function (e, n, r) {
    return (e[n] = r);
  },
  cw = function (e, n, r) {
    return e[n](r);
  },
  lT = function (e, n, r, i) {
    return e[n](i.fp, r);
  },
  uT = function (e, n, r) {
    return e.setAttribute(n, r);
  },
  Bm = function (e, n) {
    return ze(e[n]) ? cw : Lm(e[n]) && e.setAttribute ? uT : zm;
  },
  fw = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
  },
  cT = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n);
  },
  dw = function (e, n) {
    var r = n._pt,
      i = "";
    if (!e && n.b) i = n.b;
    else if (e === 1 && n.e) i = n.e;
    else {
      for (; r; )
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += n.c;
    }
    n.set(n.t, n.p, i, n);
  },
  $m = function (e, n) {
    for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  fT = function (e, n, r, i) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === i && s.modifier(e, n, r), (s = o);
  },
  dT = function (e) {
    for (var n = this._pt, r, i; n; )
      (i = n._next),
        (n.p === e && !n.op) || n.op === e
          ? xf(this, n, "_pt")
          : n.dep || (r = 1),
        (n = i);
    return !r;
  },
  hT = function (e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
  },
  hw = function (e) {
    for (var n = e._pt, r, i, s, o; n; ) {
      for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
      (n._prev = i ? i._prev : o) ? (n._prev._next = n) : (s = n),
        (n._next = i) ? (i._prev = n) : (o = n),
        (n = r);
    }
    e._pt = s;
  },
  rn = (function () {
    function t(n, r, i, s, o, a, l, u, c) {
      (this.t = r),
        (this.s = s),
        (this.c = o),
        (this.p = i),
        (this.r = a || fw),
        (this.d = l || this),
        (this.set = u || zm),
        (this.pr = c || 0),
        (this._next = n),
        n && (n._prev = this);
    }
    var e = t.prototype;
    return (
      (e.modifier = function (r, i, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = hT),
          (this.m = r),
          (this.mt = s),
          (this.tween = i);
      }),
      t
    );
  })();
nn(
  jm +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (Nm[t] = 1);
  }
);
Pn.TweenMax = Pn.TweenLite = Qe;
Pn.TimelineLite = Pn.TimelineMax = Qt;
Re = new Qt({
  sortChildren: !1,
  defaults: Uo,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Sn.stringFilter = nw;
var Cs = [],
  Wu = {},
  pT = [],
  o1 = 0,
  mT = 0,
  dd = function (e) {
    return (Wu[e] || pT).map(function (n) {
      return n();
    });
  },
  Uh = function () {
    var e = Date.now(),
      n = [];
    e - o1 > 2 &&
      (dd("matchMediaInit"),
      Cs.forEach(function (r) {
        var i = r.queries,
          s = r.conditions,
          o,
          a,
          l,
          u;
        for (a in i)
          (o = Rn.matchMedia(i[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (u = 1));
        u && (r.revert(), l && n.push(r));
      }),
      dd("matchMediaRevert"),
      n.forEach(function (r) {
        return r.onMatch(r);
      }),
      (o1 = e),
      dd("matchMedia"));
  },
  pw = (function () {
    function t(n, r) {
      (this.selector = r && zh(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = mT++),
        n && this.add(n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, s) {
        ze(r) && ((s = i), (i = r), (r = ze));
        var o = this,
          a = function () {
            var u = Fe,
              c = o.selector,
              d;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = zh(s)),
              (Fe = o),
              (d = i.apply(o, arguments)),
              ze(d) && o._r.push(d),
              (Fe = u),
              (o.selector = c),
              (o.isReverted = !1),
              d
            );
          };
        return (o.last = a), r === ze ? a(o) : r ? (o[r] = a) : a;
      }),
      (e.ignore = function (r) {
        var i = Fe;
        (Fe = null), r(this), (Fe = i);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof t
              ? r.push.apply(r, i.getTweens())
              : i instanceof Qe &&
                  !(i.parent && i.parent.data === "nested") &&
                  r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var s = this;
        if (r) {
          var o = this.getTweens();
          this.data.forEach(function (l) {
            l.data === "isFlip" &&
              (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function (u) {
                return o.splice(o.indexOf(u), 1);
              }));
          }),
            o
              .map(function (l) {
                return { g: l.globalTime(0), t: l };
              })
              .sort(function (l, u) {
                return u.g - l.g || -1 / 0;
              })
              .forEach(function (l) {
                return l.t.revert(r);
              }),
            this.data.forEach(function (l) {
              return !(l instanceof Qe) && l.revert && l.revert(r);
            }),
            this._r.forEach(function (l) {
              return l(r, s);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (l) {
            return l.kill && l.kill();
          });
        if ((this.clear(), i))
          for (var a = Cs.length; a--; )
            Cs[a].id === this.id && Cs.splice(a, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      t
    );
  })(),
  gT = (function () {
    function t(n) {
      (this.contexts = []), (this.scope = n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, s) {
        Tr(r) || (r = { matches: r });
        var o = new pw(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          u,
          c;
        Fe && !o.selector && (o.selector = Fe.selector),
          this.contexts.push(o),
          (i = o.add("onMatch", i)),
          (o.queries = r);
        for (u in r)
          u === "all"
            ? (c = 1)
            : ((l = Rn.matchMedia(r[u])),
              l &&
                (Cs.indexOf(o) < 0 && Cs.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(Uh)
                  : l.addEventListener("change", Uh)));
        return c && i(o), this;
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      t
    );
  })(),
  Rc = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      n.forEach(function (i) {
        return Z_(i);
      });
    },
    timeline: function (e) {
      return new Qt(e);
    },
    getTweensOf: function (e, n) {
      return Re.getTweensOf(e, n);
    },
    getProperty: function (e, n, r, i) {
      dt(e) && (e = Vn(e)[0]);
      var s = _s(e || {}).get,
        o = r ? z_ : I_;
      return (
        r === "native" && (r = ""),
        e &&
          (n
            ? o(((yn[n] && yn[n].get) || s)(e, n, r, i))
            : function (a, l, u) {
                return o(((yn[a] && yn[a].get) || s)(e, a, l, u));
              })
      );
    },
    quickSetter: function (e, n, r) {
      if (((e = Vn(e)), e.length > 1)) {
        var i = e.map(function (c) {
            return sn.quickSetter(c, n, r);
          }),
          s = i.length;
        return function (c) {
          for (var d = s; d--; ) i[d](c);
        };
      }
      e = e[0] || {};
      var o = yn[n],
        a = _s(e),
        l = (a.harness && (a.harness.aliases || {})[n]) || n,
        u = o
          ? function (c) {
              var d = new o();
              (yo._pt = 0),
                d.init(e, r ? c + r : c, yo, 0, [e]),
                d.render(1, d),
                yo._pt && $m(1, yo);
            }
          : a.set(e, l);
      return o
        ? u
        : function (c) {
            return u(e, l, r ? c + r : c, a, 1);
          };
    },
    quickTo: function (e, n, r) {
      var i,
        s = sn.to(
          e,
          Ms(((i = {}), (i[n] = "+=0.1"), (i.paused = !0), i), r || {})
        ),
        o = function (l, u, c) {
          return s.resetTo(n, l, u, c);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return Re.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Ss(e.ease, Uo.ease)), t1(Uo, e || {});
    },
    config: function (e) {
      return t1(Sn, e || {});
    },
    registerEffect: function (e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (i || "").split(",").forEach(function (a) {
        return (
          a && !yn[a] && !Pn[a] && Tc(n + " effect requires " + a + " plugin.")
        );
      }),
        (ld[n] = function (a, l, u) {
          return r(Vn(a), Un(l || {}, s), u);
        }),
        o &&
          (Qt.prototype[n] = function (a, l, u) {
            return this.add(ld[n](a, Tr(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, n) {
      oe[e] = Ss(n);
    },
    parseEase: function (e, n) {
      return arguments.length ? Ss(e, n) : oe;
    },
    getById: function (e) {
      return Re.getById(e);
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {});
      var r = new Qt(e),
        i,
        s;
      for (
        r.smoothChildTiming = tn(e.smoothChildTiming),
          Re.remove(r),
          r._dp = 0,
          r._time = r._tTime = Re._time,
          i = Re._first;
        i;

      )
        (s = i._next),
          (n ||
            !(
              !i._dur &&
              i instanceof Qe &&
              i.vars.onComplete === i._targets[0]
            )) &&
            yr(r, i, i._start - i._delay),
          (i = s);
      return yr(Re, r, 0), r;
    },
    context: function (e, n) {
      return e ? new pw(e, n) : Fe;
    },
    matchMedia: function (e) {
      return new gT(e);
    },
    matchMediaRefresh: function () {
      return (
        Cs.forEach(function (e) {
          var n = e.conditions,
            r,
            i;
          for (i in n) n[i] && ((n[i] = !1), (r = 1));
          r && e.revert();
        }) || Uh()
      );
    },
    addEventListener: function (e, n) {
      var r = Wu[e] || (Wu[e] = []);
      ~r.indexOf(n) || r.push(n);
    },
    removeEventListener: function (e, n) {
      var r = Wu[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: Kk,
      wrapYoyo: Xk,
      distribute: G_,
      random: X_,
      snap: K_,
      normalize: Gk,
      getUnit: Ot,
      clamp: Uk,
      splitColor: ew,
      toArray: Vn,
      selector: zh,
      mapRange: q_,
      pipe: Wk,
      unitize: Yk,
      interpolate: Qk,
      shuffle: Y_,
    },
    install: D_,
    effects: ld,
    ticker: vn,
    updateRoot: Qt.updateRoot,
    plugins: yn,
    globalTimeline: Re,
    core: {
      PropTween: rn,
      globals: N_,
      Tween: Qe,
      Timeline: Qt,
      Animation: Cl,
      getCache: _s,
      _removeLinkedListItem: xf,
      reverting: function () {
        return Rt;
      },
      context: function (e) {
        return e && Fe && (Fe.data.push(e), (e._ctx = Fe)), Fe;
      },
      suppressOverwrites: function (e) {
        return (Rm = e);
      },
    },
  };
nn("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (Rc[t] = Qe[t]);
});
vn.add(Qt.updateRoot);
yo = Rc.to({}, { duration: 0 });
var yT = function (e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
      r = r._next;
    return r;
  },
  vT = function (e, n) {
    var r = e._targets,
      i,
      s,
      o;
    for (i in n)
      for (s = r.length; s--; )
        (o = e._ptLookup[s][i]),
          o &&
            (o = o.d) &&
            (o._pt && (o = yT(o, i)),
            o && o.modifier && o.modifier(n[i], e, r[s], i));
  },
  hd = function (e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, s, o) {
        o._onInit = function (a) {
          var l, u;
          if (
            (dt(s) &&
              ((l = {}),
              nn(s, function (c) {
                return (l[c] = 1);
              }),
              (s = l)),
            n)
          ) {
            l = {};
            for (u in s) l[u] = n(s[u]);
            s = l;
          }
          vT(a, s);
        };
      },
    };
  },
  sn =
    Rc.registerPlugin(
      {
        name: "attr",
        init: function (e, n, r, i, s) {
          var o, a, l;
          this.tween = r;
          for (o in n)
            (l = e.getAttribute(o) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                n[o],
                i,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, n) {
          for (var r = n._pt; r; )
            Rt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, n) {
          for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
        },
      },
      hd("roundProps", Bh),
      hd("modifiers"),
      hd("snap", K_)
    ) || Rc;
Qe.version = Qt.version = sn.version = "3.12.2";
A_ = 1;
Mm() && Yo();
oe.Power0;
oe.Power1;
oe.Power2;
oe.Power3;
oe.Power4;
oe.Linear;
oe.Quad;
oe.Cubic;
oe.Quart;
oe.Quint;
oe.Strong;
oe.Elastic;
oe.Back;
oe.SteppedEase;
oe.Bounce;
oe.Sine;
oe.Expo;
oe.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var a1,
  hi,
  Lo,
  Um,
  hs,
  l1,
  Hm,
  xT = function () {
    return typeof window < "u";
  },
  Qr = {},
  ss = 180 / Math.PI,
  Mo = Math.PI / 180,
  Ks = Math.atan2,
  u1 = 1e8,
  Wm = /([A-Z])/g,
  _T = /(left|right|width|margin|padding|x)/i,
  wT = /[\s,\(]\S/,
  vr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Hh = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
  },
  ST = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
      n
    );
  },
  CT = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n
    );
  },
  PT = function (e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  mw = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n);
  },
  gw = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
  },
  kT = function (e, n, r) {
    return (e.style[n] = r);
  },
  TT = function (e, n, r) {
    return e.style.setProperty(n, r);
  },
  ET = function (e, n, r) {
    return (e._gsap[n] = r);
  },
  bT = function (e, n, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  OT = function (e, n, r, i, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = r), o.renderTransform(s, o);
  },
  RT = function (e, n, r, i, s) {
    var o = e._gsap;
    (o[n] = r), o.renderTransform(s, o);
  },
  Le = "transform",
  sr = Le + "Origin",
  LT = function t(e, n) {
    var r = this,
      i = this.target,
      s = i.style;
    if (e in Qr && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = vr[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (r.tfm[o] = Ar(i, o));
              })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : Ar(i, e));
      else
        return vr.transform.split(",").forEach(function (o) {
          return t.call(r, o, n);
        });
      if (this.props.indexOf(Le) >= 0) return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(sr, n, "")),
        (e = Le);
    }
    (s || n) && this.props.push(e, n, s[e]);
  },
  yw = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  MT = function () {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (n[e[s]] = e[s + 2])
        : e[s + 2]
        ? (r[e[s]] = e[s + 2])
        : r.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(Wm, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg &&
        (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        (s = Hm()),
        (!s || !s.isStart) && !r[Le] && (yw(r), (i.uncache = 1));
    }
  },
  vw = function (e, n) {
    var r = { target: e, props: [], revert: MT, save: LT };
    return (
      e._gsap || sn.core.getCache(e),
      n &&
        n.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  xw,
  Wh = function (e, n) {
    var r = hi.createElementNS
      ? hi.createElementNS(
          (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : hi.createElement(e);
    return r.style ? r : hi.createElement(e);
  },
  Cr = function t(e, n, r) {
    var i = getComputedStyle(e);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(Wm, "-$1").toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && t(e, Go(n) || n, 1)) ||
      ""
    );
  },
  c1 = "O,Moz,ms,Ms,Webkit".split(","),
  Go = function (e, n, r) {
    var i = n || hs,
      s = i.style,
      o = 5;
    if (e in s && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(c1[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? c1[o] : "") + e;
  },
  Yh = function () {
    xT() &&
      window.document &&
      ((a1 = window),
      (hi = a1.document),
      (Lo = hi.documentElement),
      (hs = Wh("div") || { style: {} }),
      Wh("div"),
      (Le = Go(Le)),
      (sr = Le + "Origin"),
      (hs.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (xw = !!Go("perspective")),
      (Hm = sn.core.reverting),
      (Um = 1));
  },
  pd = function t(e) {
    var n = Wh(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText,
      o;
    if (
      (Lo.appendChild(n),
      n.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox());
    return (
      r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
      Lo.removeChild(n),
      (this.style.cssText = s),
      o
    );
  },
  f1 = function (e, n) {
    for (var r = n.length; r--; )
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
  },
  _w = function (e) {
    var n;
    try {
      n = e.getBBox();
    } catch {
      n = pd.call(e, !0);
    }
    return (
      (n && (n.width || n.height)) || e.getBBox === pd || (n = pd.call(e, !0)),
      n && !n.width && !n.x && !n.y
        ? {
            x: +f1(e, ["x", "cx", "x1"]) || 0,
            y: +f1(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : n
    );
  },
  ww = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _w(e));
  },
  Pl = function (e, n) {
    if (n) {
      var r = e.style;
      n in Qr && n !== sr && (n = Le),
        r.removeProperty
          ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") &&
              (n = "-" + n),
            r.removeProperty(n.replace(Wm, "-$1").toLowerCase()))
          : r.removeAttribute(n);
    }
  },
  pi = function (e, n, r, i, s, o) {
    var a = new rn(e._pt, n, r, 0, 1, o ? gw : mw);
    return (e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a;
  },
  d1 = { deg: 1, rad: 1, turn: 1 },
  AT = { grid: 1, flex: 1 },
  Ni = function t(e, n, r, i) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      a = hs.style,
      l = _T.test(n),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      f = i === "px",
      h = i === "%",
      m,
      g,
      _,
      v;
    return i === o || !s || d1[i] || d1[o]
      ? s
      : (o !== "px" && !f && (s = t(e, n, r, "px")),
        (v = e.getCTM && ww(e)),
        (h || o === "%") && (Qr[n] || ~n.indexOf("adius"))
          ? ((m = v ? e.getBBox()[l ? "width" : "height"] : e[c]),
            Ue(h ? (s / m) * d : (s / 100) * m))
          : ((a[l ? "width" : "height"] = d + (f ? o : i)),
            (g =
              ~n.indexOf("adius") || (i === "em" && e.appendChild && !u)
                ? e
                : e.parentNode),
            v && (g = (e.ownerSVGElement || {}).parentNode),
            (!g || g === hi || !g.appendChild) && (g = hi.body),
            (_ = g._gsap),
            _ && h && _.width && l && _.time === vn.time && !_.uncache
              ? Ue((s / _.width) * d)
              : ((h || o === "%") &&
                  !AT[Cr(g, "display")] &&
                  (a.position = Cr(e, "position")),
                g === e && (a.position = "static"),
                g.appendChild(hs),
                (m = hs[c]),
                g.removeChild(hs),
                (a.position = "absolute"),
                l && h && ((_ = _s(g)), (_.time = vn.time), (_.width = g[c])),
                Ue(f ? (m * s) / d : m && s ? (d / m) * s : 0))));
  },
  Ar = function (e, n, r, i) {
    var s;
    return (
      Um || Yh(),
      n in vr &&
        n !== "transform" &&
        ((n = vr[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
      Qr[n] && n !== "transform"
        ? ((s = Tl(e, i)),
          (s =
            n !== "transformOrigin"
              ? s[n]
              : s.svg
              ? s.origin
              : Mc(Cr(e, sr)) + " " + s.zOrigin + "px"))
        : ((s = e.style[n]),
          (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
            (s =
              (Lc[n] && Lc[n](e, n, r)) ||
              Cr(e, n) ||
              V_(e, n) ||
              (n === "opacity" ? 1 : 0))),
      r && !~(s + "").trim().indexOf(" ") ? Ni(e, n, s, r) + r : s
    );
  },
  DT = function (e, n, r, i) {
    if (!r || r === "none") {
      var s = Go(n, e, 1),
        o = s && Cr(e, s, 1);
      o && o !== r
        ? ((n = s), (r = o))
        : n === "borderColor" && (r = Cr(e, "borderTopColor"));
    }
    var a = new rn(this._pt, e.style, n, 0, 1, dw),
      l = 0,
      u = 0,
      c,
      d,
      f,
      h,
      m,
      g,
      _,
      v,
      p,
      y,
      x,
      w;
    if (
      ((a.b = r),
      (a.e = i),
      (r += ""),
      (i += ""),
      i === "auto" && ((e.style[n] = i), (i = Cr(e, n) || i), (e.style[n] = r)),
      (c = [r, i]),
      nw(c),
      (r = c[0]),
      (i = c[1]),
      (f = r.match(go) || []),
      (w = i.match(go) || []),
      w.length)
    ) {
      for (; (d = go.exec(i)); )
        (_ = d[0]),
          (p = i.substring(l, d.index)),
          m
            ? (m = (m + 1) % 5)
            : (p.substr(-5) === "rgba(" || p.substr(-5) === "hsla(") && (m = 1),
          _ !== (g = f[u++] || "") &&
            ((h = parseFloat(g) || 0),
            (x = g.substr((h + "").length)),
            _.charAt(1) === "=" && (_ = Ro(h, _) + x),
            (v = parseFloat(_)),
            (y = _.substr((v + "").length)),
            (l = go.lastIndex - y.length),
            y ||
              ((y = y || Sn.units[n] || x),
              l === i.length && ((i += y), (a.e += y))),
            x !== y && (h = Ni(e, n, g, y) || 0),
            (a._pt = {
              _next: a._pt,
              p: p || u === 1 ? p : ",",
              s: h,
              c: v - h,
              m: (m && m < 4) || n === "zIndex" ? Math.round : 0,
            }));
      a.c = l < i.length ? i.substring(l, i.length) : "";
    } else a.r = n === "display" && i === "none" ? gw : mw;
    return L_.test(i) && (a.e = 0), (this._pt = a), a;
  },
  h1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  NT = function (e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
        ((e = r), (r = i), (i = e)),
      (n[0] = h1[r] || r),
      (n[1] = h1[i] || i),
      n.join(" ")
    );
  },
  jT = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        s = n.u,
        o = r._gsap,
        a,
        l,
        u;
      if (s === "all" || s === !0) (i.cssText = ""), (l = 1);
      else
        for (s = s.split(","), u = s.length; --u > -1; )
          (a = s[u]),
            Qr[a] && ((l = 1), (a = a === "transformOrigin" ? sr : Le)),
            Pl(r, a);
      l &&
        (Pl(r, Le),
        o &&
          (o.svg && r.removeAttribute("transform"),
          Tl(r, 1),
          (o.uncache = 1),
          yw(i)));
    }
  },
  Lc = {
    clearProps: function (e, n, r, i, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new rn(e._pt, n, r, 0, 0, jT));
        return (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1;
      }
    },
  },
  kl = [1, 0, 0, 1, 0, 0],
  Sw = {},
  Cw = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  p1 = function (e) {
    var n = Cr(e, Le);
    return Cw(n) ? kl : n.substr(7).match(R_).map(Ue);
  },
  Ym = function (e, n) {
    var r = e._gsap || _s(e),
      i = e.style,
      s = p1(e),
      o,
      a,
      l,
      u;
    return r.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? kl : s)
      : (s === kl &&
          !e.offsetParent &&
          e !== Lo &&
          !r.svg &&
          ((l = i.display),
          (i.display = "block"),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((u = 1), (a = e.nextElementSibling), Lo.appendChild(e)),
          (s = p1(e)),
          l ? (i.display = l) : Pl(e, "display"),
          u &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : Lo.removeChild(e))),
        n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Gh = function (e, n, r, i, s, o) {
    var a = e._gsap,
      l = s || Ym(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      d = a.xOffset || 0,
      f = a.yOffset || 0,
      h = l[0],
      m = l[1],
      g = l[2],
      _ = l[3],
      v = l[4],
      p = l[5],
      y = n.split(" "),
      x = parseFloat(y[0]) || 0,
      w = parseFloat(y[1]) || 0,
      T,
      C,
      E,
      b;
    r
      ? l !== kl &&
        (C = h * _ - m * g) &&
        ((E = x * (_ / C) + w * (-g / C) + (g * p - _ * v) / C),
        (b = x * (-m / C) + w * (h / C) - (h * p - m * v) / C),
        (x = E),
        (w = b))
      : ((T = _w(e)),
        (x = T.x + (~y[0].indexOf("%") ? (x / 100) * T.width : x)),
        (w = T.y + (~(y[1] || y[0]).indexOf("%") ? (w / 100) * T.height : w))),
      i || (i !== !1 && a.smooth)
        ? ((v = x - u),
          (p = w - c),
          (a.xOffset = d + (v * h + p * g) - v),
          (a.yOffset = f + (v * m + p * _) - p))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = x),
      (a.yOrigin = w),
      (a.smooth = !!i),
      (a.origin = n),
      (a.originIsAbsolute = !!r),
      (e.style[sr] = "0px 0px"),
      o &&
        (pi(o, a, "xOrigin", u, x),
        pi(o, a, "yOrigin", c, w),
        pi(o, a, "xOffset", d, a.xOffset),
        pi(o, a, "yOffset", f, a.yOffset)),
      e.setAttribute("data-svg-origin", x + " " + w);
  },
  Tl = function (e, n) {
    var r = e._gsap || new ow(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      s = r.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = Cr(e, sr) || "0",
      c,
      d,
      f,
      h,
      m,
      g,
      _,
      v,
      p,
      y,
      x,
      w,
      T,
      C,
      E,
      b,
      O,
      D,
      A,
      H,
      F,
      I,
      W,
      j,
      L,
      N,
      P,
      V,
      q,
      et,
      le,
      Pe;
    return (
      (c = d = f = g = _ = v = p = y = x = 0),
      (h = m = 1),
      (r.svg = !!(e.getCTM && ww(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[Le] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[Le] !== "none" ? l[Le] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (C = Ym(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((L = e.getBBox()),
            (u = r.xOrigin - L.x + "px " + (r.yOrigin - L.y) + "px"),
            (j = ""))
          : (j = !n && e.getAttribute("data-svg-origin")),
        Gh(e, j || u, !!j || r.originIsAbsolute, r.smooth !== !1, C)),
      (w = r.xOrigin || 0),
      (T = r.yOrigin || 0),
      C !== kl &&
        ((D = C[0]),
        (A = C[1]),
        (H = C[2]),
        (F = C[3]),
        (c = I = C[4]),
        (d = W = C[5]),
        C.length === 6
          ? ((h = Math.sqrt(D * D + A * A)),
            (m = Math.sqrt(F * F + H * H)),
            (g = D || A ? Ks(A, D) * ss : 0),
            (p = H || F ? Ks(H, F) * ss + g : 0),
            p && (m *= Math.abs(Math.cos(p * Mo))),
            r.svg && ((c -= w - (w * D + T * H)), (d -= T - (w * A + T * F))))
          : ((Pe = C[6]),
            (et = C[7]),
            (P = C[8]),
            (V = C[9]),
            (q = C[10]),
            (le = C[11]),
            (c = C[12]),
            (d = C[13]),
            (f = C[14]),
            (E = Ks(Pe, q)),
            (_ = E * ss),
            E &&
              ((b = Math.cos(-E)),
              (O = Math.sin(-E)),
              (j = I * b + P * O),
              (L = W * b + V * O),
              (N = Pe * b + q * O),
              (P = I * -O + P * b),
              (V = W * -O + V * b),
              (q = Pe * -O + q * b),
              (le = et * -O + le * b),
              (I = j),
              (W = L),
              (Pe = N)),
            (E = Ks(-H, q)),
            (v = E * ss),
            E &&
              ((b = Math.cos(-E)),
              (O = Math.sin(-E)),
              (j = D * b - P * O),
              (L = A * b - V * O),
              (N = H * b - q * O),
              (le = F * O + le * b),
              (D = j),
              (A = L),
              (H = N)),
            (E = Ks(A, D)),
            (g = E * ss),
            E &&
              ((b = Math.cos(E)),
              (O = Math.sin(E)),
              (j = D * b + A * O),
              (L = I * b + W * O),
              (A = A * b - D * O),
              (W = W * b - I * O),
              (D = j),
              (I = L)),
            _ &&
              Math.abs(_) + Math.abs(g) > 359.9 &&
              ((_ = g = 0), (v = 180 - v)),
            (h = Ue(Math.sqrt(D * D + A * A + H * H))),
            (m = Ue(Math.sqrt(W * W + Pe * Pe))),
            (E = Ks(I, W)),
            (p = Math.abs(E) > 2e-4 ? E * ss : 0),
            (x = le ? 1 / (le < 0 ? -le : le) : 0)),
        r.svg &&
          ((j = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !Cw(Cr(e, Le))),
          j && e.setAttribute("transform", j))),
      Math.abs(p) > 90 &&
        Math.abs(p) < 270 &&
        (s
          ? ((h *= -1), (p += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
          : ((m *= -1), (p += p <= 0 ? 180 : -180))),
      (n = n || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!n && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        o),
      (r.y =
        d -
        ((r.yPercent =
          d &&
          ((!n && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        o),
      (r.z = f + o),
      (r.scaleX = Ue(h)),
      (r.scaleY = Ue(m)),
      (r.rotation = Ue(g) + a),
      (r.rotationX = Ue(_) + a),
      (r.rotationY = Ue(v) + a),
      (r.skewX = p + a),
      (r.skewY = y + a),
      (r.transformPerspective = x + o),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[sr] = Mc(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = Sn.force3D),
      (r.renderTransform = r.svg ? FT : xw ? Pw : VT),
      (r.uncache = 0),
      r
    );
  },
  Mc = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  md = function (e, n, r) {
    var i = Ot(n);
    return Ue(parseFloat(n) + parseFloat(Ni(e, "x", r + "px", i))) + i;
  },
  VT = function (e, n) {
    (n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      Pw(e, n);
  },
  es = "0deg",
  ma = "0px",
  ts = ") ",
  Pw = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.z,
      u = r.rotation,
      c = r.rotationY,
      d = r.rotationX,
      f = r.skewX,
      h = r.skewY,
      m = r.scaleX,
      g = r.scaleY,
      _ = r.transformPerspective,
      v = r.force3D,
      p = r.target,
      y = r.zOrigin,
      x = "",
      w = (v === "auto" && e && e !== 1) || v === !0;
    if (y && (d !== es || c !== es)) {
      var T = parseFloat(c) * Mo,
        C = Math.sin(T),
        E = Math.cos(T),
        b;
      (T = parseFloat(d) * Mo),
        (b = Math.cos(T)),
        (o = md(p, o, C * b * -y)),
        (a = md(p, a, -Math.sin(T) * -y)),
        (l = md(p, l, E * b * -y + y));
    }
    _ !== ma && (x += "perspective(" + _ + ts),
      (i || s) && (x += "translate(" + i + "%, " + s + "%) "),
      (w || o !== ma || a !== ma || l !== ma) &&
        (x +=
          l !== ma || w
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + ts),
      u !== es && (x += "rotate(" + u + ts),
      c !== es && (x += "rotateY(" + c + ts),
      d !== es && (x += "rotateX(" + d + ts),
      (f !== es || h !== es) && (x += "skew(" + f + ", " + h + ts),
      (m !== 1 || g !== 1) && (x += "scale(" + m + ", " + g + ts),
      (p.style[Le] = x || "translate(0, 0)");
  },
  FT = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.rotation,
      u = r.skewX,
      c = r.skewY,
      d = r.scaleX,
      f = r.scaleY,
      h = r.target,
      m = r.xOrigin,
      g = r.yOrigin,
      _ = r.xOffset,
      v = r.yOffset,
      p = r.forceCSS,
      y = parseFloat(o),
      x = parseFloat(a),
      w,
      T,
      C,
      E,
      b;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= Mo),
          (u *= Mo),
          (w = Math.cos(l) * d),
          (T = Math.sin(l) * d),
          (C = Math.sin(l - u) * -f),
          (E = Math.cos(l - u) * f),
          u &&
            ((c *= Mo),
            (b = Math.tan(u - c)),
            (b = Math.sqrt(1 + b * b)),
            (C *= b),
            (E *= b),
            c &&
              ((b = Math.tan(c)),
              (b = Math.sqrt(1 + b * b)),
              (w *= b),
              (T *= b))),
          (w = Ue(w)),
          (T = Ue(T)),
          (C = Ue(C)),
          (E = Ue(E)))
        : ((w = d), (E = f), (T = C = 0)),
      ((y && !~(o + "").indexOf("px")) || (x && !~(a + "").indexOf("px"))) &&
        ((y = Ni(h, "x", o, "px")), (x = Ni(h, "y", a, "px"))),
      (m || g || _ || v) &&
        ((y = Ue(y + m - (m * w + g * C) + _)),
        (x = Ue(x + g - (m * T + g * E) + v))),
      (i || s) &&
        ((b = h.getBBox()),
        (y = Ue(y + (i / 100) * b.width)),
        (x = Ue(x + (s / 100) * b.height))),
      (b =
        "matrix(" + w + "," + T + "," + C + "," + E + "," + y + "," + x + ")"),
      h.setAttribute("transform", b),
      p && (h.style[Le] = b);
  },
  IT = function (e, n, r, i, s) {
    var o = 360,
      a = dt(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? ss : 1),
      u = l - i,
      c = i + u + "deg",
      d,
      f;
    return (
      a &&
        ((d = s.split("_")[1]),
        d === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
        d === "cw" && u < 0
          ? (u = ((u + o * u1) % o) - ~~(u / o) * o)
          : d === "ccw" && u > 0 && (u = ((u - o * u1) % o) - ~~(u / o) * o)),
      (e._pt = f = new rn(e._pt, n, r, i, u, ST)),
      (f.e = c),
      (f.u = "deg"),
      e._props.push(r),
      f
    );
  },
  m1 = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  zT = function (e, n, r) {
    var i = m1({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      a,
      l,
      u,
      c,
      d,
      f,
      h,
      m;
    i.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (o[Le] = n),
        (a = Tl(r, 1)),
        Pl(r, Le),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[Le]),
        (o[Le] = n),
        (a = Tl(r, 1)),
        (o[Le] = u));
    for (l in Qr)
      (u = i[l]),
        (c = a[l]),
        u !== c &&
          s.indexOf(l) < 0 &&
          ((h = Ot(u)),
          (m = Ot(c)),
          (d = h !== m ? Ni(r, l, u, m) : parseFloat(u)),
          (f = parseFloat(c)),
          (e._pt = new rn(e._pt, a, l, d, f - d, Hh)),
          (e._pt.u = m || 0),
          e._props.push(l));
    m1(a, i);
  };
nn("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (a) {
      return e < 2 ? t + a : "border" + a + t;
    });
  Lc[e > 1 ? "border" + t : t] = function (a, l, u, c, d) {
    var f, h;
    if (arguments.length < 4)
      return (
        (f = o.map(function (m) {
          return Ar(a, m, u);
        })),
        (h = f.join(" ")),
        h.split(f[0]).length === 5 ? f[0] : h
      );
    (f = (c + "").split(" ")),
      (h = {}),
      o.forEach(function (m, g) {
        return (h[m] = f[g] = f[g] || f[((g - 1) / 2) | 0]);
      }),
      a.init(l, h, d);
  };
});
var kw = {
  name: "css",
  register: Yh,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, i, s) {
    var o = this._props,
      a = e.style,
      l = r.vars.startAt,
      u,
      c,
      d,
      f,
      h,
      m,
      g,
      _,
      v,
      p,
      y,
      x,
      w,
      T,
      C,
      E;
    Um || Yh(),
      (this.styles = this.styles || vw(e)),
      (E = this.styles.props),
      (this.tween = r);
    for (g in n)
      if (g !== "autoRound" && ((c = n[g]), !(yn[g] && aw(g, n, r, i, e, s)))) {
        if (
          ((h = typeof c),
          (m = Lc[g]),
          h === "function" && ((c = c.call(r, i, e, s)), (h = typeof c)),
          h === "string" && ~c.indexOf("random(") && (c = wl(c)),
          m)
        )
          m(this, e, g, c, r) && (C = 1);
        else if (g.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(g) + "").trim()),
            (c += ""),
            (Ei.lastIndex = 0),
            Ei.test(u) || ((_ = Ot(u)), (v = Ot(c))),
            v ? _ !== v && (u = Ni(e, g, u, v) + v) : _ && (c += _),
            this.add(a, "setProperty", u, c, i, s, 0, 0, g),
            o.push(g),
            E.push(g, 0, a[g]);
        else if (h !== "undefined") {
          if (
            (l && g in l
              ? ((u = typeof l[g] == "function" ? l[g].call(r, i, e, s) : l[g]),
                dt(u) && ~u.indexOf("random(") && (u = wl(u)),
                Ot(u + "") || (u += Sn.units[g] || Ot(Ar(e, g)) || ""),
                (u + "").charAt(1) === "=" && (u = Ar(e, g)))
              : (u = Ar(e, g)),
            (f = parseFloat(u)),
            (p = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            p && (c = c.substr(2)),
            (d = parseFloat(c)),
            g in vr &&
              (g === "autoAlpha" &&
                (f === 1 && Ar(e, "visibility") === "hidden" && d && (f = 0),
                E.push("visibility", 0, a.visibility),
                pi(
                  this,
                  a,
                  "visibility",
                  f ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              g !== "scale" &&
                g !== "transform" &&
                ((g = vr[g]), ~g.indexOf(",") && (g = g.split(",")[0]))),
            (y = g in Qr),
            y)
          ) {
            if (
              (this.styles.save(g),
              x ||
                ((w = e._gsap),
                (w.renderTransform && !n.parseTransform) ||
                  Tl(e, n.parseTransform),
                (T = n.smoothOrigin !== !1 && w.smooth),
                (x = this._pt =
                  new rn(this._pt, a, Le, 0, 1, w.renderTransform, w, 0, -1)),
                (x.dep = 1)),
              g === "scale")
            )
              (this._pt = new rn(
                this._pt,
                w,
                "scaleY",
                w.scaleY,
                (p ? Ro(w.scaleY, p + d) : d) - w.scaleY || 0,
                Hh
              )),
                (this._pt.u = 0),
                o.push("scaleY", g),
                (g += "X");
            else if (g === "transformOrigin") {
              E.push(sr, 0, a[sr]),
                (c = NT(c)),
                w.svg
                  ? Gh(e, c, 0, T, 0, this)
                  : ((v = parseFloat(c.split(" ")[2]) || 0),
                    v !== w.zOrigin && pi(this, w, "zOrigin", w.zOrigin, v),
                    pi(this, a, g, Mc(u), Mc(c)));
              continue;
            } else if (g === "svgOrigin") {
              Gh(e, c, 1, T, 0, this);
              continue;
            } else if (g in Sw) {
              IT(this, w, g, f, p ? Ro(f, p + c) : c);
              continue;
            } else if (g === "smoothOrigin") {
              pi(this, w, "smooth", w.smooth, c);
              continue;
            } else if (g === "force3D") {
              w[g] = c;
              continue;
            } else if (g === "transform") {
              zT(this, c, e);
              continue;
            }
          } else g in a || (g = Go(g) || g);
          if (y || ((d || d === 0) && (f || f === 0) && !wT.test(c) && g in a))
            (_ = (u + "").substr((f + "").length)),
              d || (d = 0),
              (v = Ot(c) || (g in Sn.units ? Sn.units[g] : _)),
              _ !== v && (f = Ni(e, g, u, v)),
              (this._pt = new rn(
                this._pt,
                y ? w : a,
                g,
                f,
                (p ? Ro(f, p + d) : d) - f,
                !y && (v === "px" || g === "zIndex") && n.autoRound !== !1
                  ? PT
                  : Hh
              )),
              (this._pt.u = v || 0),
              _ !== v && v !== "%" && ((this._pt.b = u), (this._pt.r = CT));
          else if (g in a) DT.call(this, e, g, u, p ? p + c : c);
          else if (g in e) this.add(e, g, u || e[g], p ? p + c : c, i, s);
          else if (g !== "parseTransform") {
            Dm(g, c);
            continue;
          }
          y || (g in a ? E.push(g, 0, a[g]) : E.push(g, 1, u || e[g])),
            o.push(g);
        }
      }
    C && hw(this);
  },
  render: function (e, n) {
    if (n.tween._time || !Hm())
      for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
    else n.styles.revert();
  },
  get: Ar,
  aliases: vr,
  getSetter: function (e, n, r) {
    var i = vr[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in Qr && n !== sr && (e._gsap.x || Ar(e, "x"))
        ? r && l1 === r
          ? n === "scale"
            ? bT
            : ET
          : (l1 = r || {}) && (n === "scale" ? OT : RT)
        : e.style && !Lm(e.style[n])
        ? kT
        : ~n.indexOf("-")
        ? TT
        : Bm(e, n)
    );
  },
  core: { _removeProperty: Pl, _getMatrix: Ym },
};
sn.utils.checkPrefix = Go;
sn.core.getStyleSaver = vw;
(function (t, e, n, r) {
  var i = nn(t + "," + e + "," + n, function (s) {
    Qr[s] = 1;
  });
  nn(e, function (s) {
    (Sn.units[s] = "deg"), (Sw[s] = 1);
  }),
    (vr[i[13]] = t + "," + e),
    nn(r, function (s) {
      var o = s.split(":");
      vr[o[1]] = i[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
nn(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (t) {
    Sn.units[t] = "px";
  }
);
sn.registerPlugin(kw);
var J = sn.registerPlugin(kw) || sn;
J.core.Tween;
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function El() {
  return (
    (El = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    El.apply(this, arguments)
  );
}
var mi;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(mi || (mi = {}));
const g1 = "popstate";
function BT(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Kh(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ac(i);
  }
  return UT(e, n, null, t);
}
function Je(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function Gm(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function $T() {
  return Math.random().toString(36).substr(2, 8);
}
function y1(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function Kh(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    El(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? ea(e) : e,
      { state: n, key: (e && e.key) || r || $T() }
    )
  );
}
function Ac(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function ea(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function UT(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = mi.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(El({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = mi.Pop;
    let _ = c(),
      v = _ == null ? null : _ - u;
    (u = _), l && l({ action: a, location: g.location, delta: v });
  }
  function f(_, v) {
    a = mi.Push;
    let p = Kh(g.location, _, v);
    n && n(p, _), (u = c() + 1);
    let y = y1(p, u),
      x = g.createHref(p);
    try {
      o.pushState(y, "", x);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      i.location.assign(x);
    }
    s && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(_, v) {
    a = mi.Replace;
    let p = Kh(g.location, _, v);
    n && n(p, _), (u = c());
    let y = y1(p, u),
      x = g.createHref(p);
    o.replaceState(y, "", x),
      s && l && l({ action: a, location: g.location, delta: 0 });
  }
  function m(_) {
    let v = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof _ == "string" ? _ : Ac(_);
    return (
      Je(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, v)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return t(i, o);
    },
    listen(_) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(g1, d),
        (l = _),
        () => {
          i.removeEventListener(g1, d), (l = null);
        }
      );
    },
    createHref(_) {
      return e(i, _);
    },
    createURL: m,
    encodeLocation(_) {
      let v = m(_);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: f,
    replace: h,
    go(_) {
      return o.go(_);
    },
  };
  return g;
}
var v1;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(v1 || (v1 = {}));
function HT(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? ea(e) : e,
    i = Km(r.pathname || "/", n);
  if (i == null) return null;
  let s = Tw(t);
  WT(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = eE(s[a], rE(i));
  return o;
}
function Tw(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (Je(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = bi([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (Je(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Tw(s.children, e, c, u)),
      !(s.path == null && !s.index) &&
        e.push({ path: u, score: JT(u, s.index), routesMeta: c });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Ew(s.path)) i(s, o, l);
    }),
    e
  );
}
function Ew(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Ew(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
  );
}
function WT(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : ZT(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const YT = /^:\w+$/,
  GT = 3,
  KT = 2,
  XT = 1,
  QT = 10,
  qT = -2,
  x1 = (t) => t === "*";
function JT(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(x1) && (r += qT),
    e && (r += KT),
    n
      .filter((i) => !x1(i))
      .reduce((i, s) => i + (YT.test(s) ? GT : s === "" ? XT : QT), r)
  );
}
function ZT(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function eE(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === "/" ? e : e.slice(i.length) || "/",
      c = tE(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    s.push({
      params: r,
      pathname: bi([i, c.pathname]),
      pathnameBase: aE(bi([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = bi([i, c.pathnameBase]));
  }
  return s;
}
function tE(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = nE(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let f = a[d] || "";
        o = s.slice(0, s.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = iE(a[d] || "", c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function nE(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Gm(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
  return (
    t.endsWith("*")
      ? (r.push("*"),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function rE(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      Gm(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function iE(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      Gm(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            t +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      t
    );
  }
}
function Km(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function sE(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? ea(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : oE(n, e)) : e,
    search: lE(r),
    hash: uE(i),
  };
}
function oE(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function gd(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function bw(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Ow(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = ea(t))
    : ((i = El({}, t)),
      Je(
        !i.pathname || !i.pathname.includes("?"),
        gd("?", "pathname", "search", i)
      ),
      Je(
        !i.pathname || !i.pathname.includes("#"),
        gd("#", "pathname", "hash", i)
      ),
      Je(!i.search || !i.search.includes("#"), gd("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (r || o == null) a = n;
  else {
    let d = e.length - 1;
    if (o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    a = d >= 0 ? e[d] : "/";
  }
  let l = sE(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const bi = (t) => t.join("/").replace(/\/\/+/g, "/"),
  aE = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  lE = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  uE = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function cE(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const Rw = ["post", "put", "patch", "delete"];
new Set(Rw);
const fE = ["get", ...Rw];
new Set(fE);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Dc() {
  return (
    (Dc = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Dc.apply(this, arguments)
  );
}
const Xm = k.createContext(null),
  Lw = k.createContext(null),
  Bs = k.createContext(null),
  Sf = k.createContext(null),
  Ui = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Mw = k.createContext(null);
function dE(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  zl() || Je(!1);
  let { basename: r, navigator: i } = k.useContext(Bs),
    { hash: s, pathname: o, search: a } = Qm(t, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : bi([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function zl() {
  return k.useContext(Sf) != null;
}
function ta() {
  return zl() || Je(!1), k.useContext(Sf).location;
}
function Aw(t) {
  k.useContext(Bs).static || k.useLayoutEffect(t);
}
function hE() {
  let { isDataRoute: t } = k.useContext(Ui);
  return t ? EE() : pE();
}
function pE() {
  zl() || Je(!1);
  let t = k.useContext(Xm),
    { basename: e, navigator: n } = k.useContext(Bs),
    { matches: r } = k.useContext(Ui),
    { pathname: i } = ta(),
    s = JSON.stringify(bw(r).map((l) => l.pathnameBase)),
    o = k.useRef(!1);
  return (
    Aw(() => {
      o.current = !0;
    }),
    k.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = Ow(l, JSON.parse(s), i, u.relative === "path");
        t == null &&
          e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : bi([e, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [e, n, s, i, t]
    )
  );
}
function mE() {
  let { matches: t } = k.useContext(Ui),
    e = t[t.length - 1];
  return e ? e.params : {};
}
function Qm(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { matches: r } = k.useContext(Ui),
    { pathname: i } = ta(),
    s = JSON.stringify(bw(r).map((o) => o.pathnameBase));
  return k.useMemo(() => Ow(t, JSON.parse(s), i, n === "path"), [t, s, i, n]);
}
function gE(t, e) {
  return yE(t, e);
}
function yE(t, e, n) {
  zl() || Je(!1);
  let { navigator: r } = k.useContext(Bs),
    { matches: i } = k.useContext(Ui),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let l = ta(),
    u;
  if (e) {
    var c;
    let g = typeof e == "string" ? ea(e) : e;
    a === "/" || ((c = g.pathname) != null && c.startsWith(a)) || Je(!1),
      (u = g);
  } else u = l;
  let d = u.pathname || "/",
    f = a === "/" ? d : d.slice(a.length) || "/",
    h = HT(t, { pathname: f }),
    m = SE(
      h &&
        h.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, o, g.params),
            pathname: bi([
              a,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : bi([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return e && m
    ? k.createElement(
        Sf.Provider,
        {
          value: {
            location: Dc(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: mi.Pop,
          },
        },
        m
      )
    : m;
}
function vE() {
  let t = TE(),
    e = cE(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? k.createElement("pre", { style: i }, n) : null,
    s
  );
}
const xE = k.createElement(vE, null);
class _E extends k.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error || n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error
      ? k.createElement(
          Ui.Provider,
          { value: this.props.routeContext },
          k.createElement(Mw.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function wE(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = k.useContext(Xm);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Ui.Provider, { value: e }, r)
  );
}
function SE(t, e, n) {
  var r;
  if ((e === void 0 && (e = []), n === void 0 && (n = null), t == null)) {
    var i;
    if ((i = n) != null && i.errors) t = n.matches;
    else return null;
  }
  let s = t,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let a = s.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id])
    );
    a >= 0 || Je(!1), (s = s.slice(0, Math.min(s.length, a + 1)));
  }
  return s.reduceRight((a, l, u) => {
    let c = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      d = null;
    n && (d = l.route.errorElement || xE);
    let f = e.concat(s.slice(0, u + 1)),
      h = () => {
        let m;
        return (
          c
            ? (m = d)
            : l.route.Component
            ? (m = k.createElement(l.route.Component, null))
            : l.route.element
            ? (m = l.route.element)
            : (m = a),
          k.createElement(wE, {
            match: l,
            routeContext: { outlet: a, matches: f, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? k.createElement(_E, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: h(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Dw = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(Dw || {}),
  Nc = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Nc || {});
function CE(t) {
  let e = k.useContext(Xm);
  return e || Je(!1), e;
}
function PE(t) {
  let e = k.useContext(Lw);
  return e || Je(!1), e;
}
function kE(t) {
  let e = k.useContext(Ui);
  return e || Je(!1), e;
}
function Nw(t) {
  let e = kE(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || Je(!1), n.route.id;
}
function TE() {
  var t;
  let e = k.useContext(Mw),
    n = PE(Nc.UseRouteError),
    r = Nw(Nc.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[r]);
}
function EE() {
  let { router: t } = CE(Dw.UseNavigateStable),
    e = Nw(Nc.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Aw(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, Dc({ fromRouteId: e }, s)));
      },
      [t, e]
    )
  );
}
function oi(t) {
  Je(!1);
}
function bE(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = mi.Pop,
    navigator: s,
    static: o = !1,
  } = t;
  zl() && Je(!1);
  let a = e.replace(/^\/*/, "/"),
    l = k.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof r == "string" && (r = ea(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: h = "default",
    } = r,
    m = k.useMemo(() => {
      let g = Km(u, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: d, state: f, key: h },
            navigationType: i,
          };
    }, [a, u, c, d, f, h, i]);
  return m == null
    ? null
    : k.createElement(
        Bs.Provider,
        { value: l },
        k.createElement(Sf.Provider, { children: n, value: m })
      );
}
function jw(t) {
  let { children: e, location: n } = t;
  return gE(Xh(e), n);
}
new Promise(() => {});
function Xh(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    k.Children.forEach(t, (r, i) => {
      if (!k.isValidElement(r)) return;
      let s = [...e, i];
      if (r.type === k.Fragment) {
        n.push.apply(n, Xh(r.props.children, s));
        return;
      }
      r.type !== oi && Je(!1), !r.props.index || !r.props.children || Je(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Xh(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jc() {
  return (
    (jc = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    jc.apply(this, arguments)
  );
}
function Vw(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function OE(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function RE(t, e) {
  return t.button === 0 && (!e || e === "_self") && !OE(t);
}
const LE = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  ME = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  AE = "startTransition",
  _1 = gC[AE];
function DE(t) {
  let { basename: e, children: n, future: r, window: i } = t,
    s = k.useRef();
  s.current == null && (s.current = BT({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = k.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = k.useCallback(
      (d) => {
        u && _1 ? _1(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    k.useLayoutEffect(() => o.listen(c), [o, c]),
    k.createElement(bE, {
      basename: e,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
    })
  );
}
const NE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  jE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  or = k.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
      } = e,
      d = Vw(e, LE),
      { basename: f } = k.useContext(Bs),
      h,
      m = !1;
    if (typeof u == "string" && jE.test(u) && ((h = u), NE))
      try {
        let p = new URL(window.location.href),
          y = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          x = Km(y.pathname, f);
        y.origin === p.origin && x != null
          ? (u = x + y.search + y.hash)
          : (m = !0);
      } catch {}
    let g = dE(u, { relative: i }),
      _ = VE(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
      });
    function v(p) {
      r && r(p), p.defaultPrevented || _(p);
    }
    return k.createElement(
      "a",
      jc({}, d, { href: h || g, onClick: m || s ? r : v, ref: n, target: l })
    );
  }),
  du = k.forwardRef(function (e, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: l,
        children: u,
      } = e,
      c = Vw(e, ME),
      d = Qm(l, { relative: c.relative }),
      f = ta(),
      h = k.useContext(Lw),
      { navigator: m } = k.useContext(Bs),
      g = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname,
      _ = f.pathname,
      v =
        h && h.navigation && h.navigation.location
          ? h.navigation.location.pathname
          : null;
    i ||
      ((_ = _.toLowerCase()),
      (v = v ? v.toLowerCase() : null),
      (g = g.toLowerCase()));
    let p = _ === g || (!o && _.startsWith(g) && _.charAt(g.length) === "/"),
      y =
        v != null &&
        (v === g || (!o && v.startsWith(g) && v.charAt(g.length) === "/")),
      x = p ? r : void 0,
      w;
    typeof s == "function"
      ? (w = s({ isActive: p, isPending: y }))
      : (w = [s, p ? "active" : null, y ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let T = typeof a == "function" ? a({ isActive: p, isPending: y }) : a;
    return k.createElement(
      or,
      jc({}, c, { "aria-current": x, className: w, ref: n, style: T, to: l }),
      typeof u == "function" ? u({ isActive: p, isPending: y }) : u
    );
  });
var w1;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher");
})(w1 || (w1 = {}));
var S1;
(function (t) {
  (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(S1 || (S1 = {}));
function VE(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
    } = e === void 0 ? {} : e,
    a = hE(),
    l = ta(),
    u = Qm(t, { relative: o });
  return k.useCallback(
    (c) => {
      if (RE(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : Ac(l) === Ac(u);
        a(t, { replace: d, state: i, preventScrollReset: s, relative: o });
      }
    },
    [l, a, u, r, i, n, t, s, o]
  );
}
(() => {
  function t(...r) {
    const i = r.length;
    for (let s = 0; s < i; s++) {
      const o = r[s];
      o.nodeType === 1 || o.nodeType === 11
        ? this.appendChild(o)
        : this.appendChild(document.createTextNode(String(o)));
    }
  }
  function e(...r) {
    for (; this.lastChild; ) this.removeChild(this.lastChild);
    r.length && this.append(...r);
  }
  function n(...r) {
    const i = this.parentNode;
    let s = r.length;
    if (i)
      for (s || i.removeChild(this); s--; ) {
        let o = r[s];
        typeof o != "object"
          ? (o = this.ownerDocument.createTextNode(o))
          : o.parentNode && o.parentNode.removeChild(o),
          s ? i.insertBefore(this.previousSibling, o) : i.replaceChild(o, this);
      }
  }
  typeof Element < "u" &&
    (Element.prototype.append ||
      ((Element.prototype.append = t), (DocumentFragment.prototype.append = t)),
    Element.prototype.replaceChildren ||
      ((Element.prototype.replaceChildren = e),
      (DocumentFragment.prototype.replaceChildren = e)),
    Element.prototype.replaceWith ||
      ((Element.prototype.replaceWith = n),
      (DocumentFragment.prototype.replaceWith = n)));
})();
function ps(t, e) {
  return Object.getOwnPropertyNames(Object(t)).reduce((n, r) => {
    const i = Object.getOwnPropertyDescriptor(Object(t), r),
      s = Object.getOwnPropertyDescriptor(Object(e), r);
    return Object.defineProperty(n, r, s || i);
  }, {});
}
function Bl(t) {
  return typeof t == "string";
}
function qm(t) {
  return Array.isArray(t);
}
function hu(t = {}) {
  const e = ps(t);
  let n;
  return (
    e.types !== void 0 ? (n = e.types) : e.split !== void 0 && (n = e.split),
    n !== void 0 &&
      (e.types = (Bl(n) || qm(n) ? String(n) : "")
        .split(",")
        .map((r) => String(r).trim())
        .filter((r) => /((line)|(word)|(char))/i.test(r))),
    (e.absolute || e.position) &&
      (e.absolute = e.absolute || /absolute/.test(t.position)),
    e
  );
}
function Jm(t) {
  const e = Bl(t) || qm(t) ? String(t) : "";
  return {
    none: !e,
    lines: /line/i.test(e),
    words: /word/i.test(e),
    chars: /char/i.test(e),
  };
}
function Cf(t) {
  return t !== null && typeof t == "object";
}
function FE(t) {
  return Cf(t) && /^(1|3|11)$/.test(t.nodeType);
}
function IE(t) {
  return typeof t == "number" && t > -1 && t % 1 === 0;
}
function zE(t) {
  return Cf(t) && IE(t.length);
}
function As(t) {
  return qm(t)
    ? t
    : t == null
    ? []
    : zE(t)
    ? Array.prototype.slice.call(t)
    : [t];
}
function C1(t) {
  let e = t;
  return (
    Bl(t) &&
      (/^(#[a-z]\w+)$/.test(t.trim())
        ? (e = document.getElementById(t.trim().slice(1)))
        : (e = document.querySelectorAll(t))),
    As(e).reduce((n, r) => [...n, ...As(r).filter(FE)], [])
  );
}
const { entries: BE, keys: F4, values: I4 } = Object,
  Vc = "_splittype",
  Br = {};
let $E = 0;
function xr(t, e, n) {
  if (!Cf(t)) return console.warn("[data.set] owner is not an object"), null;
  const r = t[Vc] || (t[Vc] = ++$E),
    i = Br[r] || (Br[r] = {});
  return (
    n === void 0
      ? e &&
        Object.getPrototypeOf(e) === Object.prototype &&
        (Br[r] = { ...i, ...e })
      : e !== void 0 && (i[e] = n),
    n
  );
}
function ms(t, e) {
  const n = Cf(t) ? t[Vc] : null,
    r = (n && Br[n]) || {};
  return e === void 0 ? r : r[e];
}
function Fw(t) {
  const e = t && t[Vc];
  e && (delete t[e], delete Br[e]);
}
function UE() {
  BE(Br).forEach(([t, { isRoot: e, isSplit: n }]) => {
    (!e || !n) && ((Br[t] = null), delete Br[t]);
  });
}
function HE(t, e = " ") {
  return (t ? String(t) : "").trim().replace(/\s+/g, " ").split(e);
}
const Zm = "\\ud800-\\udfff",
  Iw = "\\u0300-\\u036f\\ufe20-\\ufe23",
  zw = "\\u20d0-\\u20f0",
  Bw = "\\ufe0e\\ufe0f",
  WE = `[${Zm}]`,
  Qh = `[${Iw}${zw}]`,
  qh = "\\ud83c[\\udffb-\\udfff]",
  YE = `(?:${Qh}|${qh})`,
  $w = `[^${Zm}]`,
  Uw = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Hw = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  Ww = "\\u200d",
  Yw = `${YE}?`,
  Gw = `[${Bw}]?`,
  GE = "(?:" + Ww + "(?:" + [$w, Uw, Hw].join("|") + ")" + Gw + Yw + ")*",
  KE = Gw + Yw + GE,
  XE = `(?:${[`${$w}${Qh}?`, Qh, Uw, Hw, WE].join("|")}
)`,
  QE = RegExp(`${qh}(?=${qh})|${XE}${KE}`, "g"),
  qE = [Ww, Zm, Iw, zw, Bw],
  JE = RegExp(`[${qE.join("")}]`);
function ZE(t) {
  return t.split("");
}
function Kw(t) {
  return JE.test(t);
}
function eb(t) {
  return t.match(QE) || [];
}
function tb(t) {
  return Kw(t) ? eb(t) : ZE(t);
}
function nb(t) {
  return t == null ? "" : String(t);
}
function rb(t, e = "") {
  return (t = nb(t)), t && Bl(t) && !e && Kw(t) ? tb(t) : t.split(e);
}
function Jh(t, e) {
  const n = document.createElement(t);
  return (
    e &&
      Object.keys(e).forEach((r) => {
        const i = e[r],
          s = Bl(i) ? i.trim() : i;
        s === null ||
          s === "" ||
          (r === "children" ? n.append(...As(s)) : n.setAttribute(r, s));
      }),
    n
  );
}
var eg = {
  splitClass: "",
  lineClass: "line",
  wordClass: "word",
  charClass: "char",
  types: ["lines", "words", "chars"],
  absolute: !1,
  tagName: "div",
};
function ib(t, e) {
  e = ps(eg, e);
  const n = Jm(e.types),
    r = e.tagName,
    i = t.nodeValue,
    s = document.createDocumentFragment();
  let o = [],
    a = [];
  return (
    /^\s/.test(i) && s.append(" "),
    (o = HE(i).reduce((l, u, c, d) => {
      let f, h;
      return (
        n.chars &&
          (h = rb(u).map((m) => {
            const g = Jh(r, {
              class: `${e.splitClass} ${e.charClass}`,
              style: "display: inline-block;",
              children: m,
            });
            return xr(g, "isChar", !0), (a = [...a, g]), g;
          })),
        n.words || n.lines
          ? ((f = Jh(r, {
              class: `${e.wordClass} ${e.splitClass}`,
              style: `display: inline-block; ${
                n.words && e.absolute ? "position: relative;" : ""
              }`,
              children: n.chars ? h : u,
            })),
            xr(f, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
            s.appendChild(f))
          : h.forEach((m) => {
              s.appendChild(m);
            }),
        c < d.length - 1 && s.append(" "),
        n.words ? l.concat(f) : l
      );
    }, [])),
    /\s$/.test(i) && s.append(" "),
    t.replaceWith(s),
    { words: o, chars: a }
  );
}
function Xw(t, e) {
  const n = t.nodeType,
    r = { words: [], chars: [] };
  if (!/(1|3|11)/.test(n)) return r;
  if (n === 3 && /\S/.test(t.nodeValue)) return ib(t, e);
  const i = As(t.childNodes);
  if (i.length && (xr(t, "isSplit", !0), !ms(t).isRoot)) {
    (t.style.display = "inline-block"), (t.style.position = "relative");
    const s = t.nextSibling,
      o = t.previousSibling,
      a = t.textContent || "",
      l = s ? s.textContent : " ",
      u = o ? o.textContent : " ";
    xr(t, {
      isWordEnd: /\s$/.test(a) || /^\s/.test(l),
      isWordStart: /^\s/.test(a) || /\s$/.test(u),
    });
  }
  return i.reduce((s, o) => {
    const { words: a, chars: l } = Xw(o, e);
    return { words: [...s.words, ...a], chars: [...s.chars, ...l] };
  }, r);
}
function sb(t, e, n, r) {
  if (!n.absolute) return { top: e ? t.offsetTop : null };
  const i = t.offsetParent,
    [s, o] = r;
  let a = 0,
    l = 0;
  if (i && i !== document.body) {
    const g = i.getBoundingClientRect();
    (a = g.x + s), (l = g.y + o);
  }
  const { width: u, height: c, x: d, y: f } = t.getBoundingClientRect(),
    h = f + o - l,
    m = d + s - a;
  return { width: u, height: c, top: h, left: m };
}
function Qw(t) {
  ms(t).isWord
    ? (Fw(t), t.replaceWith(...t.childNodes))
    : As(t.children).forEach((e) => Qw(e));
}
const ob = () => document.createDocumentFragment();
function ab(t, e, n) {
  const r = Jm(e.types),
    i = e.tagName,
    s = t.getElementsByTagName("*"),
    o = [];
  let a = [],
    l = null,
    u,
    c,
    d,
    f = [];
  const h = t.parentElement,
    m = t.nextElementSibling,
    g = ob(),
    _ = window.getComputedStyle(t),
    v = _.textAlign,
    y = parseFloat(_.fontSize) * 0.2;
  return (
    e.absolute &&
      ((d = { left: t.offsetLeft, top: t.offsetTop, width: t.offsetWidth }),
      (c = t.offsetWidth),
      (u = t.offsetHeight),
      xr(t, { cssWidth: t.style.width, cssHeight: t.style.height })),
    As(s).forEach((x) => {
      const w = x.parentElement === t,
        { width: T, height: C, top: E, left: b } = sb(x, w, e, n);
      /^br$/i.test(x.nodeName) ||
        (r.lines &&
          w &&
          ((l === null || E - l >= y) && ((l = E), o.push((a = []))),
          a.push(x)),
        e.absolute && xr(x, { top: E, left: b, width: T, height: C }));
    }),
    h && h.removeChild(t),
    r.lines &&
      ((f = o.map((x) => {
        const w = Jh(i, {
          class: `${e.splitClass} ${e.lineClass}`,
          style: `display: block; text-align: ${v}; width: 100%;`,
        });
        xr(w, "isLine", !0);
        const T = { height: 0, top: 1e4 };
        return (
          g.appendChild(w),
          x.forEach((C, E, b) => {
            const { isWordEnd: O, top: D, height: A } = ms(C),
              H = b[E + 1];
            (T.height = Math.max(T.height, A)),
              (T.top = Math.min(T.top, D)),
              w.appendChild(C),
              O && ms(H).isWordStart && w.append(" ");
          }),
          e.absolute && xr(w, { height: T.height, top: T.top }),
          w
        );
      })),
      r.words || Qw(g),
      t.replaceChildren(g)),
    e.absolute &&
      ((t.style.width = `${t.style.width || c}px`),
      (t.style.height = `${u}px`),
      As(s).forEach((x) => {
        const { isLine: w, top: T, left: C, width: E, height: b } = ms(x),
          O = ms(x.parentElement),
          D = !w && O.isLine;
        (x.style.top = `${D ? T - O.top : T}px`),
          (x.style.left = w ? `${d.left}px` : `${C - (D ? d.left : 0)}px`),
          (x.style.height = `${b}px`),
          (x.style.width = w ? `${d.width}px` : `${E}px`),
          (x.style.position = "absolute");
      })),
    h && (m ? h.insertBefore(t, m) : h.appendChild(t)),
    f
  );
}
let Xs = ps(eg, {});
class Ds {
  static get data() {
    return Br;
  }
  static get defaults() {
    return Xs;
  }
  static set defaults(e) {
    Xs = ps(Xs, hu(e));
  }
  static setDefaults(e) {
    return (Xs = ps(Xs, hu(e))), eg;
  }
  static revert(e) {
    C1(e).forEach((n) => {
      const { isSplit: r, html: i, cssWidth: s, cssHeight: o } = ms(n);
      r &&
        ((n.innerHTML = i),
        (n.style.width = s || ""),
        (n.style.height = o || ""),
        Fw(n));
    });
  }
  static create(e, n) {
    return new Ds(e, n);
  }
  constructor(e, n) {
    (this.isSplit = !1),
      (this.settings = ps(Xs, hu(n))),
      (this.elements = C1(e)),
      this.split();
  }
  split(e) {
    this.revert(),
      this.elements.forEach((i) => {
        xr(i, "html", i.innerHTML);
      }),
      (this.lines = []),
      (this.words = []),
      (this.chars = []);
    const n = [window.pageXOffset, window.pageYOffset];
    e !== void 0 && (this.settings = ps(this.settings, hu(e)));
    const r = Jm(this.settings.types);
    r.none ||
      (this.elements.forEach((i) => {
        xr(i, "isRoot", !0);
        const { words: s, chars: o } = Xw(i, this.settings);
        (this.words = [...this.words, ...s]),
          (this.chars = [...this.chars, ...o]);
      }),
      this.elements.forEach((i) => {
        if (r.lines || this.settings.absolute) {
          const s = ab(i, this.settings, n);
          this.lines = [...this.lines, ...s];
        }
      }),
      (this.isSplit = !0),
      window.scrollTo(n[0], n[1]),
      UE());
  }
  revert() {
    this.isSplit &&
      ((this.lines = null),
      (this.words = null),
      (this.chars = null),
      (this.isSplit = !1)),
      Ds.revert(this.elements);
  }
}
function lb() {
  if (console && console.warn) {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`),
      console.warn(...e);
  }
}
const P1 = {};
function Zh() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  (typeof e[0] == "string" && P1[e[0]]) ||
    (typeof e[0] == "string" && (P1[e[0]] = new Date()), lb(...e));
}
const qw = (t, e) => () => {
  if (t.isInitialized) e();
  else {
    const n = () => {
      setTimeout(() => {
        t.off("initialized", n);
      }, 0),
        e();
    };
    t.on("initialized", n);
  }
};
function k1(t, e, n) {
  t.loadNamespaces(e, qw(t, n));
}
function T1(t, e, n, r) {
  typeof n == "string" && (n = [n]),
    n.forEach((i) => {
      t.options.ns.indexOf(i) < 0 && t.options.ns.push(i);
    }),
    t.loadLanguages(e, qw(t, r));
}
function ub(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = e.languages[0],
    i = e.options ? e.options.fallbackLng : !1,
    s = e.languages[e.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const o = (a, l) => {
    const u = e.services.backendConnector.state[`${a}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf("languageChanging") > -1 &&
    e.services.backendConnector.backend &&
    e.isLanguageChangingTo &&
    !o(e.isLanguageChangingTo, t)
    ? !1
    : !!(
        e.hasResourceBundle(r, t) ||
        !e.services.backendConnector.backend ||
        (e.options.resources && !e.options.partialBundledLanguages) ||
        (o(r, t) && (!i || o(s, t)))
      );
}
function cb(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length
    ? (Zh("i18n.languages were undefined or empty", e.languages), !0)
    : e.options.ignoreJSONStructure !== void 0
    ? e.hasLoadedNamespace(t, {
        lng: n.lng,
        precheck: (i, s) => {
          if (
            n.bindI18n &&
            n.bindI18n.indexOf("languageChanging") > -1 &&
            i.services.backendConnector.backend &&
            i.isLanguageChangingTo &&
            !s(i.isLanguageChangingTo, t)
          )
            return !1;
        },
      })
    : ub(t, e, n);
}
const fb =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  db = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  hb = (t) => db[t],
  pb = (t) => t.replace(fb, hb);
let mb = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: pb,
};
function gb() {
  return mb;
}
let yb;
function vb() {
  return yb;
}
const Jw = k.createContext();
class xb {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const _b = (t, e) => {
  const n = k.useRef();
  return (
    k.useEffect(() => {
      n.current = e ? n.current : t;
    }, [t, e]),
    n.current
  );
};
function Hn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = e,
    { i18n: r, defaultNS: i } = k.useContext(Jw) || {},
    s = n || r || vb();
  if ((s && !s.reportNamespaces && (s.reportNamespaces = new xb()), !s)) {
    Zh(
      "You will need to pass in an i18next instance by using initReactI18next"
    );
    const y = (w, T) =>
        typeof T == "string"
          ? T
          : T && typeof T == "object" && typeof T.defaultValue == "string"
          ? T.defaultValue
          : Array.isArray(w)
          ? w[w.length - 1]
          : w,
      x = [y, {}, !1];
    return (x.t = y), (x.i18n = {}), (x.ready = !1), x;
  }
  s.options.react &&
    s.options.react.wait !== void 0 &&
    Zh(
      "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
    );
  const o = { ...gb(), ...s.options.react, ...e },
    { useSuspense: a, keyPrefix: l } = o;
  let u = t || i || (s.options && s.options.defaultNS);
  (u = typeof u == "string" ? [u] : u || ["translation"]),
    s.reportNamespaces.addUsedNamespaces &&
      s.reportNamespaces.addUsedNamespaces(u);
  const c =
    (s.isInitialized || s.initializedStoreOnce) && u.every((y) => cb(y, s, o));
  function d() {
    return s.getFixedT(e.lng || null, o.nsMode === "fallback" ? u : u[0], l);
  }
  const [f, h] = k.useState(d);
  let m = u.join();
  e.lng && (m = `${e.lng}${m}`);
  const g = _b(m),
    _ = k.useRef(!0);
  k.useEffect(() => {
    const { bindI18n: y, bindI18nStore: x } = o;
    (_.current = !0),
      !c &&
        !a &&
        (e.lng
          ? T1(s, e.lng, u, () => {
              _.current && h(d);
            })
          : k1(s, u, () => {
              _.current && h(d);
            })),
      c && g && g !== m && _.current && h(d);
    function w() {
      _.current && h(d);
    }
    return (
      y && s && s.on(y, w),
      x && s && s.store.on(x, w),
      () => {
        (_.current = !1),
          y && s && y.split(" ").forEach((T) => s.off(T, w)),
          x && s && x.split(" ").forEach((T) => s.store.off(T, w));
      }
    );
  }, [s, m]);
  const v = k.useRef(!0);
  k.useEffect(() => {
    _.current && !v.current && h(d), (v.current = !1);
  }, [s, l]);
  const p = [f, s, c];
  if (((p.t = f), (p.i18n = s), (p.ready = c), c || (!c && !a))) return p;
  throw new Promise((y) => {
    e.lng ? T1(s, e.lng, u, () => y()) : k1(s, u, () => y());
  });
}
function wb(t) {
  let { i18n: e, defaultNS: n, children: r } = t;
  const i = k.useMemo(() => ({ i18n: e, defaultNS: n }), [e, n]);
  return k.createElement(Jw.Provider, { value: i }, r);
}
var Zw = { exports: {} },
  Sb = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Cb = Sb,
  Pb = Cb;
function eS() {}
function tS() {}
tS.resetWarningCache = eS;
var kb = function () {
  function t(r, i, s, o, a, l) {
    if (l !== Pb) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: tS,
    resetWarningCache: eS,
  };
  return (n.PropTypes = n), n;
};
Zw.exports = kb();
var Tb = Zw.exports;
const U = hv(Tb);
var Eb = ["color", "size", "title"];
function ep() {
  return (
    (ep =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    ep.apply(this, arguments)
  );
}
function bb(t, e) {
  if (t == null) return {};
  var n = Ob(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function Ob(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var tg = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = bb(t, Eb);
  return X.createElement(
    "svg",
    ep(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      fillRule: "evenodd",
      d: "M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z",
    })
  );
});
tg.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
tg.defaultProps = { color: "currentColor", size: "1em", title: null };
const Fc = tg;
var Rb = ["color", "size", "title"];
function tp() {
  return (
    (tp =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    tp.apply(this, arguments)
  );
}
function Lb(t, e) {
  if (t == null) return {};
  var n = Mb(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function Mb(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var ng = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = Lb(t, Rb);
  return X.createElement(
    "svg",
    tp(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      fillRule: "evenodd",
      d: "M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z",
    }),
    X.createElement("path", {
      fillRule: "evenodd",
      d: "M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z",
    })
  );
});
ng.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
ng.defaultProps = { color: "currentColor", size: "1em", title: null };
const Ab = ng;
var Db = ["color", "size", "title"];
function np() {
  return (
    (np =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    np.apply(this, arguments)
  );
}
function Nb(t, e) {
  if (t == null) return {};
  var n = jb(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function jb(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var rg = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = Nb(t, Db);
  return X.createElement(
    "svg",
    np(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
    })
  );
});
rg.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
rg.defaultProps = { color: "currentColor", size: "1em", title: null };
const Vb = rg;
var Fb = ["color", "size", "title"];
function rp() {
  return (
    (rp =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    rp.apply(this, arguments)
  );
}
function Ib(t, e) {
  if (t == null) return {};
  var n = zb(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function zb(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var ig = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = Ib(t, Fb);
  return X.createElement(
    "svg",
    rp(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
    })
  );
});
ig.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
ig.defaultProps = { color: "currentColor", size: "1em", title: null };
const Bb = ig;
var $b = ["color", "size", "title"];
function ip() {
  return (
    (ip =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    ip.apply(this, arguments)
  );
}
function Ub(t, e) {
  if (t == null) return {};
  var n = Hb(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function Hb(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var sg = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = Ub(t, $b);
  return X.createElement(
    "svg",
    ip(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
    })
  );
});
sg.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
sg.defaultProps = { color: "currentColor", size: "1em", title: null };
const Wb = sg;
var Yb = ["color", "size", "title"];
function sp() {
  return (
    (sp =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    sp.apply(this, arguments)
  );
}
function Gb(t, e) {
  if (t == null) return {};
  var n = Kb(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function Kb(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var og = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = Gb(t, Yb);
  return X.createElement(
    "svg",
    sp(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
    })
  );
});
og.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
og.defaultProps = { color: "currentColor", size: "1em", title: null };
const Xb = og;
var Qb = ["color", "size", "title"];
function op() {
  return (
    (op =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    op.apply(this, arguments)
  );
}
function qb(t, e) {
  if (t == null) return {};
  var n = Jb(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function Jb(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var ag = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = qb(t, Qb);
  return X.createElement(
    "svg",
    op(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      fillRule: "evenodd",
      d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
    })
  );
});
ag.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
ag.defaultProps = { color: "currentColor", size: "1em", title: null };
const Zb = ag;
var e3 = ["color", "size", "title"];
function ap() {
  return (
    (ap =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    ap.apply(this, arguments)
  );
}
function t3(t, e) {
  if (t == null) return {};
  var n = n3(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function n3(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var lg = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = t3(t, e3);
  return X.createElement(
    "svg",
    ap(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z",
    }),
    X.createElement("path", {
      d: "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z",
    })
  );
});
lg.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
lg.defaultProps = { color: "currentColor", size: "1em", title: null };
const r3 = lg;
var i3 = ["color", "size", "title"];
function lp() {
  return (
    (lp =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    lp.apply(this, arguments)
  );
}
function s3(t, e) {
  if (t == null) return {};
  var n = o3(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function o3(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var ug = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = s3(t, i3);
  return X.createElement(
    "svg",
    lp(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z",
    })
  );
});
ug.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
ug.defaultProps = { color: "currentColor", size: "1em", title: null };
const a3 = ug;
var l3 = ["color", "size", "title"];
function up() {
  return (
    (up =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    up.apply(this, arguments)
  );
}
function u3(t, e) {
  if (t == null) return {};
  var n = c3(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function c3(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var cg = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = u3(t, l3);
  return X.createElement(
    "svg",
    up(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z",
    }),
    X.createElement("path", {
      d: "M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z",
    })
  );
});
cg.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
cg.defaultProps = { color: "currentColor", size: "1em", title: null };
const f3 = cg;
var d3 = ["color", "size", "title"];
function cp() {
  return (
    (cp =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    cp.apply(this, arguments)
  );
}
function h3(t, e) {
  if (t == null) return {};
  var n = p3(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function p3(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var fg = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = h3(t, d3);
  return X.createElement(
    "svg",
    cp(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
    })
  );
});
fg.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
fg.defaultProps = { color: "currentColor", size: "1em", title: null };
const m3 = fg;
var g3 = ["color", "size", "title"];
function fp() {
  return (
    (fp =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    fp.apply(this, arguments)
  );
}
function y3(t, e) {
  if (t == null) return {};
  var n = v3(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function v3(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var dg = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = y3(t, g3);
  return X.createElement(
    "svg",
    fp(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z",
    })
  );
});
dg.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
dg.defaultProps = { color: "currentColor", size: "1em", title: null };
const x3 = dg;
var _3 = ["color", "size", "title"];
function dp() {
  return (
    (dp =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    dp.apply(this, arguments)
  );
}
function w3(t, e) {
  if (t == null) return {};
  var n = S3(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function S3(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var hg = k.forwardRef(function (t, e) {
  var n = t.color,
    r = t.size,
    i = t.title,
    s = w3(t, _3);
  return X.createElement(
    "svg",
    dp(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
      },
      s
    ),
    i ? X.createElement("title", null, i) : null,
    X.createElement("path", {
      d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",
    })
  );
});
hg.propTypes = {
  color: U.string,
  size: U.oneOfType([U.string, U.number]),
  title: U.string,
};
hg.defaultProps = { color: "currentColor", size: "1em", title: null };
const C3 = hg,
  P3 = ({ setMenuActive: t, menuActive: e }) => {
    const [n, r] = Hn("global"),
      [i, s] = k.useState(!1),
      o = k.useRef();
    k.useLayoutEffect(() => {
      J.from(o.current, {
        translateY: 100,
        opacity: 0,
        ease: "back.out(2)",
        delay: 1.5,
      });
    }, []),
      k.useLayoutEffect(() => {
        J.from(o.current, {
          translateY: 100,
          opacity: 0,
          ease: "back.out(2)",
          delay: 0.5,
        });
      }, [e]);
    const a = (u) => {
        r.changeLanguage(u), t(!1), s(!1), (document.documentElement.lang = u);
      },
      l = () => {
        s(!i);
      };
    return S.jsxs("div", {
      className: "languages",
      ref: o,
      children: [
        S.jsx(f3, { className: "languages-open-menu", onClick: l }),
        S.jsxs("div", {
          className: i ? "languages-menu active" : "languages-menu",
          children: [
            S.jsx("button", {
              onClick: () => {
                a("es");
              },
              className: r.language === "es" ? "active" : void 0,
              children: "ES",
            }),
            S.jsx("button", {
              onClick: () => {
                a("en");
              },
              className: r.language === "en" ? "active" : void 0,
              children: "EN",
            }),
            S.jsx("button", {
              onClick: () => {
                a("pt");
              },
              className: r.language === "pt" ? "active" : void 0,
              children: "PT",
            }),
          ],
        }),
      ],
    });
  },
  k3 = ({ menuActive: t }) => {
    const e = localStorage.getItem("isDark") === "true",
      [n, r] = k.useState(e),
      i = () => {
        r(!n);
      },
      s = k.useRef();
    return (
      k.useLayoutEffect(() => {
        J.from(s.current, {
          translateY: 100,
          opacity: 0,
          ease: "back.out(2)",
          delay: 1.75,
        });
      }, []),
      k.useLayoutEffect(() => {
        J.from(s.current, {
          translateY: 100,
          opacity: 0,
          ease: "back.out(2)",
          delay: 0.5,
        });
      }, [t]),
      k.useEffect(() => {
        n === !0
          ? document.documentElement.classList.add("dark-mode")
          : document.documentElement.classList.remove("dark-mode"),
          localStorage.setItem("isDark", n);
      }, [n]),
      S.jsx("button", {
        className: "color-mode",
        onClick: i,
        ref: s,
        children: n ? S.jsx(a3, {}) : S.jsx(r3, {}),
      })
    );
  },
  T3 = ({ location: t }) => {
    const e = k.useRef(),
      n = k.useRef(),
      r = k.useRef([]),
      [i, s] = Hn("global"),
      [o, a] = k.useState(!1);
    k.useLayoutEffect(() => {
      J.from(e.current, { scale: 0, ease: "back.out(2)", delay: 0.75 });
      const u = getComputedStyle(document.documentElement),
        c = n.current,
        d = new Ds(c, { types: "chars" });
      J.from(d.chars, {
        x: -100,
        opacity: 0,
        ease: "back.out(2)",
        stagger: 0.02,
        delay: 1,
      }),
        J.from(r.current, {
          y: -100,
          opacity: 0,
          stagger: 0.02,
          ease: "back.out(2)",
          delay: 1.25,
        }),
        d.chars.forEach((f) => {
          f.addEventListener("mouseenter", () => {
            J.to(f, {
              translateY: -10,
              color: u.getPropertyValue("--clr-primary"),
              duration: 0.5,
              ease: "back.out",
            });
          }),
            f.addEventListener("mouseleave", () => {
              J.to(f, { translateY: 0, delay: 0.3, ease: "back.out(5)" }),
                J.to(f, {
                  delay: 0.4,
                  ease: "back.out(1)",
                  color:
                    f.textContent !== "."
                      ? u.getPropertyValue("--clr-text")
                      : u.getPropertyValue("--clr-primary"),
                }),
                J.to(f, { clearProps: "color", delay: 0.45 });
            });
        });
    }, [s.language]),
      k.useLayoutEffect(() => {
        J.from(r.current, {
          y: -100,
          opacity: 0,
          stagger: 0.02,
          ease: "back.out(2)",
          delay: 0,
        });
      }, [o]);
    const l = () => {
      a(!o);
    };
    return (
      k.useEffect(() => {
        setTimeout(() => {
          a(!1);
        }, 500);
      }, [t]),
      S.jsxs("header", {
        className: o ? "header menu-active" : "header",
        ref: e,
        children: [
          S.jsxs(or, {
            to: "/",
            className: "header-logo",
            ref: n,
            children: [
              S.jsx("span", { className: "arroba", children: "" }),
              "lacv",
              S.jsx("span", { className: "dot", children: "H" }),
              "acks",
            ],
          }),
          S.jsx("nav", {
            className: "nav",
            children: S.jsxs("ul", {
              className: "nav-list",
              children: [
                S.jsx("li", {
                  className: "nav-item",
                  ref: (u) => {
                    r.current[0] = u;
                  },
                  children: S.jsx(du, {
                    to: "/",
                    className: ({ isActive: u }) =>
                      u ? "nav-link active" : "nav-link",
                    children: i("header.home"),
                  }),
                }),
                S.jsx("li", {
                  className: "nav-item",
                  ref: (u) => {
                    r.current[1] = u;
                  },
                  children: S.jsx(du, {
                    to: "/cursos",
                    className: "nav-link",
                    "data-tooltip": i("header.soon"),
                    children: i("header.courses"),
                  }),
                }),
                S.jsx("li", {
                  className: "nav-item",
                  ref: (u) => {
                    r.current[2] = u;
                  },
                  children: S.jsx(du, {
                    to: "/repasos-coderhouse",
                    className: "nav-link",
                    "data-tooltip": i("header.coderhouse"),
                    children: i("header.reviews"),
                  }),
                }),
                S.jsx("li", {
                  className: "nav-item",
                  ref: (u) => {
                    r.current[3] = u;
                  },
                  children: S.jsx(du, {
                    to: "/donaciones",
                    className: "nav-link",
                    children: i("header.donations"),
                  }),
                }),
              ],
            }),
          }),
          S.jsx(Zb, { className: "open-menu", onClick: l }),
          S.jsx(x3, { className: "close-menu", onClick: l }),
          S.jsxs("div", {
            className: "header-buttons",
            children: [
              S.jsx(P3, { setMenuActive: a, menuActive: o }),
              S.jsx(k3, { menuActive: o }),
            ],
          }),
        ],
      })
    );
  },
  E3 = () =>
    S.jsx("footer", {
      className: "footer",
      children: S.jsx("div", {
        className: "container",
        children: S.jsxs("div", {
          className: "social",
          children: [
            S.jsx("a", {
              href: "https://youtube.com/lacvartes",
              children: S.jsx(C3, {}),
            }),
            S.jsx("a", {
              href: "https://instagram.com/lacvhacks",
              children: S.jsx(Xb, {}),
            }),
            S.jsx("a", {
              href: "https://twitter.com/lacvhacks",
              children: S.jsx(m3, {}),
            }),
            S.jsx("a", {
              href: "https://discord.gg/",
              children: S.jsx(Vb, {}),
            }),
            S.jsx("a", {
              href: "https://github.com/lacvhacks",
              children: S.jsx(Wb, {}),
            }),
            S.jsx("a", {
              href: "mailto:lacvhacks@duck.com",
              children: S.jsx(Bb, {}),
            }),
          ],
        }),
      }),
    }),
  b3 = "/assets/a.png",
  O3 = "/assets/b.png",
  R3 = () => {
    const [t, e] = Hn("global"),
      [n, r] = k.useState(!1),
      i = k.useRef(),
      s = k.useRef();
    k.useLayoutEffect(() => {
      J.from(i.current, {
        scale: 0,
        rotate: -360,
        delay: 1.3,
        duration: 0.65,
        ease: "back.out(2)",
      }),
        J.from(s.current, {
          scale: 0,
          rotateZ: 150,
          delay: 1,
          duration: 0.75,
          ease: "back.out(2)",
        });
    }, [e.language]);
    const o = () => {
        const l = Math.random() * 20 - 10;
        J.to(i.current, 0.4, {
          scale: 0.7,
          rotate: (l + 180) * -1,
          borderRadius: "3rem",
          delay: 0.1,
          ease: "back.out(4)",
        }),
          J.to(s.current, 0.4, { scale: 1.1, rotate: l, ease: "back.out(4)" }),
          r(!n);
      },
      a = () => {
        J.to(i.current, 0.4, {
          scale: 0.85,
          rotate: 0,
          borderRadius: "1rem",
          delay: 0.2,
          ease: "back.out(4)",
        }),
          J.to(s.current, 0.4, { scale: 1, ease: "back.out(4)" }),
          r(!n);
      };
    return S.jsxs("div", {
      className: "hero-avatar",
      onMouseEnter: o,
      onMouseLeave: a,
      children: [
        S.jsx("div", { className: "hero-avatar-background", ref: i }),
        S.jsx("img", {
          src: n ? O3 : b3,
          alt: "LACV",
          className: "hero-avatar-picture",
          ref: s,
        }),
      ],
    });
  },
  L3 = "AIzaSyBY8flILT2zht5OXNNhfhdgzlCIg8w2ywU",
  M3 = "UC53KeIgcYPozO6SqlN6edbw",
  A3 = () => {
    const [t, e] = Hn("global"),
      n = k.useRef([]);
    k.useLayoutEffect(() => {
      J.from(n.current, {
        y: 200,
        rotateX: 360,
        opacity: 0,
        stagger: 0.5,
        delay: 1,
        ease: "back.out(2)",
      });
    }, [e.language]);
    const [r, i] = k.useState(null);
    let s = ["", "K", "M", "G", "T", "P", "E"];
    function o(a) {
      var l = (Math.log10(Math.abs(a)) / 3) | 0;
      if (l == 0) return a;
      var u = s[l],
        c = Math.pow(10, l * 3),
        d = a / c;
      return d.toFixed(1) + u;
    }
    return (
      k.useEffect(() => {
        fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${M3}&key=${L3}`
        )
          .then((a) => a.json())
          .then((a) => {
            a.items
              ? i({
                  subCount: o(a.items[0].statistics.subscriberCount),
                  videoCount: o(a.items[0].statistics.videoCount),
                  viewCount: o(a.items[0].statistics.viewCount),
                })
              : i({ subCount: "+3K", videoCount: "+102", viewCount: "+380K" });
          });
      }, []),
      S.jsxs("div", {
        className: "hero-stats",
        children: [
          S.jsxs("div", {
            className: "hero-stat",
            ref: (a) => {
              n.current[0] = a;
            },
            children: [
              S.jsx("p", {
                className: "hero-stat-number",
                children: r ? r.subCount : "3K",
              }),
              S.jsx("p", {
                className: "hero-stat-text",
                children: t("home.stats.subscribers"),
              }),
            ],
          }),
          S.jsxs("div", {
            className: "hero-stat",
            ref: (a) => {
              n.current[1] = a;
            },
            children: [
              S.jsx("p", {
                className: "hero-stat-number",
                children: r ? r.videoCount : "102",
              }),
              S.jsx("p", {
                className: "hero-stat-text",
                children: t("home.stats.videos"),
              }),
            ],
          }),

          /*tambien hay que agregar esto cuadritos
          S.jsxs("div", {
            className: "hero-stat",
            ref: (a) => {
              n.current[0] = a;
            },
            children: [
              S.jsx("p", {
                className: "hero-stat-number",
                children: r ? r.subCount : "8K",
              }),
              S.jsx("p", {
                className: "hero-stat-text",
                children: t("home.stats.subscribers"),
              }),
            ],
          }),
          *///cierra agregar cuadritos
          
          S.jsxs("div", {
            className: "hero-stat",
            ref: (a) => {
              n.current[2] = a;
            },
            children: [
              S.jsx("p", {
                className: "hero-stat-number",
                children: r ? r.viewCount : "380K",
              }),
              S.jsx("p", {
                className: "hero-stat-text",
                children: t("home.stats.views"),
              }),
            ],
          }),
        ],
      })
    );
  },
  D3 = () => {
    const [t, e] = Hn("global"),
      n = k.useRef(null),
      r = k.useRef();
    return (
      k.useLayoutEffect(() => {
        const i = getComputedStyle(document.documentElement),
          s = n.current;
        new Ds(s, {
          types: "words, chars",
          charClass: "title-letter",
        }).chars.forEach((u, c) => {
          J.from(u, {
            scale: 0,
            translateY: Math.floor(Math.random() * 601) - 300,
            rotateZ: Math.floor(Math.random() * 601) - 300,
            translateX: Math.floor(Math.random() * 601) - 300,
            ease: "back.out(3)",
            delay: c * 0.015 + 0.5,
            duration: 0.75,
          });
          const d = (Math.floor(Math.random() * 16) + 5) / 10 + 0.25;
          J.from(u, {
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            delay: d,
            ease: "back.out(3)",
          }),
            J.to(u, { clearProps: "color", delay: d + 0.1 }),
            u.addEventListener("mouseenter", () => {
              J.to(u, {
                translateY: -10,
                rotateZ: Math.floor(Math.random() * 101) - 50,
                translateX: Math.floor(Math.random() * 61) - 30,
                duration: 0.5,
                ease: "back.out",
                scale: (Math.floor(Math.random() * 8) + 1) * 0.25,
              }),
                J.to(u, {
                  color:
                    "#" + Math.floor(Math.random() * 16777215).toString(16),
                  duration: 0.1,
                  ease: "back.out",
                });
            }),
            u.addEventListener("mouseleave", () => {
              J.to(u, {
                translateY: 0,
                rotateZ: 0,
                translateX: 0,
                delay: 0.75,
                duration: 0.7,
                ease: "back.out(4)",
                scale: 1,
              });
              const f = Math.random() * (3 - 1.5) + 1.5;
              J.to(u, {
                color: i.getPropertyValue("--clr-text"),
                delay: f,
                duration: 1.5,
                ease: "back.out",
                clearProps: "color",
              });
            });
        });
        const a = r.current,
          l = new Ds(a, { types: "words, chars", charClass: "title-letter" });
        J.from(l.words, {
          opacity: 0,
          translateY: 100,
          stagger: 0.005,
          delay: 0.75,
          ease: "back.out(1.5)",
        });
      }, [e.language]),
      S.jsxs(S.Fragment, {
        children: [
          S.jsx("div", {
            className: "hero-title",
            children: S.jsxs(
              "h1",
              {
                ref: n,
                children: [
                  t("home.hero.title1"),
                  S.jsx("br", {}),
                  t("home.hero.title2"),
                ],
              },
              e.language
            ),
          }),
          S.jsx("div", {
            className: "hero-description",
            children: S.jsx(
              "p",
              { ref: r, children: t("home.hero.text") },
              e.language
            ),
          }),
        ],
      })
    );
  },
  N3 = ({ headerHeight: t }) =>
    S.jsx("div", {
      className: "container",
      children: S.jsxs("div", {
        className: "hero",
        style: { minHeight: "calc(100vh - " + t + "px)" },
        children: [S.jsx(R3, {}), S.jsx(D3, {}), S.jsx(A3, {})],
      }),
    });
function E1(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function j3(t, e, n) {
  return e && E1(t.prototype, e), n && E1(t, n), t;
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var _t,
  hp,
  xn,
  gi,
  yi,
  Ao,
  nS,
  os,
  Wa,
  rS,
  Vr,
  Jn,
  iS,
  sS = function () {
    return (
      _t ||
      (typeof window < "u" && (_t = window.gsap) && _t.registerPlugin && _t)
    );
  },
  oS = 1,
  vo = [],
  ne = [],
  Pr = [],
  Ya = Date.now,
  pp = function (e, n) {
    return n;
  },
  V3 = function () {
    var e = Wa.core,
      n = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, ne),
      i.push.apply(i, Pr),
      (ne = r),
      (Pr = i),
      (pp = function (o, a) {
        return n[o](a);
      });
  },
  Oi = function (e, n) {
    return ~Pr.indexOf(e) && Pr[Pr.indexOf(e) + 1][n];
  },
  Ga = function (e) {
    return !!~rS.indexOf(e);
  },
  Nt = function (e, n, r, i, s) {
    return e.addEventListener(n, r, { passive: !i, capture: !!s });
  },
  Dt = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  pu = "scrollLeft",
  mu = "scrollTop",
  mp = function () {
    return (Vr && Vr.isPressed) || ne.cache++;
  },
  Ic = function (e, n) {
    var r = function i(s) {
      if (s || s === 0) {
        oS && (xn.history.scrollRestoration = "manual");
        var o = Vr && Vr.isPressed;
        (s = i.v = Math.round(s) || (Vr && Vr.iOS ? 1 : 0)),
          e(s),
          (i.cacheID = ne.cache),
          o && pp("ss", s);
      } else
        (n || ne.cache !== i.cacheID || pp("ref")) &&
          ((i.cacheID = ne.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (r.offset = 0), e && r;
  },
  Bt = {
    s: pu,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Ic(function (t) {
      return arguments.length
        ? xn.scrollTo(t, rt.sc())
        : xn.pageXOffset || gi[pu] || yi[pu] || Ao[pu] || 0;
    }),
  },
  rt = {
    s: mu,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Bt,
    sc: Ic(function (t) {
      return arguments.length
        ? xn.scrollTo(Bt.sc(), t)
        : xn.pageYOffset || gi[mu] || yi[mu] || Ao[mu] || 0;
    }),
  },
  Kt = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || _t.utils.toArray)(e)[0] ||
      (typeof e == "string" && _t.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  ji = function (e, n) {
    var r = n.s,
      i = n.sc;
    Ga(e) && (e = gi.scrollingElement || yi);
    var s = ne.indexOf(e),
      o = i === rt.sc ? 1 : 2;
    !~s && (s = ne.push(e) - 1), ne[s + o] || Nt(e, "scroll", mp);
    var a = ne[s + o],
      l =
        a ||
        (ne[s + o] =
          Ic(Oi(e, r), !0) ||
          (Ga(e)
            ? i
            : Ic(function (u) {
                return arguments.length ? (e[r] = u) : e[r];
              })));
    return (
      (l.target = e),
      a || (l.smooth = _t.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  gp = function (e, n, r) {
    var i = e,
      s = e,
      o = Ya(),
      a = o,
      l = n || 50,
      u = Math.max(500, l * 3),
      c = function (m, g) {
        var _ = Ya();
        g || _ - o > l
          ? ((s = i), (i = m), (a = o), (o = _))
          : r
          ? (i += m)
          : (i = s + ((m - s) / (_ - a)) * (o - a));
      },
      d = function () {
        (s = i = r ? 0 : i), (a = o = 0);
      },
      f = function (m) {
        var g = a,
          _ = s,
          v = Ya();
        return (
          (m || m === 0) && m !== i && c(m),
          o === a || v - a > u
            ? 0
            : ((i + (r ? _ : -_)) / ((r ? v : o) - g)) * 1e3
        );
      };
    return { update: c, reset: d, getVelocity: f };
  },
  ga = function (e, n) {
    return (
      n && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  b1 = function (e) {
    var n = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r;
  },
  aS = function () {
    (Wa = _t.core.globals().ScrollTrigger), Wa && Wa.core && V3();
  },
  lS = function (e) {
    return (
      (_t = e || sS()),
      _t &&
        typeof document < "u" &&
        document.body &&
        ((xn = window),
        (gi = document),
        (yi = gi.documentElement),
        (Ao = gi.body),
        (rS = [xn, gi, yi, Ao]),
        _t.utils.clamp,
        (iS = _t.core.context || function () {}),
        (os = "onpointerenter" in Ao ? "pointer" : "mouse"),
        (nS = Ze.isTouch =
          xn.matchMedia &&
          xn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in xn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Jn = Ze.eventTypes =
          (
            "ontouchstart" in yi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in yi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (oS = 0);
        }, 500),
        aS(),
        (hp = 1)),
      hp
    );
  };
Bt.op = rt;
ne.cache = 0;
var Ze = (function () {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return (
    (e.init = function (r) {
      hp || lS(_t) || console.warn("Please gsap.registerPlugin(Observer)"),
        Wa || aS();
      var i = r.tolerance,
        s = r.dragMinimum,
        o = r.type,
        a = r.target,
        l = r.lineHeight,
        u = r.debounce,
        c = r.preventDefault,
        d = r.onStop,
        f = r.onStopDelay,
        h = r.ignore,
        m = r.wheelSpeed,
        g = r.event,
        _ = r.onDragStart,
        v = r.onDragEnd,
        p = r.onDrag,
        y = r.onPress,
        x = r.onRelease,
        w = r.onRight,
        T = r.onLeft,
        C = r.onUp,
        E = r.onDown,
        b = r.onChangeX,
        O = r.onChangeY,
        D = r.onChange,
        A = r.onToggleX,
        H = r.onToggleY,
        F = r.onHover,
        I = r.onHoverEnd,
        W = r.onMove,
        j = r.ignoreCheck,
        L = r.isNormalizer,
        N = r.onGestureStart,
        P = r.onGestureEnd,
        V = r.onWheel,
        q = r.onEnable,
        et = r.onDisable,
        le = r.onClick,
        Pe = r.scrollSpeed,
        he = r.capture,
        me = r.allowClicks,
        ht = r.lockAxis,
        We = r.onLockAxis;
      (this.target = a = Kt(a) || yi),
        (this.vars = r),
        h && (h = _t.utils.toArray(h)),
        (i = i || 1e-9),
        (s = s || 0),
        (m = m || 1),
        (Pe = Pe || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(xn.getComputedStyle(Ao).lineHeight) || 22);
      var an,
        Ne,
        ln,
        ie,
        Ye,
        Yt,
        un,
        R = this,
        cn = 0,
        Er = 0,
        Wi = ji(a, Bt),
        Ge = ji(a, rt),
        Yi = Wi(),
        Gi = Ge(),
        ra =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          Jn[0] === "pointerdown",
        pt = Ga(a),
        Be = a.ownerDocument || gi,
        Wn = [0, 0, 0],
        Yn = [0, 0, 0],
        Ki = 0,
        br = function () {
          return (Ki = Ya());
        },
        lr = function (Y, de) {
          return (
            ((R.event = Y) && h && ~h.indexOf(Y.target)) ||
            (de && ra && Y.pointerType !== "touch") ||
            (j && j(Y, de))
          );
        },
        Gt = function () {
          R._vx.reset(), R._vy.reset(), Ne.pause(), d && d(R);
        },
        Xi = function () {
          var Y = (R.deltaX = b1(Wn)),
            de = (R.deltaY = b1(Yn)),
            je = Math.abs(Y) >= i,
            B = Math.abs(de) >= i;
          D && (je || B) && D(R, Y, de, Wn, Yn),
            je &&
              (w && R.deltaX > 0 && w(R),
              T && R.deltaX < 0 && T(R),
              b && b(R),
              A && R.deltaX < 0 != cn < 0 && A(R),
              (cn = R.deltaX),
              (Wn[0] = Wn[1] = Wn[2] = 0)),
            B &&
              (E && R.deltaY > 0 && E(R),
              C && R.deltaY < 0 && C(R),
              O && O(R),
              H && R.deltaY < 0 != Er < 0 && H(R),
              (Er = R.deltaY),
              (Yn[0] = Yn[1] = Yn[2] = 0)),
            (ie || ln) && (W && W(R), ln && (p(R), (ln = !1)), (ie = !1)),
            Yt && !(Yt = !1) && We && We(R),
            Ye && (V(R), (Ye = !1)),
            (an = 0);
        },
        Hs = function (Y, de, je) {
          (Wn[je] += Y),
            (Yn[je] += de),
            R._vx.update(Y),
            R._vy.update(de),
            u ? an || (an = requestAnimationFrame(Xi)) : Xi();
        },
        Ws = function (Y, de) {
          ht &&
            !un &&
            ((R.axis = un = Math.abs(Y) > Math.abs(de) ? "x" : "y"), (Yt = !0)),
            un !== "y" && ((Wn[2] += Y), R._vx.update(Y, !0)),
            un !== "x" && ((Yn[2] += de), R._vy.update(de, !0)),
            u ? an || (an = requestAnimationFrame(Xi)) : Xi();
        },
        Qi = function (Y) {
          if (!lr(Y, 1)) {
            Y = ga(Y, c);
            var de = Y.clientX,
              je = Y.clientY,
              B = de - R.x,
              ae = je - R.y,
              K = R.isDragging;
            (R.x = de),
              (R.y = je),
              (K ||
                Math.abs(R.startX - de) >= s ||
                Math.abs(R.startY - je) >= s) &&
                (p && (ln = !0),
                K || (R.isDragging = !0),
                Ws(B, ae),
                K || (_ && _(R)));
          }
        },
        Zr = (R.onPress = function (Q) {
          lr(Q, 1) ||
            (Q && Q.button) ||
            ((R.axis = un = null),
            Ne.pause(),
            (R.isPressed = !0),
            (Q = ga(Q)),
            (cn = Er = 0),
            (R.startX = R.x = Q.clientX),
            (R.startY = R.y = Q.clientY),
            R._vx.reset(),
            R._vy.reset(),
            Nt(L ? a : Be, Jn[1], Qi, c, !0),
            (R.deltaX = R.deltaY = 0),
            y && y(R));
        }),
        ei = (R.onRelease = function (Q) {
          if (!lr(Q, 1)) {
            Dt(L ? a : Be, Jn[1], Qi, !0);
            var Y = !isNaN(R.y - R.startY),
              de =
                R.isDragging &&
                (Math.abs(R.x - R.startX) > 3 || Math.abs(R.y - R.startY) > 3),
              je = ga(Q);
            !de &&
              Y &&
              (R._vx.reset(),
              R._vy.reset(),
              c &&
                me &&
                _t.delayedCall(0.08, function () {
                  if (Ya() - Ki > 300 && !Q.defaultPrevented) {
                    if (Q.target.click) Q.target.click();
                    else if (Be.createEvent) {
                      var B = Be.createEvent("MouseEvents");
                      B.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        xn,
                        1,
                        je.screenX,
                        je.screenY,
                        je.clientX,
                        je.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        Q.target.dispatchEvent(B);
                    }
                  }
                })),
              (R.isDragging = R.isGesturing = R.isPressed = !1),
              d && !L && Ne.restart(!0),
              v && de && v(R),
              x && x(R, de);
          }
        }),
        ue = function (Y) {
          return (
            Y.touches &&
            Y.touches.length > 1 &&
            (R.isGesturing = !0) &&
            N(Y, R.isDragging)
          );
        },
        qi = function () {
          return (R.isGesturing = !1) || P(R);
        },
        Gn = function (Y) {
          if (!lr(Y)) {
            var de = Wi(),
              je = Ge();
            Hs((de - Yi) * Pe, (je - Gi) * Pe, 1),
              (Yi = de),
              (Gi = je),
              d && Ne.restart(!0);
          }
        },
        Kn = function (Y) {
          if (!lr(Y)) {
            (Y = ga(Y, c)), V && (Ye = !0);
            var de =
              (Y.deltaMode === 1 ? l : Y.deltaMode === 2 ? xn.innerHeight : 1) *
              m;
            Hs(Y.deltaX * de, Y.deltaY * de, 0), d && !L && Ne.restart(!0);
          }
        },
        Xn = function (Y) {
          if (!lr(Y)) {
            var de = Y.clientX,
              je = Y.clientY,
              B = de - R.x,
              ae = je - R.y;
            (R.x = de), (R.y = je), (ie = !0), (B || ae) && Ws(B, ae);
          }
        },
        Ji = function (Y) {
          (R.event = Y), F(R);
        },
        Ys = function (Y) {
          (R.event = Y), I(R);
        },
        Or = function (Y) {
          return lr(Y) || (ga(Y, c) && le(R));
        };
      (Ne = R._dc = _t.delayedCall(f || 0.25, Gt).pause()),
        (R.deltaX = R.deltaY = 0),
        (R._vx = gp(0, 50, !0)),
        (R._vy = gp(0, 50, !0)),
        (R.scrollX = Wi),
        (R.scrollY = Ge),
        (R.isDragging = R.isGesturing = R.isPressed = !1),
        iS(this),
        (R.enable = function (Q) {
          return (
            R.isEnabled ||
              (Nt(pt ? Be : a, "scroll", mp),
              o.indexOf("scroll") >= 0 && Nt(pt ? Be : a, "scroll", Gn, c, he),
              o.indexOf("wheel") >= 0 && Nt(a, "wheel", Kn, c, he),
              ((o.indexOf("touch") >= 0 && nS) || o.indexOf("pointer") >= 0) &&
                (Nt(a, Jn[0], Zr, c, he),
                Nt(Be, Jn[2], ei),
                Nt(Be, Jn[3], ei),
                me && Nt(a, "click", br, !1, !0),
                le && Nt(a, "click", Or),
                N && Nt(Be, "gesturestart", ue),
                P && Nt(Be, "gestureend", qi),
                F && Nt(a, os + "enter", Ji),
                I && Nt(a, os + "leave", Ys),
                W && Nt(a, os + "move", Xn)),
              (R.isEnabled = !0),
              Q && Q.type && Zr(Q),
              q && q(R)),
            R
          );
        }),
        (R.disable = function () {
          R.isEnabled &&
            (vo.filter(function (Q) {
              return Q !== R && Ga(Q.target);
            }).length || Dt(pt ? Be : a, "scroll", mp),
            R.isPressed &&
              (R._vx.reset(), R._vy.reset(), Dt(L ? a : Be, Jn[1], Qi, !0)),
            Dt(pt ? Be : a, "scroll", Gn, he),
            Dt(a, "wheel", Kn, he),
            Dt(a, Jn[0], Zr, he),
            Dt(Be, Jn[2], ei),
            Dt(Be, Jn[3], ei),
            Dt(a, "click", br, !0),
            Dt(a, "click", Or),
            Dt(Be, "gesturestart", ue),
            Dt(Be, "gestureend", qi),
            Dt(a, os + "enter", Ji),
            Dt(a, os + "leave", Ys),
            Dt(a, os + "move", Xn),
            (R.isEnabled = R.isPressed = R.isDragging = !1),
            et && et(R));
        }),
        (R.kill = R.revert =
          function () {
            R.disable();
            var Q = vo.indexOf(R);
            Q >= 0 && vo.splice(Q, 1), Vr === R && (Vr = 0);
          }),
        vo.push(R),
        L && Ga(a) && (Vr = R),
        R.enable(g);
    }),
    j3(t, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    t
  );
})();
Ze.version = "3.12.2";
Ze.create = function (t) {
  return new Ze(t);
};
Ze.register = lS;
Ze.getAll = function () {
  return vo.slice();
};
Ze.getById = function (t) {
  return vo.filter(function (e) {
    return e.vars.id === t;
  })[0];
};
sS() && _t.registerPlugin(Ze);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var $,
  eo,
  se,
  be,
  nr,
  Se,
  uS,
  zc,
  Bc,
  xo,
  Yu,
  gu,
  Et,
  Pf,
  yp,
  Ft,
  O1,
  R1,
  to,
  cS,
  yd,
  fS,
  hn,
  dS,
  hS,
  pS,
  ni,
  vp,
  pg,
  Do,
  mg,
  vd,
  yu = 1,
  zt = Date.now,
  xd = zt(),
  zn = 0,
  Oa = 0,
  L1 = function (e, n, r) {
    var i = gn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (r["_" + n + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
  },
  M1 = function (e, n) {
    return n && (!gn(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  F3 = function t() {
    return Oa && requestAnimationFrame(t);
  },
  A1 = function () {
    return (Pf = 1);
  },
  D1 = function () {
    return (Pf = 0);
  },
  mr = function (e) {
    return e;
  },
  Ra = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  mS = function () {
    return typeof window < "u";
  },
  gS = function () {
    return $ || (mS() && ($ = window.gsap) && $.registerPlugin && $);
  },
  Ns = function (e) {
    return !!~uS.indexOf(e);
  },
  yS = function (e) {
    return (
      (e === "Height" ? mg : se["inner" + e]) ||
      nr["client" + e] ||
      Se["client" + e]
    );
  },
  vS = function (e) {
    return (
      Oi(e, "getBoundingClientRect") ||
      (Ns(e)
        ? function () {
            return (Ju.width = se.innerWidth), (Ju.height = mg), Ju;
          }
        : function () {
            return Dr(e);
          })
    );
  },
  I3 = function (e, n, r) {
    var i = r.d,
      s = r.d2,
      o = r.a;
    return (o = Oi(e, "getBoundingClientRect"))
      ? function () {
          return o()[i];
        }
      : function () {
          return (n ? yS(s) : e["client" + s]) || 0;
        };
  },
  z3 = function (e, n) {
    return !n || ~Pr.indexOf(e)
      ? vS(e)
      : function () {
          return Ju;
        };
  },
  Fr = function (e, n) {
    var r = n.s,
      i = n.d2,
      s = n.d,
      o = n.a;
    return Math.max(
      0,
      (r = "scroll" + i) && (o = Oi(e, r))
        ? o() - vS(e)()[s]
        : Ns(e)
        ? (nr[r] || Se[r]) - yS(i)
        : e[r] - e["offset" + i]
    );
  },
  vu = function (e, n) {
    for (var r = 0; r < to.length; r += 3)
      (!n || ~n.indexOf(to[r + 1])) && e(to[r], to[r + 1], to[r + 2]);
  },
  gn = function (e) {
    return typeof e == "string";
  },
  $t = function (e) {
    return typeof e == "function";
  },
  Gu = function (e) {
    return typeof e == "number";
  },
  as = function (e) {
    return typeof e == "object";
  },
  ya = function (e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause();
  },
  _d = function (e, n) {
    if (e.enabled) {
      var r = n(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  Qs = Math.abs,
  xS = "left",
  _S = "top",
  gg = "right",
  yg = "bottom",
  Ps = "width",
  ks = "height",
  Ka = "Right",
  Xa = "Left",
  Qa = "Top",
  qa = "Bottom",
  Xe = "padding",
  An = "margin",
  Ko = "Width",
  vg = "Height",
  yt = "px",
  Dn = function (e) {
    return se.getComputedStyle(e);
  },
  B3 = function (e) {
    var n = Dn(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
  },
  N1 = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  Dr = function (e, n) {
    var r =
        n &&
        Dn(e)[yp] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        $.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  xp = function (e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  wS = function (e) {
    var n = [],
      r = e.labels,
      i = e.duration(),
      s;
    for (s in r) n.push(r[s] / i);
    return n;
  },
  $3 = function (e) {
    return function (n) {
      return $.utils.snap(wS(e), n);
    };
  },
  xg = function (e) {
    var n = $.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, s) {
          return i - s;
        });
    return r
      ? function (i, s, o) {
          o === void 0 && (o = 0.001);
          var a;
          if (!s) return n(i);
          if (s > 0) {
            for (i -= o, a = 0; a < r.length; a++) if (r[a] >= i) return r[a];
            return r[a - 1];
          } else for (a = r.length, i += o; a--; ) if (r[a] <= i) return r[a];
          return r[0];
        }
      : function (i, s, o) {
          o === void 0 && (o = 0.001);
          var a = n(i);
          return !s || Math.abs(a - i) < o || a - i < 0 == s < 0
            ? a
            : n(s < 0 ? i - e : i + e);
        };
  },
  U3 = function (e) {
    return function (n, r) {
      return xg(wS(e))(n, r.direction);
    };
  },
  xu = function (e, n, r, i) {
    return r.split(",").forEach(function (s) {
      return e(n, s, i);
    });
  },
  lt = function (e, n, r, i, s) {
    return e.addEventListener(n, r, { passive: !i, capture: !!s });
  },
  at = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  _u = function (e, n, r) {
    (r = r && r.wheelHandler), r && (e(n, "wheel", r), e(n, "touchmove", r));
  },
  j1 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  wu = { toggleActions: "play", anticipatePin: 0 },
  $c = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Ku = function (e, n) {
    if (gn(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= n / 100), (e = e.substr(0, r - 1))),
        (e =
          i +
          (e in $c
            ? $c[e] * n
            : ~e.indexOf("%")
            ? (parseFloat(e) * n) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Su = function (e, n, r, i, s, o, a, l) {
    var u = s.startColor,
      c = s.endColor,
      d = s.fontSize,
      f = s.indent,
      h = s.fontWeight,
      m = be.createElement("div"),
      g = Ns(r) || Oi(r, "pinType") === "fixed",
      _ = e.indexOf("scroller") !== -1,
      v = g ? Se : r,
      p = e.indexOf("start") !== -1,
      y = p ? u : c,
      x =
        "border-color:" +
        y +
        ";font-size:" +
        d +
        ";color:" +
        y +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (x += "position:" + ((_ || l) && g ? "fixed;" : "absolute;")),
      (_ || l || !g) &&
        (x += (i === rt ? gg : yg) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (x +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (m._isStart = p),
      m.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
      (m.style.cssText = x),
      (m.innerText = n || n === 0 ? e + "-" + n : e),
      v.children[0] ? v.insertBefore(m, v.children[0]) : v.appendChild(m),
      (m._offset = m["offset" + i.op.d2]),
      Xu(m, 0, i, p),
      m
    );
  },
  Xu = function (e, n, r, i) {
    var s = { display: "block" },
      o = r[i ? "os2" : "p2"],
      a = r[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (s[r.a + "Percent"] = i ? -100 : 0),
      (s[r.a] = i ? "1px" : 0),
      (s["border" + o + Ko] = 1),
      (s["border" + a + Ko] = 0),
      (s[r.p] = n + "px"),
      $.set(e, s);
  },
  Z = [],
  _p = {},
  bl,
  V1 = function () {
    return zt() - zn > 34 && (bl || (bl = requestAnimationFrame($r)));
  },
  qs = function () {
    (!hn || !hn.isPressed || hn.startX > Se.clientWidth) &&
      (ne.cache++,
      hn ? bl || (bl = requestAnimationFrame($r)) : $r(),
      zn || Vs("scrollStart"),
      (zn = zt()));
  },
  wd = function () {
    (pS = se.innerWidth), (hS = se.innerHeight);
  },
  La = function () {
    ne.cache++,
      !Et &&
        !fS &&
        !be.fullscreenElement &&
        !be.webkitFullscreenElement &&
        (!dS ||
          pS !== se.innerWidth ||
          Math.abs(se.innerHeight - hS) > se.innerHeight * 0.25) &&
        zc.restart(!0);
  },
  js = {},
  H3 = [],
  SS = function t() {
    return at(ee, "scrollEnd", t) || gs(!0);
  },
  Vs = function (e) {
    return (
      (js[e] &&
        js[e].map(function (n) {
          return n();
        })) ||
      H3
    );
  },
  pn = [],
  CS = function (e) {
    for (var n = 0; n < pn.length; n += 5)
      (!e || (pn[n + 4] && pn[n + 4].query === e)) &&
        ((pn[n].style.cssText = pn[n + 1]),
        pn[n].getBBox && pn[n].setAttribute("transform", pn[n + 2] || ""),
        (pn[n + 3].uncache = 1));
  },
  _g = function (e, n) {
    var r;
    for (Ft = 0; Ft < Z.length; Ft++)
      (r = Z[Ft]),
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    n && CS(n), n || Vs("revert");
  },
  PS = function (e, n) {
    ne.cache++,
      (n || !It) &&
        ne.forEach(function (r) {
          return $t(r) && r.cacheID++ && (r.rec = 0);
        }),
      gn(e) && (se.history.scrollRestoration = pg = e);
  },
  It,
  Ts = 0,
  F1,
  W3 = function () {
    if (F1 !== Ts) {
      var e = (F1 = Ts);
      requestAnimationFrame(function () {
        return e === Ts && gs(!0);
      });
    }
  },
  kS = function () {
    Se.appendChild(Do),
      (mg = Do.offsetHeight || se.innerHeight),
      Se.removeChild(Do);
  },
  gs = function (e, n) {
    if (zn && !e) {
      lt(ee, "scrollEnd", SS);
      return;
    }
    kS(),
      (It = ee.isRefreshing = !0),
      ne.forEach(function (i) {
        return $t(i) && ++i.cacheID && (i.rec = i());
      });
    var r = Vs("refreshInit");
    cS && ee.sort(),
      n || _g(),
      ne.forEach(function (i) {
        $t(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      Z.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      Z.forEach(function (i, s) {
        if (i._subPinOffset && i.pin) {
          var o = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = i.pin[o];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[o] - a), i.refresh();
        }
      }),
      Z.forEach(function (i) {
        var s = Fr(i.scroller, i._dir);
        (i.vars.end === "max" || (i._endClamp && i.end > s)) &&
          i.setPositions(i.start, Math.max(i.start + 1, s), !0);
      }),
      r.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      ne.forEach(function (i) {
        $t(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      PS(pg, 1),
      zc.pause(),
      Ts++,
      (It = 2),
      $r(2),
      Z.forEach(function (i) {
        return $t(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (It = ee.isRefreshing = !1),
      Vs("refresh");
  },
  wp = 0,
  Qu = 1,
  Ja,
  $r = function (e) {
    if (!It || e === 2) {
      (ee.isUpdating = !0), Ja && Ja.update(0);
      var n = Z.length,
        r = zt(),
        i = r - xd >= 50,
        s = n && Z[0].scroll();
      if (
        ((Qu = wp > s ? -1 : 1),
        It || (wp = s),
        i &&
          (zn && !Pf && r - zn > 200 && ((zn = 0), Vs("scrollEnd")),
          (Yu = xd),
          (xd = r)),
        Qu < 0)
      ) {
        for (Ft = n; Ft-- > 0; ) Z[Ft] && Z[Ft].update(0, i);
        Qu = 1;
      } else for (Ft = 0; Ft < n; Ft++) Z[Ft] && Z[Ft].update(0, i);
      ee.isUpdating = !1;
    }
    bl = 0;
  },
  Sp = [
    xS,
    _S,
    yg,
    gg,
    An + qa,
    An + Ka,
    An + Qa,
    An + Xa,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  qu = Sp.concat([
    Ps,
    ks,
    "boxSizing",
    "max" + Ko,
    "max" + vg,
    "position",
    An,
    Xe,
    Xe + Qa,
    Xe + Ka,
    Xe + qa,
    Xe + Xa,
  ]),
  Y3 = function (e, n, r) {
    No(r);
    var i = e._gsap;
    if (i.spacerIsNative) No(i.spacerState);
    else if (e._gsap.swappedIn) {
      var s = n.parentNode;
      s && (s.insertBefore(e, n), s.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  Sd = function (e, n, r, i) {
    if (!e._gsap.swappedIn) {
      for (var s = Sp.length, o = n.style, a = e.style, l; s--; )
        (l = Sp[s]), (o[l] = r[l]);
      (o.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (o.display = "inline-block"),
        (a[yg] = a[gg] = "auto"),
        (o.flexBasis = r.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Ps] = xp(e, Bt) + yt),
        (o[ks] = xp(e, rt) + yt),
        (o[Xe] = a[An] = a[_S] = a[xS] = "0"),
        No(i),
        (a[Ps] = a["max" + Ko] = r[Ps]),
        (a[ks] = a["max" + vg] = r[ks]),
        (a[Xe] = r[Xe]),
        e.parentNode !== n &&
          (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  G3 = /([A-Z])/g,
  No = function (e) {
    if (e) {
      var n = e.t.style,
        r = e.length,
        i = 0,
        s,
        o;
      for ((e.t._gsap || $.core.getCache(e.t)).uncache = 1; i < r; i += 2)
        (o = e[i + 1]),
          (s = e[i]),
          o
            ? (n[s] = o)
            : n[s] && n.removeProperty(s.replace(G3, "-$1").toLowerCase());
    }
  },
  Cu = function (e) {
    for (var n = qu.length, r = e.style, i = [], s = 0; s < n; s++)
      i.push(qu[s], r[qu[s]]);
    return (i.t = e), i;
  },
  K3 = function (e, n, r) {
    for (var i = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), i.push(a, a in n ? n[a] : e[o + 1]);
    return (i.t = e.t), i;
  },
  Ju = { left: 0, top: 0 },
  I1 = function (e, n, r, i, s, o, a, l, u, c, d, f, h, m) {
    $t(e) && (e = e(l)),
      gn(e) &&
        e.substr(0, 3) === "max" &&
        (e = f + (e.charAt(4) === "=" ? Ku("0" + e.substr(3), r) : 0));
    var g = h ? h.time() : 0,
      _,
      v,
      p;
    if ((h && h.seek(0), isNaN(e) || (e = +e), Gu(e)))
      h &&
        (e = $.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          f,
          e
        )),
        a && Xu(a, r, i, !0);
    else {
      $t(n) && (n = n(l));
      var y = (e || "0").split(" "),
        x,
        w,
        T,
        C;
      (p = Kt(n, l) || Se),
        (x = Dr(p) || {}),
        (!x || (!x.left && !x.top)) &&
          Dn(p).display === "none" &&
          ((C = p.style.display),
          (p.style.display = "block"),
          (x = Dr(p)),
          C ? (p.style.display = C) : p.style.removeProperty("display")),
        (w = Ku(y[0], x[i.d])),
        (T = Ku(y[1] || "0", r)),
        (e = x[i.p] - u[i.p] - c + w + s - T),
        a && Xu(a, T, i, r - T < 20 || (a._isStart && T > 20)),
        (r -= r - T);
    }
    if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), o)) {
      var E = e + r,
        b = o._isStart;
      (_ = "scroll" + i.d2),
        Xu(
          o,
          E,
          i,
          (b && E > 20) ||
            (!b && (d ? Math.max(Se[_], nr[_]) : o.parentNode[_]) <= E + 1)
        ),
        d &&
          ((u = Dr(a)),
          d && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + yt));
    }
    return (
      h &&
        p &&
        ((_ = Dr(p)),
        h.seek(f),
        (v = Dr(p)),
        (h._caScrollDist = _[i.p] - v[i.p]),
        (e = (e / h._caScrollDist) * f)),
      h && h.seek(g),
      h ? e : Math.round(e)
    );
  },
  X3 = /(webkit|moz|length|cssText|inset)/i,
  z1 = function (e, n, r, i) {
    if (e.parentNode !== n) {
      var s = e.style,
        o,
        a;
      if (n === Se) {
        (e._stOrig = s.cssText), (a = Dn(e));
        for (o in a)
          !+o &&
            !X3.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = r), (s.left = i);
      } else s.cssText = e._stOrig;
      ($.core.getCache(e).uncache = 1), n.appendChild(e);
    }
  },
  TS = function (e, n, r) {
    var i = n,
      s = i;
    return function (o) {
      var a = Math.round(e());
      return (
        a !== i &&
          a !== s &&
          Math.abs(a - i) > 3 &&
          Math.abs(a - s) > 3 &&
          ((o = a), r && r()),
        (s = i),
        (i = o),
        o
      );
    };
  },
  Pu = function (e, n, r) {
    var i = {};
    (i[n.p] = "+=" + r), $.set(e, i);
  },
  B1 = function (e, n) {
    var r = ji(e, n),
      i = "_scroll" + n.p2,
      s = function o(a, l, u, c, d) {
        var f = o.tween,
          h = l.onComplete,
          m = {};
        u = u || r();
        var g = TS(r, u, function () {
          f.kill(), (o.tween = 0);
        });
        return (
          (d = (c && d) || 0),
          (c = c || a - u),
          f && f.kill(),
          (l[i] = a),
          (l.modifiers = m),
          (m[i] = function () {
            return g(u + c * f.ratio + d * f.ratio * f.ratio);
          }),
          (l.onUpdate = function () {
            ne.cache++, $r();
          }),
          (l.onComplete = function () {
            (o.tween = 0), h && h.call(f);
          }),
          (f = o.tween = $.to(e, l)),
          f
        );
      };
    return (
      (e[i] = r),
      (r.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      lt(e, "wheel", r.wheelHandler),
      ee.isTouch && lt(e, "touchmove", r.wheelHandler),
      s
    );
  },
  ee = (function () {
    function t(n, r) {
      eo ||
        t.register($) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        vp(this),
        this.init(n, r);
    }
    var e = t.prototype;
    return (
      (e.init = function (r, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Oa)
        ) {
          this.update = this.refresh = this.kill = mr;
          return;
        }
        r = N1(gn(r) || Gu(r) || r.nodeType ? { trigger: r } : r, wu);
        var s = r,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          u = s.onToggle,
          c = s.onRefresh,
          d = s.scrub,
          f = s.trigger,
          h = s.pin,
          m = s.pinSpacing,
          g = s.invalidateOnRefresh,
          _ = s.anticipatePin,
          v = s.onScrubComplete,
          p = s.onSnapComplete,
          y = s.once,
          x = s.snap,
          w = s.pinReparent,
          T = s.pinSpacer,
          C = s.containerAnimation,
          E = s.fastScrollEnd,
          b = s.preventOverlaps,
          O =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? Bt
              : rt,
          D = !d && d !== 0,
          A = Kt(r.scroller || se),
          H = $.core.getCache(A),
          F = Ns(A),
          I =
            ("pinType" in r
              ? r.pinType
              : Oi(A, "pinType") || (F && "fixed")) === "fixed",
          W = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          j = D && r.toggleActions.split(" "),
          L = "markers" in r ? r.markers : wu.markers,
          N = F ? 0 : parseFloat(Dn(A)["border" + O.p2 + Ko]) || 0,
          P = this,
          V =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(P);
            },
          q = I3(A, F, O),
          et = z3(A, F),
          le = 0,
          Pe = 0,
          he = 0,
          me = ji(A, O),
          ht,
          We,
          an,
          Ne,
          ln,
          ie,
          Ye,
          Yt,
          un,
          R,
          cn,
          Er,
          Wi,
          Ge,
          Yi,
          Gi,
          ra,
          pt,
          Be,
          Wn,
          Yn,
          Ki,
          br,
          lr,
          Gt,
          Xi,
          Hs,
          Ws,
          Qi,
          Zr,
          ei,
          ue,
          qi,
          Gn,
          Kn,
          Xn,
          Ji,
          Ys,
          Or;
        if (
          ((P._startClamp = P._endClamp = !1),
          (P._dir = O),
          (_ *= 45),
          (P.scroller = A),
          (P.scroll = C ? C.time.bind(C) : me),
          (Ne = me()),
          (P.vars = r),
          (i = i || r.animation),
          "refreshPriority" in r &&
            ((cS = 1), r.refreshPriority === -9999 && (Ja = P)),
          (H.tweenScroll = H.tweenScroll || {
            top: B1(A, rt),
            left: B1(A, Bt),
          }),
          (P.tweenTo = ht = H.tweenScroll[O.p]),
          (P.scrubDuration = function (B) {
            (qi = Gu(B) && B),
              qi
                ? ue
                  ? ue.duration(B)
                  : (ue = $.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      duration: qi,
                      paused: !0,
                      onComplete: function () {
                        return v && v(P);
                      },
                    }))
                : (ue && ue.progress(1).kill(), (ue = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            (i._initted && !P.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (P.animation = i.pause()),
            (i.scrollTrigger = P),
            P.scrubDuration(d),
            (Zr = 0),
            l || (l = i.vars.id)),
          x &&
            ((!as(x) || x.push) && (x = { snapTo: x }),
            "scrollBehavior" in Se.style &&
              $.set(F ? [Se, nr] : A, { scrollBehavior: "auto" }),
            ne.forEach(function (B) {
              return (
                $t(B) &&
                B.target === (F ? be.scrollingElement || nr : A) &&
                (B.smooth = !1)
              );
            }),
            (an = $t(x.snapTo)
              ? x.snapTo
              : x.snapTo === "labels"
              ? $3(i)
              : x.snapTo === "labelsDirectional"
              ? U3(i)
              : x.directional !== !1
              ? function (B, ae) {
                  return xg(x.snapTo)(B, zt() - Pe < 500 ? 0 : ae.direction);
                }
              : $.utils.snap(x.snapTo)),
            (Gn = x.duration || { min: 0.1, max: 2 }),
            (Gn = as(Gn) ? xo(Gn.min, Gn.max) : xo(Gn, Gn)),
            (Kn = $.delayedCall(x.delay || qi / 2 || 0.1, function () {
              var B = me(),
                ae = zt() - Pe < 500,
                K = ht.tween;
              if (
                (ae || Math.abs(P.getVelocity()) < 10) &&
                !K &&
                !Pf &&
                le !== B
              ) {
                var te = (B - ie) / Ge,
                  ot = i && !D ? i.totalProgress() : te,
                  ce = ae ? 0 : ((ot - ei) / (zt() - Yu)) * 1e3 || 0,
                  $e = $.utils.clamp(-te, 1 - te, (Qs(ce / 2) * ce) / 0.185),
                  At = te + (x.inertia === !1 ? 0 : $e),
                  mt = xo(0, 1, an(At, P)),
                  Te = Math.round(ie + mt * Ge),
                  ge = x,
                  Qn = ge.onStart,
                  Ee = ge.onInterrupt,
                  fn = ge.onComplete;
                if (B <= Ye && B >= ie && Te !== B) {
                  if (K && !K._initted && K.data <= Qs(Te - B)) return;
                  x.inertia === !1 && ($e = mt - te),
                    ht(
                      Te,
                      {
                        duration: Gn(
                          Qs(
                            (Math.max(Qs(At - ot), Qs(mt - ot)) * 0.185) /
                              ce /
                              0.05 || 0
                          )
                        ),
                        ease: x.ease || "power3",
                        data: Qs(Te - B),
                        onInterrupt: function () {
                          return Kn.restart(!0) && Ee && Ee(P);
                        },
                        onComplete: function () {
                          P.update(),
                            (le = me()),
                            (Zr = ei =
                              i && !D ? i.totalProgress() : P.progress),
                            p && p(P),
                            fn && fn(P);
                        },
                      },
                      B,
                      $e * Ge,
                      Te - B - $e * Ge
                    ),
                    Qn && Qn(P, ht.tween);
                }
              } else P.isActive && le !== B && Kn.restart(!0);
            }).pause())),
          l && (_p[l] = P),
          (f = P.trigger = Kt(f || (h !== !0 && h))),
          (Or = f && f._gsap && f._gsap.stRevert),
          Or && (Or = Or(P)),
          (h = h === !0 ? f : Kt(h)),
          gn(a) && (a = { targets: f, className: a }),
          h &&
            (m === !1 ||
              m === An ||
              (m =
                !m &&
                h.parentNode &&
                h.parentNode.style &&
                Dn(h.parentNode).display === "flex"
                  ? !1
                  : Xe),
            (P.pin = h),
            (We = $.core.getCache(h)),
            We.spacer
              ? (Yi = We.pinState)
              : (T &&
                  ((T = Kt(T)),
                  T && !T.nodeType && (T = T.current || T.nativeElement),
                  (We.spacerIsNative = !!T),
                  T && (We.spacerState = Cu(T))),
                (We.spacer = pt = T || be.createElement("div")),
                pt.classList.add("pin-spacer"),
                l && pt.classList.add("pin-spacer-" + l),
                (We.pinState = Yi = Cu(h))),
            r.force3D !== !1 && $.set(h, { force3D: !0 }),
            (P.spacer = pt = We.spacer),
            (Qi = Dn(h)),
            (lr = Qi[m + O.os2]),
            (Wn = $.getProperty(h)),
            (Yn = $.quickSetter(h, O.a, yt)),
            Sd(h, pt, Qi),
            (ra = Cu(h))),
          L)
        ) {
          (Er = as(L) ? N1(L, j1) : j1),
            (R = Su("scroller-start", l, A, O, Er, 0)),
            (cn = Su("scroller-end", l, A, O, Er, 0, R)),
            (Be = R["offset" + O.op.d2]);
          var Q = Kt(Oi(A, "content") || A);
          (Yt = this.markerStart = Su("start", l, Q, O, Er, Be, 0, C)),
            (un = this.markerEnd = Su("end", l, Q, O, Er, Be, 0, C)),
            C && (Ys = $.quickSetter([Yt, un], O.a, yt)),
            !I &&
              !(Pr.length && Oi(A, "fixedMarkers") === !0) &&
              (B3(F ? Se : A),
              $.set([R, cn], { force3D: !0 }),
              (Xi = $.quickSetter(R, O.a, yt)),
              (Ws = $.quickSetter(cn, O.a, yt)));
        }
        if (C) {
          var Y = C.vars.onUpdate,
            de = C.vars.onUpdateParams;
          C.eventCallback("onUpdate", function () {
            P.update(0, 0, 1), Y && Y.apply(C, de || []);
          });
        }
        if (
          ((P.previous = function () {
            return Z[Z.indexOf(P) - 1];
          }),
          (P.next = function () {
            return Z[Z.indexOf(P) + 1];
          }),
          (P.revert = function (B, ae) {
            if (!ae) return P.kill(!0);
            var K = B !== !1 || !P.enabled,
              te = Et;
            K !== P.isReverted &&
              (K &&
                ((Xn = Math.max(me(), P.scroll.rec || 0)),
                (he = P.progress),
                (Ji = i && i.progress())),
              Yt &&
                [Yt, un, R, cn].forEach(function (ot) {
                  return (ot.style.display = K ? "none" : "block");
                }),
              K && ((Et = P), P.update(K)),
              h &&
                (!w || !P.isActive) &&
                (K ? Y3(h, pt, Yi) : Sd(h, pt, Dn(h), Gt)),
              K || P.update(K),
              (Et = te),
              (P.isReverted = K));
          }),
          (P.refresh = function (B, ae, K, te) {
            if (!((Et || !P.enabled) && !ae)) {
              if (h && B && zn) {
                lt(t, "scrollEnd", SS);
                return;
              }
              !It && V && V(P),
                (Et = P),
                ht.tween && !K && (ht.tween.kill(), (ht.tween = 0)),
                ue && ue.pause(),
                g && i && i.revert({ kill: !1 }).invalidate(),
                P.isReverted || P.revert(!0, !0),
                (P._subPinOffset = !1);
              var ot = q(),
                ce = et(),
                $e = C ? C.duration() : Fr(A, O),
                At = Ge <= 0.01,
                mt = 0,
                Te = te || 0,
                ge = as(K) ? K.end : r.end,
                Qn = r.endTrigger || f,
                Ee = as(K)
                  ? K.start
                  : r.start || (r.start === 0 || !f ? 0 : h ? "0 0" : "0 100%"),
                fn = (P.pinnedContainer =
                  r.pinnedContainer && Kt(r.pinnedContainer, P)),
                ur = (f && Math.max(0, Z.indexOf(P))) || 0,
                dn = ur,
                gt,
                Ct,
                Zi,
                Yl,
                Pt,
                tt,
                cr,
                Df,
                Hg,
                ia,
                fr,
                sa,
                Gl;
              for (
                L &&
                as(K) &&
                ((sa = $.getProperty(R, O.p)), (Gl = $.getProperty(cn, O.p)));
                dn--;

              )
                (tt = Z[dn]),
                  tt.end || tt.refresh(0, 1) || (Et = P),
                  (cr = tt.pin),
                  cr &&
                    (cr === f || cr === h || cr === fn) &&
                    !tt.isReverted &&
                    (ia || (ia = []), ia.unshift(tt), tt.revert(!0, !0)),
                  tt !== Z[dn] && (ur--, dn--);
              for (
                $t(Ee) && (Ee = Ee(P)),
                  Ee = L1(Ee, "start", P),
                  ie =
                    I1(
                      Ee,
                      f,
                      ot,
                      O,
                      me(),
                      Yt,
                      R,
                      P,
                      ce,
                      N,
                      I,
                      $e,
                      C,
                      P._startClamp && "_startClamp"
                    ) || (h ? -0.001 : 0),
                  $t(ge) && (ge = ge(P)),
                  gn(ge) &&
                    !ge.indexOf("+=") &&
                    (~ge.indexOf(" ")
                      ? (ge = (gn(Ee) ? Ee.split(" ")[0] : "") + ge)
                      : ((mt = Ku(ge.substr(2), ot)),
                        (ge = gn(Ee)
                          ? Ee
                          : (C
                              ? $.utils.mapRange(
                                  0,
                                  C.duration(),
                                  C.scrollTrigger.start,
                                  C.scrollTrigger.end,
                                  ie
                                )
                              : ie) + mt),
                        (Qn = f))),
                  ge = L1(ge, "end", P),
                  Ye =
                    Math.max(
                      ie,
                      I1(
                        ge || (Qn ? "100% 0" : $e),
                        Qn,
                        ot,
                        O,
                        me() + mt,
                        un,
                        cn,
                        P,
                        ce,
                        N,
                        I,
                        $e,
                        C,
                        P._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  mt = 0,
                  dn = ur;
                dn--;

              )
                (tt = Z[dn]),
                  (cr = tt.pin),
                  cr &&
                    tt.start - tt._pinPush <= ie &&
                    !C &&
                    tt.end > 0 &&
                    ((gt =
                      tt.end -
                      (P._startClamp ? Math.max(0, tt.start) : tt.start)),
                    ((cr === f && tt.start - tt._pinPush < ie) || cr === fn) &&
                      isNaN(Ee) &&
                      (mt += gt * (1 - tt.progress)),
                    cr === h && (Te += gt));
              if (
                ((ie += mt),
                (Ye += mt),
                P._startClamp && (P._startClamp += mt),
                P._endClamp &&
                  !It &&
                  ((P._endClamp = Ye || -0.001), (Ye = Math.min(Ye, Fr(A, O)))),
                (Ge = Ye - ie || ((ie -= 0.01) && 0.001)),
                At && (he = $.utils.clamp(0, 1, $.utils.normalize(ie, Ye, Xn))),
                (P._pinPush = Te),
                Yt &&
                  mt &&
                  ((gt = {}),
                  (gt[O.a] = "+=" + mt),
                  fn && (gt[O.p] = "-=" + me()),
                  $.set([Yt, un], gt)),
                h)
              )
                (gt = Dn(h)),
                  (Yl = O === rt),
                  (Zi = me()),
                  (Ki = parseFloat(Wn(O.a)) + Te),
                  !$e &&
                    Ye > 1 &&
                    ((fr = (F ? be.scrollingElement || nr : A).style),
                    (fr = {
                      style: fr,
                      value: fr["overflow" + O.a.toUpperCase()],
                    }),
                    F &&
                      Dn(Se)["overflow" + O.a.toUpperCase()] !== "scroll" &&
                      (fr.style["overflow" + O.a.toUpperCase()] = "scroll")),
                  Sd(h, pt, gt),
                  (ra = Cu(h)),
                  (Ct = Dr(h, !0)),
                  (Df = I && ji(A, Yl ? Bt : rt)()),
                  m &&
                    ((Gt = [m + O.os2, Ge + Te + yt]),
                    (Gt.t = pt),
                    (dn = m === Xe ? xp(h, O) + Ge + Te : 0),
                    dn && Gt.push(O.d, dn + yt),
                    No(Gt),
                    fn &&
                      Z.forEach(function (oa) {
                        oa.pin === fn &&
                          oa.vars.pinSpacing !== !1 &&
                          (oa._subPinOffset = !0);
                      }),
                    I && me(Xn)),
                  I &&
                    ((Pt = {
                      top: Ct.top + (Yl ? Zi - ie : Df) + yt,
                      left: Ct.left + (Yl ? Df : Zi - ie) + yt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Pt[Ps] = Pt["max" + Ko] = Math.ceil(Ct.width) + yt),
                    (Pt[ks] = Pt["max" + vg] = Math.ceil(Ct.height) + yt),
                    (Pt[An] =
                      Pt[An + Qa] =
                      Pt[An + Ka] =
                      Pt[An + qa] =
                      Pt[An + Xa] =
                        "0"),
                    (Pt[Xe] = gt[Xe]),
                    (Pt[Xe + Qa] = gt[Xe + Qa]),
                    (Pt[Xe + Ka] = gt[Xe + Ka]),
                    (Pt[Xe + qa] = gt[Xe + qa]),
                    (Pt[Xe + Xa] = gt[Xe + Xa]),
                    (Gi = K3(Yi, Pt, w)),
                    It && me(0)),
                  i
                    ? ((Hg = i._initted),
                      yd(1),
                      i.render(i.duration(), !0, !0),
                      (br = Wn(O.a) - Ki + Ge + Te),
                      (Hs = Math.abs(Ge - br) > 1),
                      I && Hs && Gi.splice(Gi.length - 2, 2),
                      i.render(0, !0, !0),
                      Hg || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      yd(0))
                    : (br = Ge),
                  fr &&
                    (fr.value
                      ? (fr.style["overflow" + O.a.toUpperCase()] = fr.value)
                      : fr.style.removeProperty("overflow-" + O.a));
              else if (f && me() && !C)
                for (Ct = f.parentNode; Ct && Ct !== Se; )
                  Ct._pinOffset &&
                    ((ie -= Ct._pinOffset), (Ye -= Ct._pinOffset)),
                    (Ct = Ct.parentNode);
              ia &&
                ia.forEach(function (oa) {
                  return oa.revert(!1, !0);
                }),
                (P.start = ie),
                (P.end = Ye),
                (Ne = ln = It ? Xn : me()),
                !C && !It && (Ne < Xn && me(Xn), (P.scroll.rec = 0)),
                P.revert(!1, !0),
                (Pe = zt()),
                Kn && ((le = -1), Kn.restart(!0)),
                (Et = 0),
                i &&
                  D &&
                  (i._initted || Ji) &&
                  i.progress() !== Ji &&
                  i.progress(Ji || 0, !0).render(i.time(), !0, !0),
                (At || he !== P.progress || C) &&
                  (i &&
                    !D &&
                    i.totalProgress(
                      C && ie < -0.001 && !he
                        ? $.utils.normalize(ie, Ye, 0)
                        : he,
                      !0
                    ),
                  (P.progress = At || (Ne - ie) / Ge === he ? 0 : he)),
                h && m && (pt._pinOffset = Math.round(P.progress * br)),
                ue && ue.invalidate(),
                isNaN(sa) ||
                  ((sa -= $.getProperty(R, O.p)),
                  (Gl -= $.getProperty(cn, O.p)),
                  Pu(R, O, sa),
                  Pu(Yt, O, sa - (te || 0)),
                  Pu(cn, O, Gl),
                  Pu(un, O, Gl - (te || 0))),
                At && !It && P.update(),
                c && !It && !Wi && ((Wi = !0), c(P), (Wi = !1));
            }
          }),
          (P.getVelocity = function () {
            return ((me() - ln) / (zt() - Yu)) * 1e3 || 0;
          }),
          (P.endAnimation = function () {
            ya(P.callbackAnimation),
              i &&
                (ue
                  ? ue.progress(1)
                  : i.paused()
                  ? D || ya(i, P.direction < 0, 1)
                  : ya(i, i.reversed()));
          }),
          (P.labelToScroll = function (B) {
            return (
              (i &&
                i.labels &&
                (ie || P.refresh() || ie) +
                  (i.labels[B] / i.duration()) * Ge) ||
              0
            );
          }),
          (P.getTrailing = function (B) {
            var ae = Z.indexOf(P),
              K = P.direction > 0 ? Z.slice(0, ae).reverse() : Z.slice(ae + 1);
            return (
              gn(B)
                ? K.filter(function (te) {
                    return te.vars.preventOverlaps === B;
                  })
                : K
            ).filter(function (te) {
              return P.direction > 0 ? te.end <= ie : te.start >= Ye;
            });
          }),
          (P.update = function (B, ae, K) {
            if (!(C && !K && !B)) {
              var te = It === !0 ? Xn : P.scroll(),
                ot = B ? 0 : (te - ie) / Ge,
                ce = ot < 0 ? 0 : ot > 1 ? 1 : ot || 0,
                $e = P.progress,
                At,
                mt,
                Te,
                ge,
                Qn,
                Ee,
                fn,
                ur;
              if (
                (ae &&
                  ((ln = Ne),
                  (Ne = C ? me() : te),
                  x && ((ei = Zr), (Zr = i && !D ? i.totalProgress() : ce))),
                _ &&
                  !ce &&
                  h &&
                  !Et &&
                  !yu &&
                  zn &&
                  ie < te + ((te - ln) / (zt() - Yu)) * _ &&
                  (ce = 1e-4),
                ce !== $e && P.enabled)
              ) {
                if (
                  ((At = P.isActive = !!ce && ce < 1),
                  (mt = !!$e && $e < 1),
                  (Ee = At !== mt),
                  (Qn = Ee || !!ce != !!$e),
                  (P.direction = ce > $e ? 1 : -1),
                  (P.progress = ce),
                  Qn &&
                    !Et &&
                    ((Te = ce && !$e ? 0 : ce === 1 ? 1 : $e === 1 ? 2 : 3),
                    D &&
                      ((ge =
                        (!Ee && j[Te + 1] !== "none" && j[Te + 1]) || j[Te]),
                      (ur =
                        i &&
                        (ge === "complete" || ge === "reset" || ge in i)))),
                  b &&
                    (Ee || ur) &&
                    (ur || d || !i) &&
                    ($t(b)
                      ? b(P)
                      : P.getTrailing(b).forEach(function (Zi) {
                          return Zi.endAnimation();
                        })),
                  D ||
                    (ue && !Et && !yu
                      ? (ue._dp._time - ue._start !== ue._time &&
                          ue.render(ue._dp._time - ue._start),
                        ue.resetTo
                          ? ue.resetTo("totalProgress", ce, i._tTime / i._tDur)
                          : ((ue.vars.totalProgress = ce),
                            ue.invalidate().restart()))
                      : i && i.totalProgress(ce, !!(Et && (Pe || B)))),
                  h)
                ) {
                  if ((B && m && (pt.style[m + O.os2] = lr), !I))
                    Yn(Ra(Ki + br * ce));
                  else if (Qn) {
                    if (
                      ((fn =
                        !B && ce > $e && Ye + 1 > te && te + 1 >= Fr(A, O)),
                      w)
                    )
                      if (!B && (At || fn)) {
                        var dn = Dr(h, !0),
                          gt = te - ie;
                        z1(
                          h,
                          Se,
                          dn.top + (O === rt ? gt : 0) + yt,
                          dn.left + (O === rt ? 0 : gt) + yt
                        );
                      } else z1(h, pt);
                    No(At || fn ? Gi : ra),
                      (Hs && ce < 1 && At) ||
                        Yn(Ki + (ce === 1 && !fn ? br : 0));
                  }
                }
                x && !ht.tween && !Et && !yu && Kn.restart(!0),
                  a &&
                    (Ee || (y && ce && (ce < 1 || !vd))) &&
                    Bc(a.targets).forEach(function (Zi) {
                      return Zi.classList[At || y ? "add" : "remove"](
                        a.className
                      );
                    }),
                  o && !D && !B && o(P),
                  Qn && !Et
                    ? (D &&
                        (ur &&
                          (ge === "complete"
                            ? i.pause().totalProgress(1)
                            : ge === "reset"
                            ? i.restart(!0).pause()
                            : ge === "restart"
                            ? i.restart(!0)
                            : i[ge]()),
                        o && o(P)),
                      (Ee || !vd) &&
                        (u && Ee && _d(P, u),
                        W[Te] && _d(P, W[Te]),
                        y && (ce === 1 ? P.kill(!1, 1) : (W[Te] = 0)),
                        Ee || ((Te = ce === 1 ? 1 : 3), W[Te] && _d(P, W[Te]))),
                      E &&
                        !At &&
                        Math.abs(P.getVelocity()) > (Gu(E) ? E : 2500) &&
                        (ya(P.callbackAnimation),
                        ue
                          ? ue.progress(1)
                          : ya(i, ge === "reverse" ? 1 : !ce, 1)))
                    : D && o && !Et && o(P);
              }
              if (Ws) {
                var Ct = C ? (te / C.duration()) * (C._caScrollDist || 0) : te;
                Xi(Ct + (R._isFlipped ? 1 : 0)), Ws(Ct);
              }
              Ys && Ys((-te / C.duration()) * (C._caScrollDist || 0));
            }
          }),
          (P.enable = function (B, ae) {
            P.enabled ||
              ((P.enabled = !0),
              lt(A, "resize", La),
              F || lt(A, "scroll", qs),
              V && lt(t, "refreshInit", V),
              B !== !1 && ((P.progress = he = 0), (Ne = ln = le = me())),
              ae !== !1 && P.refresh());
          }),
          (P.getTween = function (B) {
            return B && ht ? ht.tween : ue;
          }),
          (P.setPositions = function (B, ae, K, te) {
            if (C) {
              var ot = C.scrollTrigger,
                ce = C.duration(),
                $e = ot.end - ot.start;
              (B = ot.start + ($e * B) / ce), (ae = ot.start + ($e * ae) / ce);
            }
            P.refresh(
              !1,
              !1,
              {
                start: M1(B, K && !!P._startClamp),
                end: M1(ae, K && !!P._endClamp),
              },
              te
            ),
              P.update();
          }),
          (P.adjustPinSpacing = function (B) {
            if (Gt && B) {
              var ae = Gt.indexOf(O.d) + 1;
              (Gt[ae] = parseFloat(Gt[ae]) + B + yt),
                (Gt[1] = parseFloat(Gt[1]) + B + yt),
                No(Gt);
            }
          }),
          (P.disable = function (B, ae) {
            if (
              P.enabled &&
              (B !== !1 && P.revert(!0, !0),
              (P.enabled = P.isActive = !1),
              ae || (ue && ue.pause()),
              (Xn = 0),
              We && (We.uncache = 1),
              V && at(t, "refreshInit", V),
              Kn && (Kn.pause(), ht.tween && ht.tween.kill() && (ht.tween = 0)),
              !F)
            ) {
              for (var K = Z.length; K--; )
                if (Z[K].scroller === A && Z[K] !== P) return;
              at(A, "resize", La), F || at(A, "scroll", qs);
            }
          }),
          (P.kill = function (B, ae) {
            P.disable(B, ae), ue && !ae && ue.kill(), l && delete _p[l];
            var K = Z.indexOf(P);
            K >= 0 && Z.splice(K, 1),
              K === Ft && Qu > 0 && Ft--,
              (K = 0),
              Z.forEach(function (te) {
                return te.scroller === P.scroller && (K = 1);
              }),
              K || It || (P.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                B && i.revert({ kill: !1 }),
                ae || i.kill()),
              Yt &&
                [Yt, un, R, cn].forEach(function (te) {
                  return te.parentNode && te.parentNode.removeChild(te);
                }),
              Ja === P && (Ja = 0),
              h &&
                (We && (We.uncache = 1),
                (K = 0),
                Z.forEach(function (te) {
                  return te.pin === h && K++;
                }),
                K || (We.spacer = 0)),
              r.onKill && r.onKill(P);
          }),
          Z.push(P),
          P.enable(!1, !1),
          Or && Or(P),
          i && i.add && !Ge)
        ) {
          var je = P.update;
          (P.update = function () {
            (P.update = je), ie || Ye || P.refresh();
          }),
            $.delayedCall(0.01, P.update),
            (Ge = 0.01),
            (ie = Ye = 0);
        } else P.refresh();
        h && W3();
      }),
      (t.register = function (r) {
        return (
          eo ||
            (($ = r || gS()), mS() && window.document && t.enable(), (eo = Oa)),
          eo
        );
      }),
      (t.defaults = function (r) {
        if (r) for (var i in r) wu[i] = r[i];
        return wu;
      }),
      (t.disable = function (r, i) {
        (Oa = 0),
          Z.forEach(function (o) {
            return o[i ? "kill" : "disable"](r);
          }),
          at(se, "wheel", qs),
          at(be, "scroll", qs),
          clearInterval(gu),
          at(be, "touchcancel", mr),
          at(Se, "touchstart", mr),
          xu(at, be, "pointerdown,touchstart,mousedown", A1),
          xu(at, be, "pointerup,touchend,mouseup", D1),
          zc.kill(),
          vu(at);
        for (var s = 0; s < ne.length; s += 3)
          _u(at, ne[s], ne[s + 1]), _u(at, ne[s], ne[s + 2]);
      }),
      (t.enable = function () {
        if (
          ((se = window),
          (be = document),
          (nr = be.documentElement),
          (Se = be.body),
          $ &&
            ((Bc = $.utils.toArray),
            (xo = $.utils.clamp),
            (vp = $.core.context || mr),
            (yd = $.core.suppressOverwrites || mr),
            (pg = se.history.scrollRestoration || "auto"),
            (wp = se.pageYOffset),
            $.core.globals("ScrollTrigger", t),
            Se))
        ) {
          (Oa = 1),
            (Do = document.createElement("div")),
            (Do.style.height = "100vh"),
            (Do.style.position = "absolute"),
            kS(),
            F3(),
            Ze.register($),
            (t.isTouch = Ze.isTouch),
            (ni =
              Ze.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            lt(se, "wheel", qs),
            (uS = [se, be, nr, Se]),
            $.matchMedia
              ? ((t.matchMedia = function (l) {
                  var u = $.matchMedia(),
                    c;
                  for (c in l) u.add(c, l[c]);
                  return u;
                }),
                $.addEventListener("matchMediaInit", function () {
                  return _g();
                }),
                $.addEventListener("matchMediaRevert", function () {
                  return CS();
                }),
                $.addEventListener("matchMedia", function () {
                  gs(0, 1), Vs("matchMedia");
                }),
                $.matchMedia("(orientation: portrait)", function () {
                  return wd(), wd;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            wd(),
            lt(be, "scroll", qs);
          var r = Se.style,
            i = r.borderTopStyle,
            s = $.core.Animation.prototype,
            o,
            a;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              o = Dr(Se),
              rt.m = Math.round(o.top + rt.sc()) || 0,
              Bt.m = Math.round(o.left + Bt.sc()) || 0,
              i ? (r.borderTopStyle = i) : r.removeProperty("border-top-style"),
              gu = setInterval(V1, 250),
              $.delayedCall(0.5, function () {
                return (yu = 0);
              }),
              lt(be, "touchcancel", mr),
              lt(Se, "touchstart", mr),
              xu(lt, be, "pointerdown,touchstart,mousedown", A1),
              xu(lt, be, "pointerup,touchend,mouseup", D1),
              yp = $.utils.checkPrefix("transform"),
              qu.push(yp),
              eo = zt(),
              zc = $.delayedCall(0.2, gs).pause(),
              to = [
                be,
                "visibilitychange",
                function () {
                  var l = se.innerWidth,
                    u = se.innerHeight;
                  be.hidden
                    ? ((O1 = l), (R1 = u))
                    : (O1 !== l || R1 !== u) && La();
                },
                be,
                "DOMContentLoaded",
                gs,
                se,
                "load",
                gs,
                se,
                "resize",
                La,
              ],
              vu(lt),
              Z.forEach(function (l) {
                return l.enable(0, 1);
              }),
              a = 0;
            a < ne.length;
            a += 3
          )
            _u(at, ne[a], ne[a + 1]), _u(at, ne[a], ne[a + 2]);
        }
      }),
      (t.config = function (r) {
        "limitCallbacks" in r && (vd = !!r.limitCallbacks);
        var i = r.syncInterval;
        (i && clearInterval(gu)) || ((gu = i) && setInterval(V1, i)),
          "ignoreMobileResize" in r &&
            (dS = t.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (vu(at) || vu(lt, r.autoRefreshEvents || "none"),
            (fS = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (t.scrollerProxy = function (r, i) {
        var s = Kt(r),
          o = ne.indexOf(s),
          a = Ns(s);
        ~o && ne.splice(o, a ? 6 : 2),
          i && (a ? Pr.unshift(se, i, Se, i, nr, i) : Pr.unshift(s, i));
      }),
      (t.clearMatchMedia = function (r) {
        Z.forEach(function (i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
        });
      }),
      (t.isInViewport = function (r, i, s) {
        var o = (gn(r) ? Kt(r) : r).getBoundingClientRect(),
          a = o[s ? Ps : ks] * i || 0;
        return s
          ? o.right - a > 0 && o.left + a < se.innerWidth
          : o.bottom - a > 0 && o.top + a < se.innerHeight;
      }),
      (t.positionInViewport = function (r, i, s) {
        gn(r) && (r = Kt(r));
        var o = r.getBoundingClientRect(),
          a = o[s ? Ps : ks],
          l =
            i == null
              ? a / 2
              : i in $c
              ? $c[i] * a
              : ~i.indexOf("%")
              ? (parseFloat(i) * a) / 100
              : parseFloat(i) || 0;
        return s ? (o.left + l) / se.innerWidth : (o.top + l) / se.innerHeight;
      }),
      (t.killAll = function (r) {
        if (
          (Z.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          r !== !0)
        ) {
          var i = js.killAll || [];
          (js = {}),
            i.forEach(function (s) {
              return s();
            });
        }
      }),
      t
    );
  })();
ee.version = "3.12.2";
ee.saveStyles = function (t) {
  return t
    ? Bc(t).forEach(function (e) {
        if (e && e.style) {
          var n = pn.indexOf(e);
          n >= 0 && pn.splice(n, 5),
            pn.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              $.core.getCache(e),
              vp()
            );
        }
      })
    : pn;
};
ee.revert = function (t, e) {
  return _g(!t, e);
};
ee.create = function (t, e) {
  return new ee(t, e);
};
ee.refresh = function (t) {
  return t ? La() : (eo || ee.register()) && gs(!0);
};
ee.update = function (t) {
  return ++ne.cache && $r(t === !0 ? 2 : 0);
};
ee.clearScrollMemory = PS;
ee.maxScroll = function (t, e) {
  return Fr(t, e ? Bt : rt);
};
ee.getScrollFunc = function (t, e) {
  return ji(Kt(t), e ? Bt : rt);
};
ee.getById = function (t) {
  return _p[t];
};
ee.getAll = function () {
  return Z.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
ee.isScrolling = function () {
  return !!zn;
};
ee.snapDirectional = xg;
ee.addEventListener = function (t, e) {
  var n = js[t] || (js[t] = []);
  ~n.indexOf(e) || n.push(e);
};
ee.removeEventListener = function (t, e) {
  var n = js[t],
    r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1);
};
ee.batch = function (t, e) {
  var n = [],
    r = {},
    i = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (u, c) {
      var d = [],
        f = [],
        h = $.delayedCall(i, function () {
          c(d, f), (d = []), (f = []);
        }).pause();
      return function (m) {
        d.length || h.restart(!0),
          d.push(m.trigger),
          f.push(m),
          s <= d.length && h.progress(1);
      };
    },
    a;
  for (a in e)
    r[a] =
      a.substr(0, 2) === "on" && $t(e[a]) && a !== "onRefreshInit"
        ? o(a, e[a])
        : e[a];
  return (
    $t(s) &&
      ((s = s()),
      lt(ee, "refresh", function () {
        return (s = e.batchMax());
      })),
    Bc(t).forEach(function (l) {
      var u = {};
      for (a in r) u[a] = r[a];
      (u.trigger = l), n.push(ee.create(u));
    }),
    n
  );
};
var $1 = function (e, n, r, i) {
    return (
      n > i ? e(i) : n < 0 && e(0),
      r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
    );
  },
  Cd = function t(e, n) {
    n === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          n === !0
            ? "auto"
            : n
            ? "pan-" + n + (Ze.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === nr && t(Se, n);
  },
  ku = { auto: 1, scroll: 1 },
  Q3 = function (e) {
    var n = e.event,
      r = e.target,
      i = e.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      o = s._gsap || $.core.getCache(s),
      a = zt(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== Se &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(ku[(l = Dn(s)).overflowY] || ku[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== r &&
        !Ns(s) &&
        (ku[(l = Dn(s)).overflowY] || ku[l.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  ES = function (e, n, r, i) {
    return Ze.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (i = i && Q3),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return r && lt(be, Ze.eventTypes[0], H1, !1, !0);
      },
      onDisable: function () {
        return at(be, Ze.eventTypes[0], H1, !0);
      },
    });
  },
  q3 = /(input|label|select|textarea)/i,
  U1,
  H1 = function (e) {
    var n = q3.test(e.target.tagName);
    (n || U1) && ((e._gsapAllow = !0), (U1 = n));
  },
  J3 = function (e) {
    as(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n = e,
      r = n.normalizeScrollX,
      i = n.momentum,
      s = n.allowNestedScroll,
      o = n.onRelease,
      a,
      l,
      u = Kt(e.target) || nr,
      c = $.core.globals().ScrollSmoother,
      d = c && c.get(),
      f =
        ni &&
        ((e.content && Kt(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      h = ji(u, rt),
      m = ji(u, Bt),
      g = 1,
      _ =
        (Ze.isTouch && se.visualViewport
          ? se.visualViewport.scale * se.visualViewport.width
          : se.outerWidth) / se.innerWidth,
      v = 0,
      p = $t(i)
        ? function () {
            return i(a);
          }
        : function () {
            return i || 2.8;
          },
      y,
      x,
      w = ES(u, e.type, !0, s),
      T = function () {
        return (x = !1);
      },
      C = mr,
      E = mr,
      b = function () {
        (l = Fr(u, rt)),
          (E = xo(ni ? 1 : 0, l)),
          r && (C = xo(0, Fr(u, Bt))),
          (y = Ts);
      },
      O = function () {
        (f._gsap.y = Ra(parseFloat(f._gsap.y) + h.offset) + "px"),
          (f.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(f._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      },
      D = function () {
        if (x) {
          requestAnimationFrame(T);
          var L = Ra(a.deltaY / 2),
            N = E(h.v - L);
          if (f && N !== h.v + h.offset) {
            h.offset = N - h.v;
            var P = Ra((parseFloat(f && f._gsap.y) || 0) - h.offset);
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              P +
              ", 0, 1)"),
              (f._gsap.y = P + "px"),
              (h.cacheID = ne.cache),
              $r();
          }
          return !0;
        }
        h.offset && O(), (x = !0);
      },
      A,
      H,
      F,
      I,
      W = function () {
        b(),
          A.isActive() &&
            A.vars.scrollY > l &&
            (h() > l ? A.progress(1) && h(l) : A.resetTo("scrollY", l));
      };
    return (
      f && $.set(f, { y: "+=0" }),
      (e.ignoreCheck = function (j) {
        return (
          (ni && j.type === "touchmove" && D()) ||
          (g > 1.05 && j.type !== "touchstart") ||
          a.isGesturing ||
          (j.touches && j.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        x = !1;
        var j = g;
        (g = Ra(((se.visualViewport && se.visualViewport.scale) || 1) / _)),
          A.pause(),
          j !== g && Cd(u, g > 1.01 ? !0 : r ? !1 : "x"),
          (H = m()),
          (F = h()),
          b(),
          (y = Ts);
      }),
      (e.onRelease = e.onGestureStart =
        function (j, L) {
          if ((h.offset && O(), !L)) I.restart(!0);
          else {
            ne.cache++;
            var N = p(),
              P,
              V;
            r &&
              ((P = m()),
              (V = P + (N * 0.05 * -j.velocityX) / 0.227),
              (N *= $1(m, P, V, Fr(u, Bt))),
              (A.vars.scrollX = C(V))),
              (P = h()),
              (V = P + (N * 0.05 * -j.velocityY) / 0.227),
              (N *= $1(h, P, V, Fr(u, rt))),
              (A.vars.scrollY = E(V)),
              A.invalidate().duration(N).play(0.01),
              ((ni && A.vars.scrollY >= l) || P >= l - 1) &&
                $.to({}, { onUpdate: W, duration: N });
          }
          o && o(j);
        }),
      (e.onWheel = function () {
        A._ts && A.pause(), zt() - v > 1e3 && ((y = 0), (v = zt()));
      }),
      (e.onChange = function (j, L, N, P, V) {
        if (
          (Ts !== y && b(),
          L && r && m(C(P[2] === L ? H + (j.startX - j.x) : m() + L - P[1])),
          N)
        ) {
          h.offset && O();
          var q = V[2] === N,
            et = q ? F + j.startY - j.y : h() + N - V[1],
            le = E(et);
          q && et !== le && (F += le - et), h(le);
        }
        (N || L) && $r();
      }),
      (e.onEnable = function () {
        Cd(u, r ? !1 : "x"),
          ee.addEventListener("refresh", W),
          lt(se, "resize", W),
          h.smooth &&
            ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = m.smooth = !1)),
          w.enable();
      }),
      (e.onDisable = function () {
        Cd(u, !0),
          at(se, "resize", W),
          ee.removeEventListener("refresh", W),
          w.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Ze(e)),
      (a.iOS = ni),
      ni && !h() && h(1),
      ni && $.ticker.add(mr),
      (I = a._dc),
      (A = $.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: TS(h, h(), function () {
            return A.pause();
          }),
        },
        onUpdate: $r,
        onComplete: I.vars.onComplete,
      })),
      a
    );
  };
ee.sort = function (t) {
  return Z.sort(
    t ||
      function (e, n) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (n.start + (n.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
ee.observe = function (t) {
  return new Ze(t);
};
ee.normalizeScroll = function (t) {
  if (typeof t > "u") return hn;
  if (t === !0 && hn) return hn.enable();
  if (t === !1) return hn && hn.kill();
  var e = t instanceof Ze ? t : J3(t);
  return hn && hn.target === e.target && hn.kill(), Ns(e.target) && (hn = e), e;
};
ee.core = {
  _getVelocityProp: gp,
  _inputObserver: ES,
  _scrollers: ne,
  _proxies: Pr,
  bridge: {
    ss: function () {
      zn || Vs("scrollStart"), (zn = zt());
    },
    ref: function () {
      return Et;
    },
  },
};
gS() && $.registerPlugin(ee);
const Z3 = () => {
    const [t, e] = Hn("global"),
      n = k.useRef([]);
    return (
      J.registerPlugin(ee),
      k.useLayoutEffect(() => {
        n.current.forEach((r, i) => {
          const s = i * -15 + 80;
          J.from(r, {
            y: 200,
            opacity: 0,
            ease: "back.out(1)",
            scrollTrigger: {
              trigger: r,
              start: "top bottom",
              end: "top " + s + "%",
              scrub: !0,
            },
          }),
            r.addEventListener("mouseenter", () => {
              J.to(r, {
                scale: 1.15,
                zIndex: 1,
                ease: "back.out(3)",
                duration: 0.2,
              });
            }),
            r.addEventListener("mouseleave", () => {
              J.to(r, {
                scale: 1,
                zIndex: 0,
                ease: "back.out(3)",
                duration: 0.2,
              });
            });
        });
      }, []),
      S.jsx("div", {
        className: "container",
        children: S.jsxs("section", {
          className: "shortcuts",
          children: [
            S.jsxs("a", {
              target: "_blank",
              href: "https://youtube.com/lacvartes",
              className: "shortcut shortcut-youtube",
              ref: (r) => {
                n.current[0] = r;
              },
              children: [
                S.jsx("h2", {
                  className: "shortcut-title",
                  children: t("home.shortcuts.youtube.title"),
                }),
                S.jsx("p", {
                  className: "shortcut-text",
                  children: t("home.shortcuts.youtube.text"),
                }),
              ],
            }),
            S.jsxs("a", {
              target: "_blank",
              href: "https://discord.gg/",
              className: "shortcut shortcut-discord",
              ref: (r) => {
                n.current[1] = r;
              },
              children: [
                S.jsx("h2", {
                  className: "shortcut-title",
                  children: t("home.shortcuts.discord.title"),
                }),
                S.jsx("p", {
                  className: "shortcut-text",
                  children: t("home.shortcuts.discord.text"),
                }),
              ],
            }),
/*AQUI ABRE CUADRITOS
             S.jsxs("p", {
               target: "_blank",
               href: "https://lacv.com",
               className: "shortcut shortcut-motivacion",
               ref: (r) => {
               n.current[2] = r;
             },
               children: [
                S.jsx("h1", {
               className: "shortcut-title",
               children: t("home.shortcuts.motivacion.title"),
             }),
              S.jsx("p", {
               className: "shortcut-text",
               children: t("home.shortcuts.motivacion.text"),
             }),
           ],
        }),



        S.jsxs("a", {
          target: "_blank",
          href: "https://lacv.com",
          className: "shortcut shortcut-moti",
          ref: (r) => {
          n.current[3] = r;
        },
          children: [
           S.jsx("h2", {
          className: "shortcut-title",
          children: t("home.shortcuts.moti.title"),
        }),
         S.jsx("p", {
          className: "shortcut-text",
          children: t("home.shortcuts.moti.text"),
        }),
      ],
   }),



//AQUI CIERRA CUADRITOS */

            S.jsxs(or, {
              to: "/donaciones",
              className: "shortcut shortcut-donations",
              ref: (r) => {
                n.current[2] = r;
              },
              children: [
                S.jsx("h2", {
                  className: "shortcut-title",
                  children: t("home.shortcuts.donations.title"),
                }),
                S.jsx("p", {
                  className: "shortcut-text",
                  children: t("home.shortcuts.donations.text"),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  bS = k.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  kf = k.createContext({}),
  Tf = k.createContext(null),
  Ef = typeof document < "u",
  wg = Ef ? k.useLayoutEffect : k.useEffect,
  OS = k.createContext({ strict: !1 });
function eO(t, e, n, r) {
  const { visualElement: i } = k.useContext(kf),
    s = k.useContext(OS),
    o = k.useContext(Tf),
    a = k.useContext(bS).reducedMotion,
    l = k.useRef();
  (r = r || s.renderer),
    !l.current &&
      r &&
      (l.current = r(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  k.useInsertionEffect(() => {
    u && u.update(n, o);
  });
  const c = k.useRef(!!window.HandoffAppearAnimations);
  return (
    wg(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    k.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function _o(t) {
  return (
    typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function tO(t, e, n) {
  return k.useCallback(
    (r) => {
      r && t.mount && t.mount(r),
        e && (r ? e.mount(r) : e.unmount()),
        n && (typeof n == "function" ? n(r) : _o(n) && (n.current = r));
    },
    [e]
  );
}
function Ol(t) {
  return typeof t == "string" || Array.isArray(t);
}
function bf(t) {
  return typeof t == "object" && typeof t.start == "function";
}
const Sg = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Cg = ["initial", ...Sg];
function Of(t) {
  return bf(t.animate) || Cg.some((e) => Ol(t[e]));
}
function RS(t) {
  return !!(Of(t) || t.variants);
}
function nO(t, e) {
  if (Of(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || Ol(n) ? n : void 0,
      animate: Ol(r) ? r : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function rO(t) {
  const { initial: e, animate: n } = nO(t, k.useContext(kf));
  return k.useMemo(() => ({ initial: e, animate: n }), [W1(e), W1(n)]);
}
function W1(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Y1 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Rl = {};
for (const t in Y1) Rl[t] = { isEnabled: (e) => Y1[t].some((n) => !!e[n]) };
function iO(t) {
  for (const e in t) Rl[e] = { ...Rl[e], ...t[e] };
}
const Pg = k.createContext({}),
  LS = k.createContext({}),
  sO = Symbol.for("motionComponentSymbol");
function oO({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  t && iO(t);
  function s(a, l) {
    let u;
    const c = { ...k.useContext(bS), ...a, layoutId: aO(a) },
      { isStatic: d } = c,
      f = rO(a),
      h = r(a, d);
    if (!d && Ef) {
      f.visualElement = eO(i, h, c, e);
      const m = k.useContext(LS),
        g = k.useContext(OS).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, g, t, m));
    }
    return k.createElement(
      kf.Provider,
      { value: f },
      u && f.visualElement
        ? k.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(i, a, tO(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const o = k.forwardRef(s);
  return (o[sO] = i), o;
}
function aO({ layoutId: t }) {
  const e = k.useContext(Pg).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function lO(t) {
  function e(r, i = {}) {
    return oO(t(r, i));
  }
  if (typeof Proxy > "u") return e;
  const n = new Map();
  return new Proxy(e, {
    get: (r, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
  });
}
const uO = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function kg(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(uO.indexOf(t) > -1 || /[A-Z]/.test(t));
}
const Uc = {};
function cO(t) {
  Object.assign(Uc, t);
}
const $l = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  $s = new Set($l);
function MS(t, { layout: e, layoutId: n }) {
  return (
    $s.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!Uc[t] || t === "opacity"))
  );
}
const on = (t) => !!(t && t.getVelocity),
  fO = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  dO = $l.length;
function hO(
  t,
  { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let s = "";
  for (let o = 0; o < dO; o++) {
    const a = $l[o];
    if (t[a] !== void 0) {
      const l = fO[a] || a;
      s += `${l}(${t[a]}) `;
    }
  }
  return (
    e && !t.z && (s += "translateZ(0)"),
    (s = s.trim()),
    i ? (s = i(t, r ? "" : s)) : n && r && (s = "none"),
    s
  );
}
const AS = (t) => (e) => typeof e == "string" && e.startsWith(t),
  DS = AS("--"),
  Cp = AS("var(--"),
  pO =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  mO = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  Vi = (t, e, n) => Math.min(Math.max(n, t), e),
  Us = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Za = { ...Us, transform: (t) => Vi(0, 1, t) },
  Tu = { ...Us, default: 1 },
  el = (t) => Math.round(t * 1e5) / 1e5,
  Rf = /(-)?([\d]*\.?[\d])+/g,
  NS =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  gO =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ul(t) {
  return typeof t == "string";
}
const Hl = (t) => ({
    test: (e) => Ul(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  ri = Hl("deg"),
  kr = Hl("%"),
  G = Hl("px"),
  yO = Hl("vh"),
  vO = Hl("vw"),
  G1 = {
    ...kr,
    parse: (t) => kr.parse(t) / 100,
    transform: (t) => kr.transform(t * 100),
  },
  K1 = { ...Us, transform: Math.round },
  jS = {
    borderWidth: G,
    borderTopWidth: G,
    borderRightWidth: G,
    borderBottomWidth: G,
    borderLeftWidth: G,
    borderRadius: G,
    radius: G,
    borderTopLeftRadius: G,
    borderTopRightRadius: G,
    borderBottomRightRadius: G,
    borderBottomLeftRadius: G,
    width: G,
    maxWidth: G,
    height: G,
    maxHeight: G,
    size: G,
    top: G,
    right: G,
    bottom: G,
    left: G,
    padding: G,
    paddingTop: G,
    paddingRight: G,
    paddingBottom: G,
    paddingLeft: G,
    margin: G,
    marginTop: G,
    marginRight: G,
    marginBottom: G,
    marginLeft: G,
    rotate: ri,
    rotateX: ri,
    rotateY: ri,
    rotateZ: ri,
    scale: Tu,
    scaleX: Tu,
    scaleY: Tu,
    scaleZ: Tu,
    skew: ri,
    skewX: ri,
    skewY: ri,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: Za,
    originX: G1,
    originY: G1,
    originZ: G,
    zIndex: K1,
    fillOpacity: Za,
    strokeOpacity: Za,
    numOctaves: K1,
  };
function Tg(t, e, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: a } = t;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in e) {
    const f = e[d];
    if (DS(d)) {
      s[d] = f;
      continue;
    }
    const h = jS[d],
      m = mO(f, h);
    if ($s.has(d)) {
      if (((l = !0), (o[d] = m), !c)) continue;
      f !== (h.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = m)) : (i[d] = m);
  }
  if (
    (e.transform ||
      (l || r
        ? (i.transform = hO(t.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = a;
    i.transformOrigin = `${d} ${f} ${h}`;
  }
}
const Eg = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function VS(t, e, n) {
  for (const r in e) !on(e[r]) && !MS(r, n) && (t[r] = e[r]);
}
function xO({ transformTemplate: t }, e, n) {
  return k.useMemo(() => {
    const r = Eg();
    return (
      Tg(r, e, { enableHardwareAcceleration: !n }, t),
      Object.assign({}, r.vars, r.style)
    );
  }, [e]);
}
function _O(t, e, n) {
  const r = t.style || {},
    i = {};
  return (
    VS(i, r, t),
    Object.assign(i, xO(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
  );
}
function wO(t, e, n) {
  const r = {},
    i = _O(t, e, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const SO = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Hc(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    SO.has(t)
  );
}
let FS = (t) => !Hc(t);
function CO(t) {
  t && (FS = (e) => (e.startsWith("on") ? !Hc(e) : t(e)));
}
try {
  CO(require("@emotion/is-prop-valid").default);
} catch {}
function PO(t, e, n) {
  const r = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      ((FS(i) ||
        (n === !0 && Hc(i)) ||
        (!e && !Hc(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (r[i] = t[i]));
  return r;
}
function X1(t, e, n) {
  return typeof t == "string" ? t : G.transform(e + n * t);
}
function kO(t, e, n) {
  const r = X1(e, t.x, t.width),
    i = X1(n, t.y, t.height);
  return `${r} ${i}`;
}
const TO = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  EO = { offset: "strokeDashoffset", array: "strokeDasharray" };
function bO(t, e, n = 1, r = 0, i = !0) {
  t.pathLength = 1;
  const s = i ? TO : EO;
  t[s.offset] = G.transform(-r);
  const o = G.transform(e),
    a = G.transform(n);
  t[s.array] = `${o} ${a}`;
}
function bg(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((Tg(t, u, c, f), d)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: h, style: m, dimensions: g } = t;
  h.transform && (g && (m.transform = h.transform), delete h.transform),
    g &&
      (i !== void 0 || s !== void 0 || m.transform) &&
      (m.transformOrigin = kO(
        g,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    e !== void 0 && (h.x = e),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && bO(h, o, a, l, !1);
}
const IS = () => ({ ...Eg(), attrs: {} }),
  Og = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function OO(t, e, n, r) {
  const i = k.useMemo(() => {
    const s = IS();
    return (
      bg(s, e, { enableHardwareAcceleration: !1 }, Og(r), t.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [e]);
  if (t.style) {
    const s = {};
    VS(s, t.style, t), (i.style = { ...s, ...i.style });
  }
  return i;
}
function RO(t = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (kg(n) ? OO : wO)(r, s, o, n),
      c = { ...PO(r, typeof n == "string", t), ...l, ref: i },
      { children: d } = r,
      f = k.useMemo(() => (on(d) ? d.get() : d), [d]);
    return k.createElement(n, { ...c, children: f });
  };
}
const Rg = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function zS(t, { style: e, vars: n }, r, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(r));
  for (const s in n) t.style.setProperty(s, n[s]);
}
const BS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function $S(t, e, n, r) {
  zS(t, e, void 0, r);
  for (const i in e.attrs) t.setAttribute(BS.has(i) ? i : Rg(i), e.attrs[i]);
}
function Lg(t, e) {
  const { style: n } = t,
    r = {};
  for (const i in n)
    (on(n[i]) || (e.style && on(e.style[i])) || MS(i, t)) && (r[i] = n[i]);
  return r;
}
function US(t, e) {
  const n = Lg(t, e);
  for (const r in t)
    if (on(t[r]) || on(e[r])) {
      const i =
        $l.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = t[r];
    }
  return n;
}
function Mg(t, e, n, r = {}, i = {}) {
  return (
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)),
    e
  );
}
function HS(t) {
  const e = k.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const Wc = (t) => Array.isArray(t),
  LO = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  MO = (t) => (Wc(t) ? t[t.length - 1] || 0 : t);
function Zu(t) {
  const e = on(t) ? t.get() : t;
  return LO(e) ? e.toValue() : e;
}
function AO(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: DO(r, i, s, t), renderState: e() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const WS = (t) => (e, n) => {
  const r = k.useContext(kf),
    i = k.useContext(Tf),
    s = () => AO(t, e, r, i);
  return n ? s() : HS(s);
};
function DO(t, e, n, r) {
  const i = {},
    s = r(t, {});
  for (const f in s) i[f] = Zu(s[f]);
  let { initial: o, animate: a } = t;
  const l = Of(t),
    u = RS(t);
  e &&
    u &&
    !l &&
    t.inherit !== !1 &&
    (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  return (
    d &&
      typeof d != "boolean" &&
      !bf(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const m = Mg(t, h);
        if (!m) return;
        const { transitionEnd: g, transition: _, ...v } = m;
        for (const p in v) {
          let y = v[p];
          if (Array.isArray(y)) {
            const x = c ? y.length - 1 : 0;
            y = y[x];
          }
          y !== null && (i[p] = y);
        }
        for (const p in g) i[p] = g[p];
      }),
    i
  );
}
const Ie = (t) => t;
class Q1 {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(e) {
    if (!this.scheduled.has(e))
      return this.scheduled.add(e), this.order.push(e), !0;
  }
  remove(e) {
    const n = this.order.indexOf(e);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function NO(t) {
  let e = new Q1(),
    n = new Q1(),
    r = 0,
    i = !1,
    s = !1;
  const o = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          f = d ? e : n;
        return u && o.add(l), f.add(l) && d && i && (r = e.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), o.delete(l);
      },
      process: (l) => {
        if (i) {
          s = !0;
          return;
        }
        if (((i = !0), ([e, n] = [n, e]), n.clear(), (r = e.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = e.order[u];
            c(l), o.has(c) && (a.schedule(c), t());
          }
        (i = !1), s && ((s = !1), a.process(l));
      },
    };
  return a;
}
const Eu = ["prepare", "read", "update", "preRender", "render", "postRender"],
  jO = 40;
function VO(t, e) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = Eu.reduce((d, f) => ((d[f] = NO(() => (n = !0))), d), {}),
    o = (d) => s[d].process(i),
    a = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, jO), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        Eu.forEach(o),
        (i.isProcessing = !1),
        n && e && ((r = !1), t(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || t(a);
    };
  return {
    schedule: Eu.reduce((d, f) => {
      const h = s[f];
      return (d[f] = (m, g = !1, _ = !1) => (n || l(), h.schedule(m, g, _))), d;
    }, {}),
    cancel: (d) => Eu.forEach((f) => s[f].cancel(d)),
    state: i,
    steps: s,
  };
}
const {
    schedule: _e,
    cancel: qr,
    state: ut,
    steps: Pd,
  } = VO(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0),
  FO = {
    useVisualState: WS({
      scrapeMotionValuesFromProps: US,
      createRenderState: IS,
      onMount: (t, e, { renderState: n, latestValues: r }) => {
        _e.read(() => {
          try {
            n.dimensions =
              typeof e.getBBox == "function"
                ? e.getBBox()
                : e.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          _e.render(() => {
            bg(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Og(e.tagName),
              t.transformTemplate
            ),
              $S(e, n);
          });
      },
    }),
  },
  IO = {
    useVisualState: WS({
      scrapeMotionValuesFromProps: Lg,
      createRenderState: Eg,
    }),
  };
function zO(t, { forwardMotionProps: e = !1 }, n, r) {
  return {
    ...(kg(t) ? FO : IO),
    preloadedFeatures: n,
    useRender: RO(e),
    createVisualElement: r,
    Component: t,
  };
}
function Ir(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
const YS = (t) =>
  t.pointerType === "mouse"
    ? typeof t.button != "number" || t.button <= 0
    : t.isPrimary !== !1;
function Lf(t, e = "page") {
  return { point: { x: t[e + "X"], y: t[e + "Y"] } };
}
const BO = (t) => (e) => YS(e) && t(e, Lf(e));
function Ur(t, e, n, r) {
  return Ir(t, e, BO(n), r);
}
const $O = (t, e) => (n) => e(t(n)),
  Ri = (...t) => t.reduce($O);
function GS(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? ((e = t), n) : !1;
  };
}
const q1 = GS("dragHorizontal"),
  J1 = GS("dragVertical");
function KS(t) {
  let e = !1;
  if (t === "y") e = J1();
  else if (t === "x") e = q1();
  else {
    const n = q1(),
      r = J1();
    n && r
      ? (e = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return e;
}
function XS() {
  const t = KS(!0);
  return t ? (t(), !1) : !0;
}
class Hi {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
function Z1(t, e) {
  const n = "pointer" + (e ? "enter" : "leave"),
    r = "onHover" + (e ? "Start" : "End"),
    i = (s, o) => {
      if (s.type === "touch" || XS()) return;
      const a = t.getProps();
      t.animationState &&
        a.whileHover &&
        t.animationState.setActive("whileHover", e),
        a[r] && _e.update(() => a[r](s, o));
    };
  return Ur(t.current, n, i, { passive: !t.getProps()[r] });
}
class UO extends Hi {
  mount() {
    this.unmount = Ri(Z1(this.node, !0), Z1(this.node, !1));
  }
  unmount() {}
}
class HO extends Hi {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ri(
      Ir(this.node.current, "focus", () => this.onFocus()),
      Ir(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const QS = (t, e) => (e ? (t === e ? !0 : QS(t, e.parentElement)) : !1);
function kd(t, e) {
  if (!e) return;
  const n = new PointerEvent("pointer" + t);
  e(n, Lf(n));
}
class WO extends Hi {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ie),
      (this.removeEndListeners = Ie),
      (this.removeAccessibleListeners = Ie),
      (this.startPointerPress = (e, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          s = Ur(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              _e.update(() => {
                QS(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = Ur(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Ri(s, o)), this.startPress(e, n);
      }),
      (this.startAccessiblePress = () => {
        const e = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                kd("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && _e.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Ir(this.node.current, "keyup", o)),
              kd("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Ir(this.node.current, "keydown", e),
          r = () => {
            this.isPressing && kd("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = Ir(this.node.current, "blur", r);
        this.removeAccessibleListeners = Ri(n, i);
      });
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && _e.update(() => r(e, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !XS()
    );
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && _e.update(() => r(e, n));
  }
  mount() {
    const e = this.node.getProps(),
      n = Ur(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(e.onTapStart || e.onPointerStart),
      }),
      r = Ir(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Ri(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Pp = new WeakMap(),
  Td = new WeakMap(),
  YO = (t) => {
    const e = Pp.get(t.target);
    e && e(t);
  },
  GO = (t) => {
    t.forEach(YO);
  };
function KO({ root: t, ...e }) {
  const n = t || document;
  Td.has(n) || Td.set(n, {});
  const r = Td.get(n),
    i = JSON.stringify(e);
  return r[i] || (r[i] = new IntersectionObserver(GO, { root: t, ...e })), r[i];
}
function XO(t, e, n) {
  const r = KO(e);
  return (
    Pp.set(t, n),
    r.observe(t),
    () => {
      Pp.delete(t), r.unobserve(t);
    }
  );
}
const QO = { some: 0, all: 1 };
class qO extends Hi {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = e,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : QO[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return XO(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(JO(e, n)) && this.startObserver();
  }
  unmount() {}
}
function JO({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const ZO = {
  inView: { Feature: qO },
  tap: { Feature: WO },
  focus: { Feature: HO },
  hover: { Feature: UO },
};
function qS(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function e5(t) {
  const e = {};
  return t.values.forEach((n, r) => (e[r] = n.get())), e;
}
function t5(t) {
  const e = {};
  return t.values.forEach((n, r) => (e[r] = n.getVelocity())), e;
}
function Mf(t, e, n) {
  const r = t.getProps();
  return Mg(r, e, n !== void 0 ? n : r.custom, e5(t), t5(t));
}
const n5 = "framerAppearId",
  r5 = "data-" + Rg(n5);
let i5 = Ie,
  Ag = Ie;
const Li = (t) => t * 1e3,
  Hr = (t) => t / 1e3,
  s5 = { current: !1 },
  JS = (t) => Array.isArray(t) && typeof t[0] == "number";
function ZS(t) {
  return !!(
    !t ||
    (typeof t == "string" && e2[t]) ||
    JS(t) ||
    (Array.isArray(t) && t.every(ZS))
  );
}
const Ma = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
  e2 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ma([0, 0.65, 0.55, 1]),
    circOut: Ma([0.55, 0, 1, 0.45]),
    backIn: Ma([0.31, 0.01, 0.66, -0.59]),
    backOut: Ma([0.33, 1.53, 0.69, 0.99]),
  };
function t2(t) {
  if (t) return JS(t) ? Ma(t) : Array.isArray(t) ? t.map(t2) : e2[t];
}
function o5(
  t,
  e,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = t2(a);
  return (
    Array.isArray(c) && (u.easing = c),
    t.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function a5(t, { repeat: e, repeatType: n = "loop" }) {
  const r = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[r];
}
const n2 = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  l5 = 1e-7,
  u5 = 12;
function c5(t, e, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = e + (n - e) / 2), (s = n2(o, r, i) - t), s > 0 ? (n = o) : (e = o);
  while (Math.abs(s) > l5 && ++a < u5);
  return o;
}
function Wl(t, e, n, r) {
  if (t === e && n === r) return Ie;
  const i = (s) => c5(s, 0, 1, t, n);
  return (s) => (s === 0 || s === 1 ? s : n2(i(s), e, r));
}
const f5 = Wl(0.42, 0, 1, 1),
  d5 = Wl(0, 0, 0.58, 1),
  r2 = Wl(0.42, 0, 0.58, 1),
  h5 = (t) => Array.isArray(t) && typeof t[0] != "number",
  i2 = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  s2 = (t) => (e) => 1 - t(1 - e),
  o2 = (t) => 1 - Math.sin(Math.acos(t)),
  Dg = s2(o2),
  p5 = i2(Dg),
  a2 = Wl(0.33, 1.53, 0.69, 0.99),
  Ng = s2(a2),
  m5 = i2(Ng),
  g5 = (t) =>
    (t *= 2) < 1 ? 0.5 * Ng(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  y5 = {
    linear: Ie,
    easeIn: f5,
    easeInOut: r2,
    easeOut: d5,
    circIn: o2,
    circInOut: p5,
    circOut: Dg,
    backIn: Ng,
    backInOut: m5,
    backOut: a2,
    anticipate: g5,
  },
  ey = (t) => {
    if (Array.isArray(t)) {
      Ag(t.length === 4);
      const [e, n, r, i] = t;
      return Wl(e, n, r, i);
    } else if (typeof t == "string") return y5[t];
    return t;
  },
  jg = (t, e) => (n) =>
    !!(
      (Ul(n) && gO.test(n) && n.startsWith(t)) ||
      (e && Object.prototype.hasOwnProperty.call(n, e))
    ),
  l2 = (t, e, n) => (r) => {
    if (!Ul(r)) return r;
    const [i, s, o, a] = r.match(Rf);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  v5 = (t) => Vi(0, 255, t),
  Ed = { ...Us, transform: (t) => Math.round(v5(t)) },
  ys = {
    test: jg("rgb", "red"),
    parse: l2("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ed.transform(t) +
      ", " +
      Ed.transform(e) +
      ", " +
      Ed.transform(n) +
      ", " +
      el(Za.transform(r)) +
      ")",
  };
function x5(t) {
  let e = "",
    n = "",
    r = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (r = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (r = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const kp = { test: jg("#"), parse: x5, transform: ys.transform },
  wo = {
    test: jg("hsl", "hue"),
    parse: l2("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      kr.transform(el(e)) +
      ", " +
      kr.transform(el(n)) +
      ", " +
      el(Za.transform(r)) +
      ")",
  },
  jt = {
    test: (t) => ys.test(t) || kp.test(t) || wo.test(t),
    parse: (t) =>
      ys.test(t) ? ys.parse(t) : wo.test(t) ? wo.parse(t) : kp.parse(t),
    transform: (t) =>
      Ul(t) ? t : t.hasOwnProperty("red") ? ys.transform(t) : wo.transform(t),
  },
  Me = (t, e, n) => -n * t + n * e + t;
function bd(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
      ? e
      : n < 2 / 3
      ? t + (e - t) * (2 / 3 - n) * 6
      : t
  );
}
function _5({ hue: t, saturation: e, lightness: n, alpha: r }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!e) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    (i = bd(l, a, t + 1 / 3)), (s = bd(l, a, t)), (o = bd(l, a, t - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const Od = (t, e, n) => {
    const r = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - r) + r));
  },
  w5 = [kp, ys, wo],
  S5 = (t) => w5.find((e) => e.test(t));
function ty(t) {
  const e = S5(t);
  let n = e.parse(t);
  return e === wo && (n = _5(n)), n;
}
const u2 = (t, e) => {
  const n = ty(t),
    r = ty(e),
    i = { ...n };
  return (s) => (
    (i.red = Od(n.red, r.red, s)),
    (i.green = Od(n.green, r.green, s)),
    (i.blue = Od(n.blue, r.blue, s)),
    (i.alpha = Me(n.alpha, r.alpha, s)),
    ys.transform(i)
  );
};
function C5(t) {
  var e, n;
  return (
    isNaN(t) &&
    Ul(t) &&
    (((e = t.match(Rf)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(NS)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const c2 = { regex: pO, countKey: "Vars", token: "${v}", parse: Ie },
  f2 = { regex: NS, countKey: "Colors", token: "${c}", parse: jt.parse },
  d2 = { regex: Rf, countKey: "Numbers", token: "${n}", parse: Us.parse };
function Rd(t, { regex: e, countKey: n, token: r, parse: i }) {
  const s = t.tokenised.match(e);
  s &&
    ((t["num" + n] = s.length),
    (t.tokenised = t.tokenised.replace(e, r)),
    t.values.push(...s.map(i)));
}
function Yc(t) {
  const e = t.toString(),
    n = {
      value: e,
      tokenised: e,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Rd(n, c2), Rd(n, f2), Rd(n, d2), n;
}
function h2(t) {
  return Yc(t).values;
}
function p2(t) {
  const { values: e, numColors: n, numVars: r, tokenised: i } = Yc(t),
    s = e.length;
  return (o) => {
    let a = i;
    for (let l = 0; l < s; l++)
      l < r
        ? (a = a.replace(c2.token, o[l]))
        : l < r + n
        ? (a = a.replace(f2.token, jt.transform(o[l])))
        : (a = a.replace(d2.token, el(o[l])));
    return a;
  };
}
const P5 = (t) => (typeof t == "number" ? 0 : t);
function k5(t) {
  const e = h2(t);
  return p2(t)(e.map(P5));
}
const Fi = {
    test: C5,
    parse: h2,
    createTransformer: p2,
    getAnimatableNone: k5,
  },
  m2 = (t, e) => (n) => `${n > 0 ? e : t}`;
function g2(t, e) {
  return typeof t == "number"
    ? (n) => Me(t, e, n)
    : jt.test(t)
    ? u2(t, e)
    : t.startsWith("var(")
    ? m2(t, e)
    : v2(t, e);
}
const y2 = (t, e) => {
    const n = [...t],
      r = n.length,
      i = t.map((s, o) => g2(s, e[o]));
    return (s) => {
      for (let o = 0; o < r; o++) n[o] = i[o](s);
      return n;
    };
  },
  T5 = (t, e) => {
    const n = { ...t, ...e },
      r = {};
    for (const i in n)
      t[i] !== void 0 && e[i] !== void 0 && (r[i] = g2(t[i], e[i]));
    return (i) => {
      for (const s in r) n[s] = r[s](i);
      return n;
    };
  },
  v2 = (t, e) => {
    const n = Fi.createTransformer(e),
      r = Yc(t),
      i = Yc(e);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Ri(y2(r.values, i.values), n)
      : m2(t, e);
  },
  Ll = (t, e, n) => {
    const r = e - t;
    return r === 0 ? 1 : (n - t) / r;
  },
  ny = (t, e) => (n) => Me(t, e, n);
function E5(t) {
  return typeof t == "number"
    ? ny
    : typeof t == "string"
    ? jt.test(t)
      ? u2
      : v2
    : Array.isArray(t)
    ? y2
    : typeof t == "object"
    ? T5
    : ny;
}
function b5(t, e, n) {
  const r = [],
    i = n || E5(t[0]),
    s = t.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || Ie : e;
      a = Ri(l, a);
    }
    r.push(a);
  }
  return r;
}
function x2(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = t.length;
  if ((Ag(s === e.length), s === 1)) return () => e[0];
  t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const o = b5(e, r, i),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < t.length - 2 && !(u < t[c + 1]); c++);
      const d = Ll(t[c], t[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => l(Vi(t[0], t[s - 1], u)) : l;
}
function O5(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    const i = Ll(0, e, r);
    t.push(Me(n, 1, i));
  }
}
function R5(t) {
  const e = [0];
  return O5(e, t.length - 1), e;
}
function L5(t, e) {
  return t.map((n) => n * e);
}
function M5(t, e) {
  return t.map(() => e || r2).splice(0, t.length - 1);
}
function Gc({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = h5(r) ? r.map(ey) : ey(r),
    s = { done: !1, value: e[0] },
    o = L5(n && n.length === e.length ? n : R5(e), t),
    a = x2(o, e, { ease: Array.isArray(i) ? i : M5(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((s.value = a(l)), (s.done = l >= t), s),
  };
}
function _2(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const A5 = 5;
function w2(t, e, n) {
  const r = Math.max(e - A5, 0);
  return _2(n - t(r), e - r);
}
const Ld = 0.001,
  D5 = 0.01,
  ry = 10,
  N5 = 0.05,
  j5 = 1;
function V5({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, s;
  i5(t <= Li(ry));
  let o = 1 - e;
  (o = Vi(N5, j5, o)),
    (t = Vi(D5, ry, Hr(t))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * t,
            f = c - n,
            h = Tp(u, o),
            m = Math.exp(-d);
          return Ld - (f / h) * m;
        }),
        (s = (u) => {
          const d = u * o * t,
            f = d * n + n,
            h = Math.pow(o, 2) * Math.pow(u, 2) * t,
            m = Math.exp(-d),
            g = Tp(Math.pow(u, 2), o);
          return ((-i(u) + Ld > 0 ? -1 : 1) * ((f - h) * m)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * t),
            d = (u - n) * t + 1;
          return -Ld + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * t),
            d = (n - u) * (t * t);
          return c * d;
        }));
  const a = 5 / t,
    l = I5(i, s, a);
  if (((t = Li(t)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: t };
  }
}
const F5 = 12;
function I5(t, e, n) {
  let r = n;
  for (let i = 1; i < F5; i++) r = r - t(r) / e(r);
  return r;
}
function Tp(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const z5 = ["duration", "bounce"],
  B5 = ["stiffness", "damping", "mass"];
function iy(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function $5(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!iy(t, B5) && iy(t, z5)) {
    const n = V5(t);
    (e = { ...e, ...n, velocity: 0, mass: 1 }), (e.isResolvedFromDuration = !0);
  }
  return e;
}
function S2({ keyframes: t, restDelta: e, restSpeed: n, ...r }) {
  const i = t[0],
    s = t[t.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = $5(r),
    h = c ? -Hr(c) : 0,
    m = l / (2 * Math.sqrt(a * u)),
    g = s - i,
    _ = Hr(Math.sqrt(a / u)),
    v = Math.abs(g) < 5;
  n || (n = v ? 0.01 : 2), e || (e = v ? 0.005 : 0.5);
  let p;
  if (m < 1) {
    const y = Tp(_, m);
    p = (x) => {
      const w = Math.exp(-m * _ * x);
      return (
        s - w * (((h + m * _ * g) / y) * Math.sin(y * x) + g * Math.cos(y * x))
      );
    };
  } else if (m === 1) p = (y) => s - Math.exp(-_ * y) * (g + (h + _ * g) * y);
  else {
    const y = _ * Math.sqrt(m * m - 1);
    p = (x) => {
      const w = Math.exp(-m * _ * x),
        T = Math.min(y * x, 300);
      return (
        s - (w * ((h + m * _ * g) * Math.sinh(T) + y * g * Math.cosh(T))) / y
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (y) => {
      const x = p(y);
      if (f) o.done = y >= d;
      else {
        let w = h;
        y !== 0 && (m < 1 ? (w = w2(p, y, x)) : (w = 0));
        const T = Math.abs(w) <= n,
          C = Math.abs(s - x) <= e;
        o.done = T && C;
      }
      return (o.value = o.done ? s : x), o;
    },
  };
}
function sy({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = t[0],
    f = { done: !1, value: d },
    h = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    m = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l;
  let g = n * e;
  const _ = d + g,
    v = o === void 0 ? _ : o(_);
  v !== _ && (g = v - d);
  const p = (E) => -g * Math.exp(-E / r),
    y = (E) => v + p(E),
    x = (E) => {
      const b = p(E),
        O = y(E);
      (f.done = Math.abs(b) <= u), (f.value = f.done ? v : O);
    };
  let w, T;
  const C = (E) => {
    h(f.value) &&
      ((w = E),
      (T = S2({
        keyframes: [f.value, m(f.value)],
        velocity: w2(y, E, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let b = !1;
        return (
          !T && w === void 0 && ((b = !0), x(E), C(E)),
          w !== void 0 && E > w ? T.next(E - w) : (!b && x(E), f)
        );
      },
    }
  );
}
const U5 = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: () => _e.update(e, !0),
      stop: () => qr(e),
      now: () => (ut.isProcessing ? ut.timestamp : performance.now()),
    };
  },
  oy = 2e4;
function ay(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < oy; ) (e += n), (r = t.next(e));
  return e >= oy ? 1 / 0 : e;
}
const H5 = { decay: sy, inertia: sy, tween: Gc, keyframes: Gc, spring: S2 };
function Kc({
  autoplay: t = !0,
  delay: e = 0,
  driver: n = U5,
  keyframes: r,
  type: i = "keyframes",
  repeat: s = 0,
  repeatDelay: o = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    m = !1,
    g,
    _;
  const v = () => {
    _ = new Promise((V) => {
      g = V;
    });
  };
  v();
  let p;
  const y = H5[i] || Gc;
  let x;
  y !== Gc &&
    typeof r[0] != "number" &&
    ((x = x2([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const w = y({ ...f, keyframes: r });
  let T;
  a === "mirror" &&
    (T = y({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let C = "idle",
    E = null,
    b = null,
    O = null;
  w.calculatedDuration === null && s && (w.calculatedDuration = ay(w));
  const { calculatedDuration: D } = w;
  let A = 1 / 0,
    H = 1 / 0;
  D !== null && ((A = D + o), (H = A * (s + 1) - o));
  let F = 0;
  const I = (V) => {
      if (b === null) return;
      h > 0 && (b = Math.min(b, V)),
        h < 0 && (b = Math.min(V - H / h, b)),
        E !== null ? (F = E) : (F = Math.round(V - b) * h);
      const q = F - e * (h >= 0 ? 1 : -1),
        et = h >= 0 ? q < 0 : q > H;
      (F = Math.max(q, 0)), C === "finished" && E === null && (F = H);
      let le = F,
        Pe = w;
      if (s) {
        const We = F / A;
        let an = Math.floor(We),
          Ne = We % 1;
        !Ne && We >= 1 && (Ne = 1),
          Ne === 1 && an--,
          (an = Math.min(an, s + 1));
        const ln = !!(an % 2);
        ln &&
          (a === "reverse"
            ? ((Ne = 1 - Ne), o && (Ne -= o / A))
            : a === "mirror" && (Pe = T));
        let ie = Vi(0, 1, Ne);
        F > H && (ie = a === "reverse" && ln ? 1 : 0), (le = ie * A);
      }
      const he = et ? { done: !1, value: r[0] } : Pe.next(le);
      x && (he.value = x(he.value));
      let { done: me } = he;
      !et && D !== null && (me = h >= 0 ? F >= H : F <= 0);
      const ht = E === null && (C === "finished" || (C === "running" && me));
      return d && d(he.value), ht && L(), he;
    },
    W = () => {
      p && p.stop(), (p = void 0);
    },
    j = () => {
      (C = "idle"), W(), g(), v(), (b = O = null);
    },
    L = () => {
      (C = "finished"), c && c(), W(), g();
    },
    N = () => {
      if (m) return;
      p || (p = n(I));
      const V = p.now();
      l && l(),
        E !== null ? (b = V - E) : (!b || C === "finished") && (b = V),
        C === "finished" && v(),
        (O = b),
        (E = null),
        (C = "running"),
        p.start();
    };
  t && N();
  const P = {
    then(V, q) {
      return _.then(V, q);
    },
    get time() {
      return Hr(F);
    },
    set time(V) {
      (V = Li(V)),
        (F = V),
        E !== null || !p || h === 0 ? (E = V) : (b = p.now() - V / h);
    },
    get duration() {
      const V = w.calculatedDuration === null ? ay(w) : w.calculatedDuration;
      return Hr(V);
    },
    get speed() {
      return h;
    },
    set speed(V) {
      V === h || !p || ((h = V), (P.time = Hr(F)));
    },
    get state() {
      return C;
    },
    play: N,
    pause: () => {
      (C = "paused"), (E = F);
    },
    stop: () => {
      (m = !0), C !== "idle" && ((C = "idle"), u && u(), j());
    },
    cancel: () => {
      O !== null && I(O), j();
    },
    complete: () => {
      C = "finished";
    },
    sample: (V) => ((b = 0), I(V)),
  };
  return P;
}
function W5(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Y5 = W5(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  G5 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  bu = 10,
  K5 = 2e4,
  X5 = (t, e) => e.type === "spring" || t === "backgroundColor" || !ZS(e.ease);
function Q5(t, e, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      Y5() &&
      G5.has(e) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let o = !1,
    a,
    l;
  const u = () => {
    l = new Promise((p) => {
      a = p;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: h } = i;
  if (X5(e, i)) {
    const p = Kc({ ...i, repeat: 0, delay: 0 });
    let y = { done: !1, value: c[0] };
    const x = [];
    let w = 0;
    for (; !y.done && w < K5; ) (y = p.sample(w)), x.push(y.value), (w += bu);
    (h = void 0), (c = x), (d = w - bu), (f = "linear");
  }
  const m = o5(t.owner.current, e, c, { ...i, duration: d, ease: f, times: h });
  i.syncStart &&
    (m.startTime = ut.isProcessing
      ? ut.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const g = () => m.cancel(),
    _ = () => {
      _e.update(g), a(), u();
    };
  return (
    (m.onfinish = () => {
      t.set(a5(c, i)), r && r(), _();
    }),
    {
      then(p, y) {
        return l.then(p, y);
      },
      attachTimeline(p) {
        return (m.timeline = p), (m.onfinish = null), Ie;
      },
      get time() {
        return Hr(m.currentTime || 0);
      },
      set time(p) {
        m.currentTime = Li(p);
      },
      get speed() {
        return m.playbackRate;
      },
      set speed(p) {
        m.playbackRate = p;
      },
      get duration() {
        return Hr(d);
      },
      play: () => {
        o || (m.play(), qr(g));
      },
      pause: () => m.pause(),
      stop: () => {
        if (((o = !0), m.playState === "idle")) return;
        const { currentTime: p } = m;
        if (p) {
          const y = Kc({ ...i, autoplay: !1 });
          t.setWithVelocity(y.sample(p - bu).value, y.sample(p).value, bu);
        }
        _();
      },
      complete: () => m.finish(),
      cancel: _,
    }
  );
}
function q5({ keyframes: t, delay: e, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(t[t.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Ie,
      pause: Ie,
      stop: Ie,
      then: (s) => (s(), Promise.resolve()),
      cancel: Ie,
      complete: Ie,
    }
  );
  return e
    ? Kc({ keyframes: [0, 1], duration: 0, delay: e, onComplete: i })
    : i();
}
const J5 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Z5 = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  eR = { type: "keyframes", duration: 0.8 },
  tR = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  nR = (t, { keyframes: e }) =>
    e.length > 2
      ? eR
      : $s.has(t)
      ? t.startsWith("scale")
        ? Z5(e[1])
        : J5
      : tR,
  Ep = (t, e) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Fi.test(e) || e === "0") &&
            !e.startsWith("url("))
        ),
  rR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function iR(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [r] = n.match(Rf) || [];
  if (!r) return t;
  const i = n.replace(r, "");
  let s = rR.has(e) ? 1 : 0;
  return r !== n && (s *= 100), e + "(" + s + i + ")";
}
const sR = /([a-z-]*)\(.*?\)/g,
  bp = {
    ...Fi,
    getAnimatableNone: (t) => {
      const e = t.match(sR);
      return e ? e.map(iR).join(" ") : t;
    },
  },
  oR = {
    ...jS,
    color: jt,
    backgroundColor: jt,
    outlineColor: jt,
    fill: jt,
    stroke: jt,
    borderColor: jt,
    borderTopColor: jt,
    borderRightColor: jt,
    borderBottomColor: jt,
    borderLeftColor: jt,
    filter: bp,
    WebkitFilter: bp,
  },
  Vg = (t) => oR[t];
function C2(t, e) {
  let n = Vg(t);
  return (
    n !== bp && (n = Fi), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const P2 = (t) => /^0[^.\s]+$/.test(t);
function aR(t) {
  if (typeof t == "number") return t === 0;
  if (t !== null) return t === "none" || t === "0" || P2(t);
}
function lR(t, e, n, r) {
  const i = Ep(e, n);
  let s;
  Array.isArray(n) ? (s = [...n]) : (s = [null, n]);
  const o = r.from !== void 0 ? r.from : t.get();
  let a;
  const l = [];
  for (let u = 0; u < s.length; u++)
    s[u] === null && (s[u] = u === 0 ? o : s[u - 1]),
      aR(s[u]) && l.push(u),
      typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (a = s[u]);
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      s[c] = C2(e, a);
    }
  return s;
}
function uR({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function k2(t, e) {
  return t[e] || t.default || t;
}
const Fg =
  (t, e, n, r = {}) =>
  (i) => {
    const s = k2(r, t) || {},
      o = s.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - Li(o);
    const l = lR(e, t, n, s),
      u = l[0],
      c = l[l.length - 1],
      d = Ep(t, u),
      f = Ep(t, c);
    let h = {
      keyframes: l,
      velocity: e.getVelocity(),
      ease: "easeOut",
      ...s,
      delay: -a,
      onUpdate: (m) => {
        e.set(m), s.onUpdate && s.onUpdate(m);
      },
      onComplete: () => {
        i(), s.onComplete && s.onComplete();
      },
    };
    if (
      (uR(s) || (h = { ...h, ...nR(t, h) }),
      h.duration && (h.duration = Li(h.duration)),
      h.repeatDelay && (h.repeatDelay = Li(h.repeatDelay)),
      !d || !f || s5.current || s.type === !1)
    )
      return q5(h);
    if (
      e.owner &&
      e.owner.current instanceof HTMLElement &&
      !e.owner.getProps().onUpdate
    ) {
      const m = Q5(e, t, h);
      if (m) return m;
    }
    return Kc(h);
  };
function Xc(t) {
  return !!(on(t) && t.add);
}
const T2 = (t) => /^\-?\d*\.?\d+$/.test(t);
function Ig(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function zg(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class Bg {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Ig(this.subscriptions, e), () => zg(this.subscriptions, e);
  }
  notify(e, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(e, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const cR = (t) => !isNaN(parseFloat(t));
class fR {
  constructor(e, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: s, timestamp: o } = ut;
        this.lastUpdated !== o &&
          ((this.timeDelta = s),
          (this.lastUpdated = o),
          _e.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => _e.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = e),
      (this.canTrackVelocity = cR(this.current)),
      (this.owner = n.owner);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Bg());
    const r = this.events[e].add(n);
    return e === "change"
      ? () => {
          r(),
            _e.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, r) {
    this.set(n), (this.prev = e), (this.timeDelta = r);
  }
  jump(e) {
    this.updateAndNotify(e),
      (this.prev = e),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? _2(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Xo(t, e) {
  return new fR(t, e);
}
const E2 = (t) => (e) => e.test(t),
  dR = { test: (t) => t === "auto", parse: (t) => t },
  b2 = [Us, G, kr, ri, vO, yO, dR],
  va = (t) => b2.find(E2(t)),
  hR = [...b2, jt, Fi],
  pR = (t) => hR.find(E2(t));
function mR(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Xo(n));
}
function gR(t, e) {
  const n = Mf(t, e);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...s
  } = n ? t.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = MO(s[o]);
    mR(t, o, a);
  }
}
function yR(t, e, n) {
  var r, i;
  const s = Object.keys(e).filter((a) => !t.hasValue(a)),
    o = s.length;
  if (o)
    for (let a = 0; a < o; a++) {
      const l = s[a],
        u = e[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : t.readValue(l)) !==
              null && i !== void 0
              ? i
              : e[l]),
        c != null &&
          (typeof c == "string" && (T2(c) || P2(c))
            ? (c = parseFloat(c))
            : !pR(c) && Fi.test(u) && (c = C2(l, u)),
          t.addValue(l, Xo(c, { owner: t })),
          n[l] === void 0 && (n[l] = c),
          c !== null && t.setBaseTarget(l, c));
    }
}
function vR(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function xR(t, e, n) {
  const r = {};
  for (const i in t) {
    const s = vR(i, e);
    if (s !== void 0) r[i] = s;
    else {
      const o = n.getValue(i);
      o && (r[i] = o.get());
    }
  }
  return r;
}
function _R({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), r;
}
function O2(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: s = t.getDefaultTransition(),
    transitionEnd: o,
    ...a
  } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  r && (s = r);
  const u = [],
    c = i && t.animationState && t.animationState.getState()[i];
  for (const d in a) {
    const f = t.getValue(d),
      h = a[d];
    if (!f || h === void 0 || (c && _R(c, d))) continue;
    const m = { delay: n, elapsed: 0, ...s };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const _ = t.getProps()[r5];
      _ &&
        ((m.elapsed = window.HandoffAppearAnimations(_, d, f, _e)),
        (m.syncStart = !0));
    }
    f.start(Fg(d, f, h, t.shouldReduceMotion && $s.has(d) ? { type: !1 } : m));
    const g = f.animation;
    Xc(l) && (l.add(d), g.then(() => l.remove(d))), u.push(g);
  }
  return (
    o &&
      Promise.all(u).then(() => {
        o && gR(t, o);
      }),
    u
  );
}
function Op(t, e, n = {}) {
  const r = Mf(t, e, n.custom);
  let { transition: i = t.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(O2(t, r, n)) : () => Promise.resolve(),
    o =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = i;
            return wR(t, e, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [s, o] : [o, s];
    return l().then(() => u());
  } else return Promise.all([s(), o(n.delay)]);
}
function wR(t, e, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (t.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(t.variantChildren)
      .sort(SR)
      .forEach((u, c) => {
        u.notify("AnimationStart", e),
          o.push(
            Op(u, e, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", e)
            )
          );
      }),
    Promise.all(o)
  );
}
function SR(t, e) {
  return t.sortNodePosition(e);
}
function CR(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const i = e.map((s) => Op(t, s, n));
    r = Promise.all(i);
  } else if (typeof e == "string") r = Op(t, e, n);
  else {
    const i = typeof e == "function" ? Mf(t, e, n.custom) : e;
    r = Promise.all(O2(t, i, n));
  }
  return r.then(() => t.notify("AnimationComplete", e));
}
const PR = [...Sg].reverse(),
  kR = Sg.length;
function TR(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: r }) => CR(t, n, r)));
}
function ER(t) {
  let e = TR(t);
  const n = OR();
  let r = !0;
  const i = (l, u) => {
    const c = Mf(t, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function s(l) {
    e = l(t);
  }
  function o(l, u) {
    const c = t.getProps(),
      d = t.getVariantContext(!0) || {},
      f = [],
      h = new Set();
    let m = {},
      g = 1 / 0;
    for (let v = 0; v < kR; v++) {
      const p = PR[v],
        y = n[p],
        x = c[p] !== void 0 ? c[p] : d[p],
        w = Ol(x),
        T = p === u ? y.isActive : null;
      T === !1 && (g = v);
      let C = x === d[p] && x !== c[p] && w;
      if (
        (C && r && t.manuallyAnimateOnMount && (C = !1),
        (y.protectedKeys = { ...m }),
        (!y.isActive && T === null) ||
          (!x && !y.prevProp) ||
          bf(x) ||
          typeof x == "boolean")
      )
        continue;
      const E = bR(y.prevProp, x);
      let b = E || (p === u && y.isActive && !C && w) || (v > g && w);
      const O = Array.isArray(x) ? x : [x];
      let D = O.reduce(i, {});
      T === !1 && (D = {});
      const { prevResolvedValues: A = {} } = y,
        H = { ...A, ...D },
        F = (I) => {
          (b = !0), h.delete(I), (y.needsAnimating[I] = !0);
        };
      for (const I in H) {
        const W = D[I],
          j = A[I];
        m.hasOwnProperty(I) ||
          (W !== j
            ? Wc(W) && Wc(j)
              ? !qS(W, j) || E
                ? F(I)
                : (y.protectedKeys[I] = !0)
              : W !== void 0
              ? F(I)
              : h.add(I)
            : W !== void 0 && h.has(I)
            ? F(I)
            : (y.protectedKeys[I] = !0));
      }
      (y.prevProp = x),
        (y.prevResolvedValues = D),
        y.isActive && (m = { ...m, ...D }),
        r && t.blockInitialAnimation && (b = !1),
        b &&
          !C &&
          f.push(
            ...O.map((I) => ({ animation: I, options: { type: p, ...l } }))
          );
    }
    if (h.size) {
      const v = {};
      h.forEach((p) => {
        const y = t.getBaseTarget(p);
        y !== void 0 && (v[p] = y);
      }),
        f.push({ animation: v });
    }
    let _ = !!f.length;
    return (
      r && c.initial === !1 && !t.manuallyAnimateOnMount && (_ = !1),
      (r = !1),
      _ ? e(f) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = t.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var m;
        return (m = h.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = o(c, l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
  };
}
function bR(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !qS(e, t) : !1;
}
function ns(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function OR() {
  return {
    animate: ns(!0),
    whileInView: ns(),
    whileHover: ns(),
    whileTap: ns(),
    whileDrag: ns(),
    whileFocus: ns(),
    exit: ns(),
  };
}
class RR extends Hi {
  constructor(e) {
    super(e), e.animationState || (e.animationState = ER(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), bf(e) && (this.unmount = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let LR = 0;
class MR extends Hi {
  constructor() {
    super(...arguments), (this.id = LR++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: e,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i) return;
    const s = this.node.animationState.setActive("exit", !e, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !e && s.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const AR = { animation: { Feature: RR }, exit: { Feature: MR } },
  ly = (t, e) => Math.abs(t - e);
function DR(t, e) {
  const n = ly(t.x, e.x),
    r = ly(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class R2 {
  constructor(e, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Ad(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = DR(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: h } = ut;
        this.history.push({ ...f, timestamp: h });
        const { onStart: m, onMove: g } = this.handlers;
        c ||
          (m && m(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Md(c, this.transformPagePoint)),
          _e.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          h = Ad(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Md(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(u, h), f && f(u, h);
      }),
      !YS(e))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Lf(e),
      s = Md(i, this.transformPagePoint),
      { point: o } = s,
      { timestamp: a } = ut;
    this.history = [{ ...o, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(e, Ad(s, this.history)),
      (this.removeListeners = Ri(
        Ur(window, "pointermove", this.handlePointerMove),
        Ur(window, "pointerup", this.handlePointerUp),
        Ur(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), qr(this.updatePoint);
  }
}
function Md(t, e) {
  return e ? { point: e(t.point) } : t;
}
function uy(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Ad({ point: t }, e) {
  return {
    point: t,
    delta: uy(t, L2(e)),
    offset: uy(t, NR(e)),
    velocity: jR(e, 0.1),
  };
}
function NR(t) {
  return t[0];
}
function L2(t) {
  return t[t.length - 1];
}
function jR(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    r = null;
  const i = L2(t);
  for (; n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > Li(e))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Hr(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function kn(t) {
  return t.max - t.min;
}
function Rp(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function cy(t, e, n, r = 0.5) {
  (t.origin = r),
    (t.originPoint = Me(e.min, e.max, t.origin)),
    (t.scale = kn(n) / kn(e)),
    (Rp(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = Me(n.min, n.max, t.origin) - t.originPoint),
    (Rp(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function tl(t, e, n, r) {
  cy(t.x, e.x, n.x, r ? r.originX : void 0),
    cy(t.y, e.y, n.y, r ? r.originY : void 0);
}
function fy(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + kn(e));
}
function VR(t, e, n) {
  fy(t.x, e.x, n.x), fy(t.y, e.y, n.y);
}
function dy(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + kn(e));
}
function nl(t, e, n) {
  dy(t.x, e.x, n.x), dy(t.y, e.y, n.y);
}
function FR(t, { min: e, max: n }, r) {
  return (
    e !== void 0 && t < e
      ? (t = r ? Me(e, t, r.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = r ? Me(n, t, r.max) : Math.min(t, n)),
    t
  );
}
function hy(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function IR(t, { top: e, left: n, bottom: r, right: i }) {
  return { x: hy(t.x, n, i), y: hy(t.y, e, r) };
}
function py(t, e) {
  let n = e.min - t.min,
    r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function zR(t, e) {
  return { x: py(t.x, e.x), y: py(t.y, e.y) };
}
function BR(t, e) {
  let n = 0.5;
  const r = kn(t),
    i = kn(e);
  return (
    i > r
      ? (n = Ll(e.min, e.max - r, t.min))
      : r > i && (n = Ll(t.min, t.max - i, e.min)),
    Vi(0, 1, n)
  );
}
function $R(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Lp = 0.35;
function UR(t = Lp) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Lp),
    { x: my(t, "left", "right"), y: my(t, "top", "bottom") }
  );
}
function my(t, e, n) {
  return { min: gy(t, e), max: gy(t, n) };
}
function gy(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const yy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  So = () => ({ x: yy(), y: yy() }),
  vy = () => ({ min: 0, max: 0 }),
  Ke = () => ({ x: vy(), y: vy() });
function pr(t) {
  return [t("x"), t("y")];
}
function M2({ top: t, left: e, right: n, bottom: r }) {
  return { x: { min: e, max: n }, y: { min: t, max: r } };
}
function HR({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function WR(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    r = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Dd(t) {
  return t === void 0 || t === 1;
}
function Mp({ scale: t, scaleX: e, scaleY: n }) {
  return !Dd(t) || !Dd(e) || !Dd(n);
}
function ls(t) {
  return Mp(t) || A2(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function A2(t) {
  return xy(t.x) || xy(t.y);
}
function xy(t) {
  return t && t !== "0%";
}
function Qc(t, e, n) {
  const r = t - n,
    i = e * r;
  return n + i;
}
function _y(t, e, n, r, i) {
  return i !== void 0 && (t = Qc(t, i, r)), Qc(t, n, r) + e;
}
function Ap(t, e = 0, n = 1, r, i) {
  (t.min = _y(t.min, e, n, r, i)), (t.max = _y(t.max, e, n, r, i));
}
function D2(t, { x: e, y: n }) {
  Ap(t.x, e.translate, e.scale, e.originPoint),
    Ap(t.y, n.translate, n.scale, n.originPoint);
}
function YR(t, e, n, r = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const l = s.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Co(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((e.x *= o.x.scale), (e.y *= o.y.scale), D2(t, o)),
      r && ls(s.latestValues) && Co(t, s.latestValues));
  }
  (e.x = wy(e.x)), (e.y = wy(e.y));
}
function wy(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999
    ? t
    : 1;
}
function ai(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function Sy(t, e, [n, r, i]) {
  const s = e[i] !== void 0 ? e[i] : 0.5,
    o = Me(t.min, t.max, s);
  Ap(t, e[n], e[r], o, e.scale);
}
const GR = ["x", "scaleX", "originX"],
  KR = ["y", "scaleY", "originY"];
function Co(t, e) {
  Sy(t.x, e, GR), Sy(t.y, e, KR);
}
function N2(t, e) {
  return M2(WR(t.getBoundingClientRect(), e));
}
function XR(t, e, n) {
  const r = N2(t, n),
    { scroll: i } = e;
  return i && (ai(r.x, i.offset.x), ai(r.y, i.offset.y)), r;
}
const QR = new WeakMap();
class qR {
  constructor(e) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ke()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Lf(l, "page").point);
      },
      s = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = KS(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          pr((m) => {
            let g = this.getAxisMotionValue(m).get() || 0;
            if (kr.test(g)) {
              const { projection: _ } = this.visualElement;
              if (_ && _.layout) {
                const v = _.layout.layoutBox[m];
                v && (g = kn(v) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[m] = g;
          }),
          f && _e.update(() => f(l, u), !1, !0);
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      o = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: h,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: m } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = JR(m)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, m),
          this.updateAxis("y", u.point, m),
          this.visualElement.render(),
          h && h(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new R2(
      e,
      { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(e, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && _e.update(() => s(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ou(e, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + r[e];
    this.constraints &&
      this.constraints[e] &&
      (o = FR(o, this.constraints[e], this.elastic[e])),
      s.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    e && _o(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && r
      ? (this.constraints = IR(r.layoutBox, e))
      : (this.constraints = !1),
      (this.elastic = UR(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        pr((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = $R(r.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !_o(e)) return !1;
    const r = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = XR(r, i.root, this.visualElement.getTransformPagePoint());
    let o = zR(i.layout.layoutBox, s);
    if (n) {
      const a = n(HR(o));
      (this.hasMutatedConstraints = !!a), a && (o = M2(a));
    }
    return o;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = pr((c) => {
        if (!Ou(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? e[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return r.start(Fg(e, r, 0, n));
  }
  stopAnimation() {
    pr((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    const n = "_drag" + e.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    pr((n) => {
      const { drag: r } = this.getProps();
      if (!Ou(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(e[n] - Me(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!_o(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    pr((o) => {
      const a = this.getAxisMotionValue(o);
      if (a) {
        const l = a.get();
        i[o] = BR({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      pr((o) => {
        if (!Ou(o, e, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(Me(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    QR.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Ur(e, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        _o(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = Ir(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (pr((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Lp,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Ou(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function JR(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
}
class ZR extends Hi {
  constructor(e) {
    super(e),
      (this.removeGroupControls = Ie),
      (this.removeListeners = Ie),
      (this.controls = new qR(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ie);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Cy = (t) => (e, n) => {
  t && _e.update(() => t(e, n));
};
class eL extends Hi {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ie);
  }
  onPointerDown(e) {
    this.session = new R2(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Cy(e),
      onStart: Cy(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && _e.update(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ur(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function tL() {
  const t = k.useContext(Tf);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: r } = t,
    i = k.useId();
  return k.useEffect(() => r(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
const ec = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Py(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const xa = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (G.test(t)) t = parseFloat(t);
        else return t;
      const n = Py(t, e.target.x),
        r = Py(t, e.target.y);
      return `${n}% ${r}%`;
    },
  },
  nL = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const r = t,
        i = Fi.parse(t);
      if (i.length > 5) return r;
      const s = Fi.createTransformer(t),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = Me(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class rL extends X.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = e;
    cO(iL),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ec.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || e.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              _e.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      queueMicrotask(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = e;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function j2(t) {
  const [e, n] = tL(),
    r = k.useContext(Pg);
  return X.createElement(rL, {
    ...t,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(LS),
    isPresent: e,
    safeToRemove: n,
  });
}
const iL = {
    borderRadius: {
      ...xa,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: xa,
    borderTopRightRadius: xa,
    borderBottomLeftRadius: xa,
    borderBottomRightRadius: xa,
    boxShadow: nL,
  },
  V2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  sL = V2.length,
  ky = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Ty = (t) => typeof t == "number" || G.test(t);
function oL(t, e, n, r, i, s) {
  i
    ? ((t.opacity = Me(0, n.opacity !== void 0 ? n.opacity : 1, aL(r))),
      (t.opacityExit = Me(e.opacity !== void 0 ? e.opacity : 1, 0, lL(r))))
    : s &&
      (t.opacity = Me(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < sL; o++) {
    const a = `border${V2[o]}Radius`;
    let l = Ey(e, a),
      u = Ey(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Ty(l) === Ty(u)
        ? ((t[a] = Math.max(Me(ky(l), ky(u), r), 0)),
          (kr.test(u) || kr.test(l)) && (t[a] += "%"))
        : (t[a] = u);
  }
  (e.rotate || n.rotate) && (t.rotate = Me(e.rotate || 0, n.rotate || 0, r));
}
function Ey(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const aL = F2(0, 0.5, Dg),
  lL = F2(0.5, 0.95, Ie);
function F2(t, e, n) {
  return (r) => (r < t ? 0 : r > e ? 1 : n(Ll(t, e, r)));
}
function by(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function bn(t, e) {
  by(t.x, e.x), by(t.y, e.y);
}
function Oy(t, e, n, r, i) {
  return (
    (t -= e), (t = Qc(t, 1 / n, r)), i !== void 0 && (t = Qc(t, 1 / i, r)), t
  );
}
function uL(t, e = 0, n = 1, r = 0.5, i, s = t, o = t) {
  if (
    (kr.test(e) &&
      ((e = parseFloat(e)), (e = Me(o.min, o.max, e / 100) - o.min)),
    typeof e != "number")
  )
    return;
  let a = Me(s.min, s.max, r);
  t === s && (a -= e),
    (t.min = Oy(t.min, e, n, a, i)),
    (t.max = Oy(t.max, e, n, a, i));
}
function Ry(t, e, [n, r, i], s, o) {
  uL(t, e[n], e[r], e[i], e.scale, s, o);
}
const cL = ["x", "scaleX", "originX"],
  fL = ["y", "scaleY", "originY"];
function Ly(t, e, n, r) {
  Ry(t.x, e, cL, n ? n.x : void 0, r ? r.x : void 0),
    Ry(t.y, e, fL, n ? n.y : void 0, r ? r.y : void 0);
}
function My(t) {
  return t.translate === 0 && t.scale === 1;
}
function I2(t) {
  return My(t.x) && My(t.y);
}
function dL(t, e) {
  return (
    t.x.min === e.x.min &&
    t.x.max === e.x.max &&
    t.y.min === e.y.min &&
    t.y.max === e.y.max
  );
}
function z2(t, e) {
  return (
    Math.round(t.x.min) === Math.round(e.x.min) &&
    Math.round(t.x.max) === Math.round(e.x.max) &&
    Math.round(t.y.min) === Math.round(e.y.min) &&
    Math.round(t.y.max) === Math.round(e.y.max)
  );
}
function Ay(t) {
  return kn(t.x) / kn(t.y);
}
class hL {
  constructor() {
    this.members = [];
  }
  add(e) {
    Ig(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (zg(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(e, n) {
    const r = this.lead;
    if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
      r.instance && r.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = r),
        n && (e.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((e.snapshot = r.snapshot),
          (e.snapshot.latestValues = r.animationValues || r.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: r } = e;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Dy(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x,
    s = t.y.translate / e.y;
  if (
    ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const o = t.x.scale * e.x,
    a = t.y.scale * e.y;
  return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || "none";
}
const pL = (t, e) => t.depth - e.depth;
class mL {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    Ig(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    zg(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(pL),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function gL(t, e) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= e && (qr(r), t(s - e));
    };
  return _e.read(r, !0), () => qr(r);
}
function yL(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function vL(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function xL(t, e, n) {
  const r = on(t) ? t : Xo(t);
  return r.start(Fg("", r, e, n)), r.animation;
}
const Ny = ["", "X", "Y", "Z"],
  jy = 1e3;
let _L = 0;
const us = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function B2({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = e == null ? void 0 : e()) {
      (this.id = _L++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (us.totalNodes =
            us.resolvedTargetDeltas =
            us.recalculatedProjection =
              0),
            this.nodes.forEach(CL),
            this.nodes.forEach(bL),
            this.nodes.forEach(OL),
            this.nodes.forEach(PL),
            yL(us);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new mL());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Bg()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = vL(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        t)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        t(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = gL(f, 250)),
            ec.hasAnimatedSinceResize &&
              ((ec.hasAnimatedSinceResize = !1), this.nodes.forEach(Fy));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: h,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || DL,
                { onLayoutAnimationStart: _, onLayoutAnimationComplete: v } =
                  c.getProps(),
                p = !this.targetLayout || !z2(this.targetLayout, m) || h,
                y = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y);
                const x = { ...k2(g, "layout"), onPlay: _, onComplete: v };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                f || Fy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        qr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(RL),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vy);
        return;
      }
      this.isUpdating || this.nodes.forEach(TL),
        (this.isUpdating = !1),
        this.nodes.forEach(EL),
        this.nodes.forEach(wL),
        this.nodes.forEach(SL),
        this.clearAllSnapshots();
      const a = performance.now();
      (ut.delta = Vi(0, 1e3 / 60, a - ut.timestamp)),
        (ut.timestamp = a),
        (ut.isProcessing = !0),
        Pd.update.process(ut),
        Pd.preRender.process(ut),
        Pd.render.process(ut),
        (ut.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(kL), this.sharedNodes.forEach(LL);
    }
    scheduleUpdateProjection() {
      _e.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      _e.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ke()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !I2(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || ls(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        NL(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return Ke();
      const a = o.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (ai(a.x, l.offset.x), ai(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = Ke();
      bn(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            bn(a, o);
            const { scroll: f } = this.root;
            f && (ai(a.x, -f.offset.x), ai(a.y, -f.offset.y));
          }
          ai(a.x, c.offset.x), ai(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Ke();
      bn(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Co(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          ls(c.latestValues) && Co(l, c.latestValues);
      }
      return ls(this.latestValues) && Co(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Ke();
      bn(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ls(u.latestValues)) continue;
        Mp(u.latestValues) && u.updateSnapshot();
        const c = Ke(),
          d = u.measurePageBox();
        bn(c, d),
          Ly(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ls(this.latestValues) && Ly(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ut.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = ut.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ke()),
              (this.relativeTargetOrigin = Ke()),
              nl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              bn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ke()), (this.targetWithTransforms = Ke())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                VR(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : bn(this.target, this.layout.layoutBox),
                D2(this.target, this.targetDelta))
              : bn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ke()),
                (this.relativeTargetOrigin = Ke()),
                nl(this.relativeTargetOrigin, this.target, h.target),
                bn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          us.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Mp(this.parent.latestValues) ||
          A2(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ut.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      bn(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      YR(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: m } = a;
      if (!m) {
        this.projectionTransform &&
          ((this.projectionDelta = So()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = So()),
        (this.projectionDeltaWithTransform = So()));
      const g = this.projectionTransform;
      tl(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.projectionTransform = Dy(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== f ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        us.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = So();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Ke(),
        h = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        g = h !== m,
        _ = this.getStack(),
        v = !_ || _.members.length <= 1,
        p = !!(g && !v && this.options.crossfade === !0 && !this.path.some(AL));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        Iy(d.x, o.x, w),
          Iy(d.y, o.y, w),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (nl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ML(this.relativeTarget, this.relativeTargetOrigin, f, w),
            y && dL(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = Ke()),
            bn(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), oL(c, u, this.latestValues, w, p, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (qr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _e.update(() => {
          (ec.hasAnimatedSinceResize = !0),
            (this.currentAnimation = xL(0, jy, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(jy),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          $2(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ke();
          const d = kn(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = kn(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        bn(a, l),
          Co(a, c),
          tl(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new hL()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < Ny.length; c++) {
        const d = "rotate" + Ny[c];
        l[d] && ((u[d] = l[d]), o.setStaticValue(d, 0));
      }
      o.render();
      for (const c in u) o.setStaticValue(c, u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Zu(o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Zu(o.pointerEvents) || "")),
          this.hasProjected &&
            !ls(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Dy(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: h, y: m } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const g in Uc) {
        if (f[g] === void 0) continue;
        const { correct: _, applyTo: v } = Uc[g],
          p = u.transform === "none" ? f[g] : _(f[g], d);
        if (v) {
          const y = v.length;
          for (let x = 0; x < y; x++) u[v[x]] = p;
        } else u[g] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Zu(o.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Vy),
        this.root.sharedNodes.clear();
    }
  };
}
function wL(t) {
  t.updateLayout();
}
function SL(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = t.layout,
      { animationType: s } = t.options,
      o = n.source !== t.layout.source;
    s === "size"
      ? pr((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            h = kn(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : $2(s, n.layoutBox, r) &&
        pr((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            h = kn(r[d]);
          (f.max = f.min + h),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[d].max = t.relativeTarget[d].min + h));
        });
    const a = So();
    tl(a, r, n.layoutBox);
    const l = So();
    o ? tl(l, t.applyTransform(i, !0), n.measuredBox) : tl(l, r, n.layoutBox);
    const u = !I2(a);
    let c = !1;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const m = Ke();
          nl(m, n.layoutBox, f.layoutBox);
          const g = Ke();
          nl(g, r, h.layoutBox),
            z2(m, g) || (c = !0),
            d.options.layoutRoot &&
              ((t.relativeTarget = g),
              (t.relativeTargetOrigin = m),
              (t.relativeParent = d));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (t.isLead()) {
    const { onExitComplete: r } = t.options;
    r && r();
  }
  t.options.transition = void 0;
}
function CL(t) {
  us.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function PL(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function kL(t) {
  t.clearSnapshot();
}
function Vy(t) {
  t.clearMeasurements();
}
function TL(t) {
  t.isLayoutDirty = !1;
}
function EL(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function Fy(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function bL(t) {
  t.resolveTargetDelta();
}
function OL(t) {
  t.calcProjection();
}
function RL(t) {
  t.resetRotation();
}
function LL(t) {
  t.removeLeadSnapshot();
}
function Iy(t, e, n) {
  (t.translate = Me(e.translate, 0, n)),
    (t.scale = Me(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function zy(t, e, n, r) {
  (t.min = Me(e.min, n.min, r)), (t.max = Me(e.max, n.max, r));
}
function ML(t, e, n, r) {
  zy(t.x, e.x, n.x, r), zy(t.y, e.y, n.y, r);
}
function AL(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const DL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  By = (t) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t),
  $y = By("applewebkit/") && !By("chrome/") ? Math.round : Ie;
function Uy(t) {
  (t.min = $y(t.min)), (t.max = $y(t.max));
}
function NL(t) {
  Uy(t.x), Uy(t.y);
}
function $2(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !Rp(Ay(e), Ay(n), 0.2))
  );
}
const jL = B2({
    attachResizeListener: (t, e) => Ir(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Nd = { current: void 0 },
  U2 = B2({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Nd.current) {
        const t = new jL({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (Nd.current = t);
      }
      return Nd.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  VL = {
    pan: { Feature: eL },
    drag: { Feature: ZR, ProjectionNode: U2, MeasureLayout: j2 },
  },
  FL = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function IL(t) {
  const e = FL.exec(t);
  if (!e) return [,];
  const [, n, r] = e;
  return [n, r];
}
function Dp(t, e, n = 1) {
  const [r, i] = IL(t);
  if (!r) return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return T2(o) ? parseFloat(o) : o;
  } else return Cp(i) ? Dp(i, e, n + 1) : i;
}
function zL(t, { ...e }, n) {
  const r = t.current;
  if (!(r instanceof Element)) return { target: e, transitionEnd: n };
  n && (n = { ...n }),
    t.values.forEach((i) => {
      const s = i.get();
      if (!Cp(s)) return;
      const o = Dp(s, r);
      o && i.set(o);
    });
  for (const i in e) {
    const s = e[i];
    if (!Cp(s)) continue;
    const o = Dp(s, r);
    o && ((e[i] = o), n || (n = {}), n[i] === void 0 && (n[i] = s));
  }
  return { target: e, transitionEnd: n };
}
const BL = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  H2 = (t) => BL.has(t),
  $L = (t) => Object.keys(t).some(H2),
  Hy = (t) => t === Us || t === G,
  Wy = (t, e) => parseFloat(t.split(", ")[e]),
  Yy =
    (t, e) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Wy(i[1], e);
      {
        const s = r.match(/^matrix\((.+)\)$/);
        return s ? Wy(s[1], t) : 0;
      }
    },
  UL = new Set(["x", "y", "z"]),
  HL = $l.filter((t) => !UL.has(t));
function WL(t) {
  const e = [];
  return (
    HL.forEach((n) => {
      const r = t.getValue(n);
      r !== void 0 &&
        (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    e.length && t.render(),
    e
  );
}
const Qo = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: Yy(4, 13),
  y: Yy(5, 14),
};
Qo.translateX = Qo.x;
Qo.translateY = Qo.y;
const YL = (t, e, n) => {
    const r = e.measureViewportBox(),
      i = e.current,
      s = getComputedStyle(i),
      { display: o } = s,
      a = {};
    o === "none" && e.setStaticValue("display", t.display || "block"),
      n.forEach((u) => {
        a[u] = Qo[u](r, s);
      }),
      e.render();
    const l = e.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = e.getValue(u);
        c && c.jump(a[u]), (t[u] = Qo[u](l, s));
      }),
      t
    );
  },
  GL = (t, e, n = {}, r = {}) => {
    (e = { ...e }), (r = { ...r });
    const i = Object.keys(e).filter(H2);
    let s = [],
      o = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = t.getValue(l);
        if (!t.hasValue(l)) return;
        let c = n[l],
          d = va(c);
        const f = e[l];
        let h;
        if (Wc(f)) {
          const m = f.length,
            g = f[0] === null ? 1 : 0;
          (c = f[g]), (d = va(c));
          for (let _ = g; _ < m && f[_] !== null; _++)
            h ? Ag(va(f[_]) === h) : (h = va(f[_]));
        } else h = va(f);
        if (d !== h)
          if (Hy(d) && Hy(h)) {
            const m = u.get();
            typeof m == "string" && u.set(parseFloat(m)),
              typeof f == "string"
                ? (e[l] = parseFloat(f))
                : Array.isArray(f) && h === G && (e[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            h != null &&
            h.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (e[l] = d.transform(f))
              : (o || ((s = WL(t)), (o = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : e[l]),
                u.jump(f));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = YL(e, t, a);
      return (
        s.length &&
          s.forEach(([c, d]) => {
            t.getValue(c).set(d);
          }),
        t.render(),
        Ef && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: e, transitionEnd: r };
  };
function KL(t, e, n, r) {
  return $L(e) ? GL(t, e, n, r) : { target: e, transitionEnd: r };
}
const XL = (t, e, n, r) => {
    const i = zL(t, e, r);
    return (e = i.target), (r = i.transitionEnd), KL(t, e, n, r);
  },
  Np = { current: null },
  W2 = { current: !1 };
function QL() {
  if (((W2.current = !0), !!Ef))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Np.current = t.matches);
      t.addListener(e), e();
    } else Np.current = !1;
}
function qL(t, e, n) {
  const { willChange: r } = e;
  for (const i in e) {
    const s = e[i],
      o = n[i];
    if (on(s)) t.addValue(i, s), Xc(r) && r.add(i);
    else if (on(o)) t.addValue(i, Xo(s, { owner: t })), Xc(r) && r.remove(i);
    else if (o !== s)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        !a.hasAnimated && a.set(s);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, Xo(a !== void 0 ? a : s, { owner: t }));
      }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
const Gy = new WeakMap(),
  Y2 = Object.keys(Rl),
  JL = Y2.length,
  Ky = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  ZL = Cg.length;
class eM {
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: s,
    },
    o = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => _e.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = s;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = o),
      (this.isControllingVariants = Of(n)),
      (this.isVariantNode = RS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      a[d] !== void 0 && on(f) && (f.set(a[d], !1), Xc(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(e, n) {
    return {};
  }
  mount(e) {
    (this.current = e),
      Gy.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      W2.current || QL(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Np.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Gy.delete(this.current),
      this.projection && this.projection.unmount(),
      qr(this.notifyUpdate),
      qr(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const r = $s.has(e),
      i = n.on("change", (o) => {
        (this.latestValues[e] = o),
          this.props.onUpdate && _e.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), s();
    });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, r, i, s) {
    let o, a;
    for (let l = 0; l < JL; l++) {
      const u = Y2[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: h,
        } = Rl[u];
      f && (o = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          h && (a = h));
    }
    if (!this.projection && o) {
      this.projection = new o(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && _o(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: f,
        layoutRoot: h,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ke();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n);
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Ky.length; r++) {
      const i = Ky[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = e["on" + i];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = qL(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < ZL; r++) {
      const i = Cg[r],
        s = this.props[i];
      (Ol(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    n !== this.values.get(e) &&
      (this.removeValue(e), this.bindToMotionValue(e, n)),
      this.values.set(e, n),
      (this.latestValues[e] = n.get());
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let r = this.values.get(e);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Xo(n, { owner: this })), this.addValue(e, r)),
      r
    );
  }
  readValue(e) {
    var n;
    return this.latestValues[e] !== void 0 || !this.current
      ? this.latestValues[e]
      : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, e, this.options);
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Mg(this.props, r)) === null || n === void 0
            ? void 0
            : n[e]
          : void 0;
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !on(s)
      ? s
      : this.initialValues[e] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Bg()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class G2 extends eM {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: r }) {
    delete n[e], delete r[e];
  }
  makeTargetAnimatableFromInstance(
    { transition: e, transitionEnd: n, ...r },
    { transformValues: i },
    s
  ) {
    let o = xR(r, e || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s)) {
      yR(this, r, o);
      const a = XL(this, r, o, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: e, transitionEnd: n, ...r };
  }
}
function tM(t) {
  return window.getComputedStyle(t);
}
class nM extends G2 {
  readValueFromInstance(e, n) {
    if ($s.has(n)) {
      const r = Vg(n);
      return (r && r.default) || 0;
    } else {
      const r = tM(e),
        i = (DS(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return N2(e, n);
  }
  build(e, n, r, i) {
    Tg(e, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return Lg(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    on(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(e, n, r, i) {
    zS(e, n, r, i);
  }
}
class rM extends G2 {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if ($s.has(n)) {
      const r = Vg(n);
      return (r && r.default) || 0;
    }
    return (n = BS.has(n) ? n : Rg(n)), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Ke();
  }
  scrapeMotionValuesFromProps(e, n) {
    return US(e, n);
  }
  build(e, n, r, i) {
    bg(e, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, r, i) {
    $S(e, n, r, i);
  }
  mount(e) {
    (this.isSVGTag = Og(e.tagName)), super.mount(e);
  }
}
const iM = (t, e) =>
    kg(t)
      ? new rM(e, { enableHardwareAcceleration: !1 })
      : new nM(e, { enableHardwareAcceleration: !0 }),
  sM = { layout: { ProjectionNode: U2, MeasureLayout: j2 } },
  oM = { ...AR, ...ZO, ...VL, ...sM },
  Xy = lO((t, e) => zO(t, e, oM, iM));
function K2() {
  const t = k.useRef(!1);
  return (
    wg(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      []
    ),
    t
  );
}
function aM() {
  const t = K2(),
    [e, n] = k.useState(0),
    r = k.useCallback(() => {
      t.current && n(e + 1);
    }, [e]);
  return [k.useCallback(() => _e.postRender(r), [r]), e];
}
class lM extends k.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function uM({ children: t, isPresent: e }) {
  const n = k.useId(),
    r = k.useRef(null),
    i = k.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    k.useInsertionEffect(() => {
      const { width: s, height: o, top: a, left: l } = i.current;
      if (e || !r.current || !s || !o) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [e]),
    k.createElement(
      lM,
      { isPresent: e, childRef: r, sizeRef: i },
      k.cloneElement(t, { ref: r })
    )
  );
}
const jd = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = HS(cM),
    l = k.useId(),
    u = k.useMemo(
      () => ({
        id: l,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const d of a.values()) if (!d) return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      s ? void 0 : [n]
    );
  return (
    k.useMemo(() => {
      a.forEach((c, d) => a.set(d, !1));
    }, [n]),
    k.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (t = k.createElement(uM, { isPresent: n }, t)),
    k.createElement(Tf.Provider, { value: u }, t)
  );
};
function cM() {
  return new Map();
}
function fM(t) {
  return k.useEffect(() => () => t(), []);
}
const no = (t) => t.key || "";
function dM(t, e) {
  t.forEach((n) => {
    const r = no(n);
    e.set(r, n);
  });
}
function hM(t) {
  const e = [];
  return (
    k.Children.forEach(t, (n) => {
      k.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const pM = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: s = !0,
    mode: o = "sync",
  }) => {
    const a = k.useContext(Pg).forceRender || aM()[0],
      l = K2(),
      u = hM(t);
    let c = u;
    const d = k.useRef(new Map()).current,
      f = k.useRef(c),
      h = k.useRef(new Map()).current,
      m = k.useRef(!0);
    if (
      (wg(() => {
        (m.current = !1), dM(u, h), (f.current = c);
      }),
      fM(() => {
        (m.current = !0), h.clear(), d.clear();
      }),
      m.current)
    )
      return k.createElement(
        k.Fragment,
        null,
        c.map((p) =>
          k.createElement(
            jd,
            {
              key: no(p),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: s,
              mode: o,
            },
            p
          )
        )
      );
    c = [...c];
    const g = f.current.map(no),
      _ = u.map(no),
      v = g.length;
    for (let p = 0; p < v; p++) {
      const y = g[p];
      _.indexOf(y) === -1 && !d.has(y) && d.set(y, void 0);
    }
    return (
      o === "wait" && d.size && (c = []),
      d.forEach((p, y) => {
        if (_.indexOf(y) !== -1) return;
        const x = h.get(y);
        if (!x) return;
        const w = g.indexOf(y);
        let T = p;
        if (!T) {
          const C = () => {
            h.delete(y), d.delete(y);
            const E = f.current.findIndex((b) => b.key === y);
            if ((f.current.splice(E, 1), !d.size)) {
              if (((f.current = u), l.current === !1)) return;
              a(), r && r();
            }
          };
          (T = k.createElement(
            jd,
            {
              key: no(x),
              isPresent: !1,
              onExitComplete: C,
              custom: e,
              presenceAffectsLayout: s,
              mode: o,
            },
            x
          )),
            d.set(y, T);
        }
        c.splice(w, 0, T);
      }),
      (c = c.map((p) => {
        const y = p.key;
        return d.has(y)
          ? p
          : k.createElement(
              jd,
              { key: no(p), isPresent: !0, presenceAffectsLayout: s, mode: o },
              p
            );
      })),
      k.createElement(
        k.Fragment,
        null,
        d.size ? c : c.map((p) => k.cloneElement(p))
      )
    );
  },
  na = (t) => {
    function e(n) {
      let r =
        n === "vertical"
          ? ["left", "right", "center"]
          : ["top", "bottom", "center"];
      const i = Math.floor(Math.random() * r.length);
      return r[i];
    }
    return () =>
      S.jsxs(S.Fragment, {
        children: [
          S.jsx(t, {}),
          S.jsx(Xy.div, {
            className: "transition-slide-in",
            style: { transformOrigin: e("horizontal") },
            initial: { scaleY: 0 },
            animate: { scaleY: 0 },
            exit: { scaleY: 1 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }),
          S.jsx(Xy.div, {
            className: "transition-slide-out",
            style: { transformOrigin: e("vertical") },
            initial: { scaleX: 1 },
            animate: { scaleX: 0 },
            exit: { scaleX: 0 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }),
        ],
      });
  },
  mM = () => {
    const [t, e] = Hn("global");
    return (
      k.useEffect(() => {
        document.title = "LACV | " + t("pages.home");
      }, [e.language]),
      S.jsxs(S.Fragment, { children: [S.jsx(N3, {}), S.jsx(Z3, {})] })
    );
  },
  gM = na(mM),
  yM = () => {
    const [t, e] = Hn("global");
    return (
      k.useEffect(() => {
        document.title = "LACV | " + t("pages.courses");
      }, [e.language]),
      S.jsx("section", {
        className: "inner-section",
        children: S.jsx("div", {
          className: "container",
          children: S.jsxs("div", {
            className: "not-found",
            children: [
              S.jsx("h1", { children: t("global.soon") }),
              S.jsxs(or, {
                to: "/",
                className: "inner-section-go-back-link",
                children: [S.jsx(Fc, {}), " ", t("global.goBack")],
              }),
            ],
          }),
        }),
      })
    );
  },
  vM = na(yM),
  Vd = ({ topics: t }) =>
    S.jsx("div", {
      className: "course-review-topics",
      children: t.map((e) => S.jsx("span", { children: e }, e)),
    }),
  $g = ({ text: t }) => {
    const e = k.useRef();
    return (
      k.useLayoutEffect(() => {
        const n = e.current;
        new Ds(n, {
          types: "words, chars",
          charClass: "title-letter",
        }).chars.forEach((i, s) => {
          J.from(i, {
            opacity: 0,
            translateY: Math.floor(Math.random() * 101) - 110,
            rotateZ: Math.floor(Math.random() * 101) - 50,
            translateX: Math.floor(Math.random() * 61) - 30,
            ease: "back.out(3)",
            delay: s * 0.015 + 0.5,
          }),
            i.addEventListener("mouseenter", () => {
              J.to(i, {
                translateY: Math.floor(Math.random() * 101) - 110,
                rotateZ: Math.floor(Math.random() * 101) - 50,
                translateX: Math.floor(Math.random() * 61) - 30,
                duration: 0.5,
                ease: "back.out",
              });
            }),
            i.addEventListener("mouseleave", () => {
              J.to(i, {
                translateY: 0,
                rotateZ: 0,
                translateX: 0,
                delay: 0.5,
                duration: 0.7,
                ease: "back.out(4)",
              });
            });
        });
      }, [t]),
      S.jsx("h1", { className: "inner-section-title", ref: e, children: t })
    );
  },
  X2 = ({ text: t }) => {
    const e = k.useRef();
    return (
      k.useLayoutEffect(() => {
        const n = e.current;
        J.from(n, { opacity: 0, y: -200, ease: "back.out(1)", delay: 0.75 });
      }, [t]),
      S.jsx("p", { ref: e, children: t })
    );
  },
  xM = () => {
    const [t, e] = Hn("global");
    k.useEffect(() => {
      document.title = "LACV | " + t("pages.reviews");
    }, [e.language]);
    const n = k.useRef([]);
    return (
      J.registerPlugin(ee),
      k.useLayoutEffect(() => {
        n.current.forEach((r, i) => {
          J.from(r, {
            opacity: 0,
            scale: 0,
            translateY: Math.floor(Math.random() * 401) - 200,
            ease: "back.out(2)",
            delay: 0.15 * i + 0.6,
          });
        });
      }, [e.language]),
      S.jsx("section", {
        className: "reviews inner-section",
        children: S.jsxs("div", {
          className: "container",
          children: [
            S.jsx($g, { text: t("reviews.title") }, e.language),
            S.jsx(X2, { text: t("reviews.subtitle") }),
            S.jsxs("div", {
              className: "course-reviews",
              children: [
                S.jsxs("article", {
                  className: "course-review",
                  ref: (r) => {
                    n.current[0] = r;
                  },
                  children: [
                    S.jsx("h2", {
                      children: t("reviews.courses.webDevelopment.title"),
                    }),
                    S.jsx(Vd, {
                      topics: t("reviews.courses.webDevelopment.topics", {
                        returnObjects: !0,
                      }),
                    }),
                    S.jsx("div", {
                      className: "buttons",
                      children: S.jsx(or, {
                        to: "/repasos-coderhouse/desarrollo-web",
                        className: "button button-orange",
                        children: t("reviews.goToButton"),
                      }),
                    }),
                  ],
                }),
                S.jsxs("article", {
                  className: "course-review",
                  ref: (r) => {
                    n.current[1] = r;
                  },
                  children: [
                    S.jsx("h2", {
                      children: t("reviews.courses.javascript.title"),
                    }),
                    S.jsx(Vd, {
                      topics: t("reviews.courses.javascript.topics", {
                        returnObjects: !0,
                      }),
                    }),
                    S.jsx("div", {
                      className: "buttons",
                      children: S.jsx(or, {
                        to: "/repasos-coderhouse/javascript",
                        className: "button button-orange",
                        children: t("reviews.goToButton"),
                      }),
                    }),
                  ],
                }),
                S.jsxs("article", {
                  className: "course-review",
                  ref: (r) => {
                    n.current[2] = r;
                  },
                  children: [
                    S.jsx("h2", { children: t("reviews.courses.react.title") }),
                    S.jsx(Vd, {
                      topics: t("reviews.courses.react.topics", {
                        returnObjects: !0,
                      }),
                    }),
                    S.jsx("div", {
                      className: "buttons",
                      children: S.jsx(or, {
                        to: "/repasos-coderhouse/react",
                        className: "button button-orange",
                        children: t("reviews.goToButton"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  _M = na(xM),
  wM = [
    {
      id: "desarrollo-web",
      title: "Desarrollo Web",
      titleFull: "Curso de Desarrollo Web",
      classes: [
        {
          id: "clase-0",
          title: "Clase 0: Introducción al Desarrollo Web",
          videos: [
            { title: "Videíto de repaso de la clase", id: "xCFUV9ji3AA" },
          ],
        },
        {
          id: "clase-1",
          title: "Clase 1: Prototipado y conceptos básicos",
          videos: [
            { title: "Videíto de repaso de la clase", id: "zPAvdc1GvLs" },
          ],
        },
        {
          id: "clase-2",
          title: "Clase 2: Primeros pasos con HTML",
          videos: [
            { title: "Videíto de repaso de la clase", id: "vcA-smViJng" },
            { title: "Rutas a imágenes o archivos en HTML", id: "Bw33H1wNGT0" },
            { title: "Jueguitos sobre Nesting y rutas", id: "DvcFibhF7wo" },
            {
              title: "HTML semántico y etiquetas semánticas",
              id: "wx92etmlHtc",
              featured: !0,
            },
          ],
        },
        {
          id: "clase-3",
          title: "Clase 3: Incluyendo CSS a nuestro proyecto",
          videos: [
            { title: "Videíto de repaso de la clase", id: "k690TohJqU8" },
            {
              title: "Todo sobre unidades de medida en CSS",
              id: "EbsyJrtJgpw",
            },
            { title: "¿Qué son EM y REM?", id: "fNO35CJFVRQ" },
            {
              title:
                "Dev tools o herramientas del desarrollador (inspeccionar elemento)",
              id: "Yc9Ng774ulw",
            },
            {
              title: 'Más allá de "class": tipos de selectores en CSS',
              id: "k-4pOb3OMnI",
            },
          ],
        },
        {
          id: "clase-4",
          title: "Clase 4: Box model",
          videos: [
            { title: "Videíto de repaso de la clase", id: "XxMwhv3Q8YQ" },
            {
              title: "Position Fixed / Sticky / Absolute en detalle",
              id: "SwGxqHpQnk0",
            },
            { title: 'Por qué no usar "height" en CSS', id: "HUTnDswHcuc" },
            {
              title: 'Qué hace "box-sizing" en nuestro reset',
              id: "famvtt4mQUI",
            },
            {
              title: "Cómo usar íconos en nuestro sitio web",
              id: "c_580b7dzqc",
            },
          ],
        },
        {
          id: "clase-5",
          title: "Clase 5: Flexbox",
          videos: [
            { title: "Videíto de repaso de la clase", id: "FXfnp36A7o8" },
            { title: "Columnas iguales en Flexbox", id: "WCqjkLyc_fI" },
            {
              title: "Guía muy completa sobre Flexbox",
              id: "Glc8Z_vhKXQ",
              featured: !0,
            },
            { title: "Ejemplos reales donde usar Flexbox", id: "9jU3QRobsLc" },
          ],
        },
        {
          id: "clase-6",
          title: "Clase 6: Grid",
          videos: [
            { title: "Videíto de repaso de la clase", id: "BE_NTuetees" },
            { title: "Centrar elementos en CSS", id: "0n722UUQ-7E" },
            {
              title: "Armando una landing page con Flexbox y Grid",
              id: "2Pcbjp7gre4",
              featured: !0,
            },
            { title: "Jueguitos sobre Flexbox y Grid", id: "RLeXH2h9uf8" },
            {
              title:
                "Construyendo un sitio web completo con Flexbox y Grid - Parte 1",
              id: "l_44lAuCdVQ",
            },
            {
              title:
                "Construyendo un sitio web completo con Flexbox y Grid - Parte 2",
              id: "NUnCon6ZapY",
            },
            {
              title:
                "Construyendo un sitio web completo con Flexbox y Grid - Parte 3",
              id: "Y5KKFNhFJhw",
            },
          ],
        },
        {
          id: "clase-7",
          title: "Clase 7: Media queries",
          videos: [
            { title: "Videíto de repaso de la clase", id: "E0ovTcfOV3M" },
            {
              title:
                "Construyendo un sitio web completo con Flexbox y Grid - Parte 4: Media queries",
              id: "x7ARFH7g45s",
            },
            {
              title: "Armando un sitio web responsive - Parte 1: Mobile first",
              id: "ERnGV1zvOJ0",
              featured: !0,
            },
            {
              title:
                "Armando un sitio web responsive - Parte 2: Media queries para desktop",
              id: "Pxckf9VTrbk",
            },
            {
              title: "Armando mi sitio web 100% responsive",
              id: "Oc9m4Wt6PlI",
            },
          ],
        },
        {
          id: "clase-8",
          title: "Clase 8: Pseudoclases y pseudoelementos",
          videos: [
            { title: "Videíto de repaso de la clase", id: "Qi7_3eLKCr8" },
            {
              title: "::before y ::after explicados",
              id: "wEl62cnPBsY",
              featured: !0,
            },
            {
              title: "Conociendo una propiedad para controlar imágenes",
              id: "SfIhedIsUck",
            },
          ],
        },
        {
          id: "clase-9",
          title: "Clase 9: Bootstrap",
          videos: [
            { title: "Videíto de repaso de la clase", id: "NPFisPbrhX0" },
          ],
        },
        {
          id: "clase-10",
          title: "Clase 10: Git",
          videos: [
            { title: "Videíto de repaso de la clase", id: "kXFcIp2s7SM" },
          ],
        },
        {
          id: "clase-11",
          title: "Clase 11: GitHub",
          videos: [
            { title: "Videíto de repaso de la clase", id: "uIBWEEEZ5IM" },
            { title: "Cómo funciona el .GITIGNORE", id: "TLLzSvcoVQg" },
          ],
        },
        {
          id: "clase-12",
          title: "Clase 12: SASS I",
          videos: [
            { title: "Videíto de repaso de la clase", id: "k2PO7lF_1lQ" },
          ],
        },
        {
          id: "clase-13",
          title: "Clase 13: SASS II",
          videos: [
            { title: "Videíto de repaso de la clase", id: "AUWBHTOopFE" },
            { title: "Media queries en SASS", id: "jLfZ05qctWI" },
          ],
        },
        {
          id: "clase-14",
          title: "Clase 14: Animaciones",
          videos: [
            { title: "Videíto de repaso de la clase", id: "-kCiQsT86jQ" },
          ],
        },
        {
          id: "clase-15",
          title: "Clase 15: SEO y buenas prácticas",
          videos: [
            { title: "Videíto de repaso de la clase", id: "d6FYwZOyGZQ" },
          ],
        },
        {
          id: "clase-16",
          title: "Clase 16: Servidores y dominios",
          videos: [
            { title: "Videíto de repaso de la clase", id: "Jft5yjAJ1pI" },
            {
              title: "Contratando servidor y dominio en Hostinger",
              id: "TpWMhXX2p8g",
            },
          ],
        },
      ],
    },
    {
      id: "javascript",
      title: "JavaScript",
      titleFull: "Curso de JavaScript",
      classes: [
        {
          id: "clase-1",
          title: "Clase 1: Sintaxis, variables y consola",
          videos: [
            { title: "Videíto de repaso de la clase", id: "-H4W_PkFbls" },
          ],
        },
        {
          id: "clase-2",
          title: "Clase 2: Condicionales y operadores lógicos",
          videos: [
            { title: "Videíto de repaso de la clase", id: "gNn_cinKvSg" },
          ],
        },
        {
          id: "clase-3",
          title: "Clase 3: for, while, do...while y switch",
          videos: [
            { title: "Videíto de repaso de la clase", id: "aCbLJO8HIzk" },
          ],
        },
        {
          id: "clase-4",
          title: "Clase 4: Funciones",
          videos: [
            { title: "Videíto de repaso de la clase", id: "o5ngEsrjJoI" },
          ],
        },
        {
          id: "clase-5",
          title: "Clase 5: Objetos",
          videos: [
            { title: "Videíto de repaso de la clase", id: "gmhKoMzoXq8" },
          ],
        },
        {
          id: "clase-6",
          title: "Clase 6: Arrays",
          videos: [
            { title: "Videíto de repaso de la clase", id: "yXmtj0oz4bw" },
          ],
        },
        {
          id: "clase-7",
          title: "Clase 7: Funciones de orden superior",
          videos: [
            { title: "Videíto de repaso de la clase", id: "-JWVobI2m80" },
          ],
        },
        {
          id: "clase-8",
          title: "Clase 8: DOM",
          videos: [
            { title: "Videíto de repaso de la clase", id: "BzXj8-zdVGM" },
          ],
        },
        {
          id: "clase-9",
          title: "Clase 9: Eventos",
          videos: [
            { title: "Videíto de repaso de la clase", id: "LI6RMcvfnt0" },
          ],
        },
        {
          id: "clase-10",
          title: "Clase 10: Storage y JSON",
          videos: [
            { title: "Videíto de repaso de la clase", id: "2_lKFUBSyto" },
          ],
        },
        {
          id: "clase-11",
          title: "Clase 11: Repaso",
          videos: [
            {
              title: "Construyendo un e-commerce desde cero",
              id: "RiB4mV3VnRY",
            },
            { title: "Agregando media queries", id: "jU2RExwQMa4" },
          ],
        },
        {
          id: "clase-12",
          title: "Clase 12: Operadores avanzados",
          videos: [
            { title: "Videíto de repaso de la clase", id: "RUJBXQhRjsY" },
          ],
        },
        {
          id: "clase-13",
          title: "Clase 13: Librerías",
          videos: [
            { title: "Videíto de repaso de la clase", id: "EDIg8rqbrBM" },
          ],
        },
        {
          id: "clase-14",
          title: "Clase 14: Asincronía y promesas",
          videos: [
            { title: "Videíto de repaso de la clase", id: "oc-RvF-fJMs" },
          ],
        },
        {
          id: "clase-15",
          title: "Clase 15: API y Fetch",
          videos: [
            { title: "Videíto de repaso de la clase", id: "95BFumHfwAA" },
            {
              title: "Agregando Fetch y Librerías al e-commerce",
              id: "-TQ1_D-WIgE",
            },
            { title: "ASYNC AWAIT en 10 minutos", id: "iqtpnzXVmsk" },
          ],
        },
        {
          id: "proyectos-y-recomendaciones",
          title: "Proyectos y recomendaciones finales",
          videos: [
            { title: "Pokédex con la PokéAPI", id: "EmxvMPcIy5c" },
            {
              title: "Temas importantes de JS a tener en cuenta para React",
              id: "IISOVCyzmuw",
            },
            { title: "Piedra, papel o tijera", id: "QZ6iJG1mQFM" },
            { title: "Efecto Parallax", id: "hsC4XRdMmEg" },
          ],
        },
      ],
    },
  ],
  SM = (t) =>
    new Promise((e, n) => {
      const r = wM.find((i) => i.id === t);
      r ? e(r) : n({ error: "No se encontró el curso" });
    }),
  CM = "/assets/play-icon-62c6b713.png",
  PM = ({ video: t }) =>
    S.jsxs(
      "div",
      {
        className: "video",
        id: t.id,
        children: [
          S.jsxs("a", {
            href: `https://youtu.be/${t.id}`,
            target: "_blank",
            className: "video-thumbnail",
            children: [
              S.jsx("img", {
                src: `https://img.youtube.com/vi/${t.id}/maxresdefault.jpg`,
                alt: t.title,
                className: "video-thumbnail-picture",
              }),
              S.jsx("img", {
                className: "video-thumbnail-play",
                src: CM,
                alt: "Logo de YouTube",
              }),
            ],
          }),
          S.jsxs("p", {
            className: "video-text",
            children: [
              t.title,
              S.jsxs("a", {
                href: `https://youtu.be/${t.id}`,
                target: "_blank",
                className: "watch-on-youtube",
                children: ["Ver en YouTube ", S.jsx(Ab, {})],
              }),
            ],
          }),
          t.featured &&
            S.jsx("span", {
              className: "featured",
              children: "Súper recomendado 🤙",
            }),
        ],
      },
      t.id
    ),
  kM = () => {
    const [t, e] = Hn("global"),
      [n, r] = k.useState(null),
      i = mE().course;
    return (
      k.useEffect(() => {
        SM(i).then((s) => {
          r(s);
        });
      }, [i]),
      k.useEffect(() => {
        document.title = n
          ? "LACV | " + n.titleFull
          : "LACV | " + t("pages.reviews");
      }, [n, e.language]),
      S.jsx("section", {
        className: "reviews inner-section",
        children: S.jsx("div", {
          className: "container",
          children: n
            ? S.jsxs(S.Fragment, {
                children: [
                  S.jsxs(or, {
                    to: "/repasos-coderhouse",
                    className: "inner-section-go-back-link",
                    children: [S.jsx(Fc, {}), " Videítos de repaso"],
                  }),
                  S.jsx($g, { text: n && n.titleFull }),
                  n.classes.map((s) =>
                    S.jsxs(
                      "article",
                      {
                        className: "class",
                        id: s.id,
                        children: [
                          S.jsx("h2", {
                            className: "class-title",
                            children: s.title,
                          }),
                          S.jsx("div", {
                            className: "class-videos",
                            children: s.videos.map((o) =>
                              S.jsx(PM, { video: o }, o.id)
                            ),
                          }),
                        ],
                      },
                      s.id
                    )
                  ),
                ],
              })
            : S.jsx(S.Fragment, {
                children: S.jsxs("div", {
                  className: "not-found",
                  children: [
                    S.jsx("h1", { children: t("global.courseNotFound") }),
                    S.jsx("p", { children: t("global.courseWriteToMe") }),
                    S.jsxs(or, {
                      to: "/repasos-coderhouse",
                      className: "inner-section-go-back-link",
                      children: [S.jsx(Fc, {}), " ", t("global.goBack")],
                    }),
                  ],
                }),
              }),
        }),
      })
    );
  },
  TM = na(kM),
  Qy =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEVjW/////9hWf9fV/9xa/9eVv9dVP9WTf9YT/9aUf9XTv9US/9cU/9nX//GxP9TSf/f3v/o5/+hnf/Pzf/39v+Tjv+bl/96c/+lof+Xkv9+eP/KyP/w8P/6+v+5tv9rZP/V0//Cv/+Lhv+uq/9xav+Dff+0sf/i4f/y8f+9uv/s6/+NiP+Ggf+qp//Z1/+fm/+q/ZwLAAAFq0lEQVR4nO2d63bqLBBA4xAChCTeY7zfbW2tvv/bfdray2fVEIPHoWv2On/Ony72ggwwDOh5BEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEHcBwBgPODB/h/njO3/++gW2QNYIEXIYn/ZTneNrJF2Xzc9Pw5CIRVnrotCIDXbvPVrg2HlhOGg1h81lqwaRs5qQqTHafJyqnZCa7vaeFpx5ywh0PH8Kcfui/q0G4nIJUlQqrs11TtSm4914IgkqGDVKuj3IZmxkD+69QYEanWL3geTNnt0+/MAnd7Uf19gj6xRXPT7c8xQd0v6ITcEPS0tiNoQZK28IGZDBnULgogNgQ9sCOI1BGWlBxEbahvfIGbDcGRJEKthMLMliNQQonIrNfyGcmpNEKchjO0J4jQUzT9uCL5FQZSGMvnjhhDaFMRoGDT+uqGwtV7DagixVUGEhkH5xAVyQ2U1kmI01Ib7wu2o3fPHC9/vzHarpPbsjqHRXNHKtDicpR1gjEcq1LqzW9d+HUkhNISOgWCdqd/tZlwJthmdHt+gM+QGgWYgL7UamNK82//ZlegMg7d8w/bV4xbgMmpP8Bqqda7g8GIXfgI8hKyO1TB/sngSBn8HAt2boDSU/VzDmonhHiYWCUbD/N3vi6Hh4VwgTjwHDSuxeaPhzLTyYAxGaWWqH93KMhgtSzfq0c0sgTJKds8EusFnTJCZGFbW2oUii7Mww3z+oFt1r+7pHfMt/ksq8QVKE6rmRxat9cKZsqcfyEm+2jdPmSdcG62GoeabbSpDpyRvOZaZpBCir+765rZ8aXOmlSuSvH2L4T7uTDvakdFaIJqeUE+VExNImYOL4WgcOuAo8oq5r9Ic52Y5Hg5bljGsVBIP/VgV03KKlblEvjAHVWqc7nmeadzdyOIz+fliJAp3N3KT5P51Bj35aIurRCWjzYEG7nxO1CuvOMKtyBflS2iRZ+VYsa3iWda4FUHvSiu+4Q43XhSX7sYN7klj342vF0/ozRiiO7g4heu3crP/BPeneEDxeSnHGfJx6h2KosOsxEL18rE/IiAQm9svse3wd+IBphejG9Mbg+qjG28IKPl62+QxcyULtw+sIWTGN7q/mYSPbngB9l9kPC98JQpducJ1INK9ggWM12uMMMKkSIuM1qmLx+Jcd8yvZbzgX9ecg4mFsSP69OIFQG8Md8lLd+aLE7gwqL/ZkwaPbunNgJ6bGK6iRze0BNWpgWGCKZhCwQEFwmC52kSUzIDFvFrM0eTtky2idRv4ldZOFHFkBvlx05rUf8H77cNBo8AjSBDkGxrVFf8jjvcrW3OQhnMYcIM+xDVKjyS+WTGQSX3KBFOk+XFHtpYqmb/xMTn37yM1PDRtpvLOc7VBlmqNaD78dc+51Z+J8EqBXtXkoawM0art7E3ubeZLedaSC6OXwDBlai7dVX9uZn5VyCj4fOgSDm9EVpdmGY0C5f135+pt/Hp/3l0uPKaE1nzc6SaG+cUWpnyiyXsDw2Gr1SqS6cc0WVh+UeEIpkBzH8MFos/wLoZ1RKvS+xi+odrh38MQV8r7DoaYFqXeXQx9RAsa7x6GTVRx5h6GmFZsB6wbrhBtnN6xbfiCrk7BtmEHV5jxrBvusI1R24YYaxOtGjYRClo13KIs2LdomKAUtGi4wpS6+IE1w1dki7UvLBnWYkyJi/8BYxvvzzZwfoIfgGiXfVcw8VBt6n/D9XhVomK26TtwyRIi3ZnedqEkWQh0K9HzMCV889/OOVLPPHRbiWtAJFQ39/ePvqi9xQ4+IgFcirg92ubF15ckjYV7ekeAq7DqLRuj5tPz6WHF8Lk+WaedUCtn9T4BxpUUEsad3rLdyLIs7c56fgxKSBU4ElqM+Hjrkgd7/tpP5hEEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEOv4DDpRUCKklyhsAAAAASUVORK5CYII=",
  qy = "/assets/logo-paypal-ba441629.png",
  EM = "/assets/logo-cafecito-1f148c97.jpg",
  bM = "/assets/logo-mercadopago-d6427164.png",
  Jy = "/assets/logo-patreon-8f224842.png",
  OM = () => {
    const [t, e] = Hn("global");
    k.useEffect(() => {
      document.title = "LACV | " + t("pages.donations");
    }, [e.language]);
    const n = k.useRef([]);
    return (
      J.registerPlugin(ee),
      k.useLayoutEffect(() => {
        n.current.forEach((r) => {
          J.from(r, {
            opacity: 0,
            scale: 0,
            translateY: Math.floor(Math.random() * 401) - 200,
            ease: "back.out(2)",
            delay: 0.75,
          });
        });
      }, [e.language]),
      S.jsx("section", {
        className: "donations inner-section",
        children: S.jsxs("div", {
          className: "container",
          children: [
            S.jsx($g, { text: t("donations.title") }, e.language),
            S.jsx(X2, { text: t("donations.subtitle") }),
            S.jsxs("div", {
              className: "donations-grid",
              children: [
                S.jsxs("article", {
                  id: "argentina",
                  className: "donation",
                  ref: (r) => {
                    n.current[0] = r;
                  },
                  children: [
                    S.jsx("h2", {
                      className: "donation-title",
                      children: t("donations.fromArgentina"),
                    }),
                    S.jsxs("h3", {
                      className: "donation-subtitle",
                      children: [
                        S.jsx("img", {
                          className: "rounded",
                          src: EM,
                          alt: "Cafecito logo",
                        }),
                        "Cafecito ",
                        S.jsx("span", { children: "(ARS)" }),
                      ],
                    }),
                    S.jsx("div", {
                      className: "buttons",
                      children: S.jsx("a", {
                        target: "_blank",
                        href: "https://cafecito.app/lacvhacks",
                        className: "button",
                        children: t("donations.oneTime"),
                      }),
                    }),
                    S.jsxs("h3", {
                      className: "donation-subtitle",
                      children: [
                        S.jsx("img", { src: bM, alt: "MercadoPago logo" }),
                        "MercadoPago ",
                        S.jsx("span", { children: "(ARS)" }),
                      ],
                    }),
                    S.jsxs("div", {
                      className: "buttons",
                      children: [
                        S.jsx("a", {
                          target: "_blank",
                          href: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a8a854e018a9546800b073f",
                          className: "button",
                          children: t("donations.monthly"),
                        }),
                        S.jsx("a", {
                          target: "_blank",
                          href: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c207d018a708b1e20028b",
                          className: "button",
                          children: t("donations.oneTime"),
                        }),
                      ],
                    }),
                    S.jsxs("h3", {
                      className: "donation-subtitle",
                      children: [
                        S.jsx("img", { src: qy, alt: "PayPal logo" }),
                        "PayPal ",
                        S.jsx("span", { children: "(USD)" }),
                      ],
                    }),
                    S.jsx("p", {
                      className: "donation-text-small",
                      children: t("donations.pesifies"),
                    }),
                    S.jsx("div", {
                      className: "buttons",
                      children: S.jsx("a", {
                        target: "_blank",
                        href: "https://www.paypal.com/donate/?hosted_button_id=BVJ6LD7YYYFY2",
                        className: "button",
                        children: t("donations.monthlyOrOneTime"),
                      }),
                    }),
                    S.jsxs("h3", {
                      className: "donation-subtitle",
                      children: [
                        S.jsx("img", {
                          className: "rounded",
                          src: Qy,
                          alt: "Stripe logo",
                        }),
                        "Stripe ",
                        S.jsx("span", { children: "(USD)" }),
                      ],
                    }),
                    S.jsx("p", {
                      className: "donation-text-small",
                      children: t("donations.pesifies"),
                    }),
                    S.jsx("div", {
                      className: "buttons",
                      children: S.jsx("a", {
                        target: "_blank",
                        href: "https://donate.stripe.com/aEU5oifsc9oacRadQQ",
                        className: "button",
                        children: t("donations.oneTime"),
                      }),
                    }),
                    S.jsxs("h3", {
                      className: "donation-subtitle",
                      children: [
                        S.jsx("img", { src: Jy, alt: "Patreon logo" }),
                        "Patreon ",
                        S.jsx("span", { children: "(USD)" }),
                      ],
                    }),
                    S.jsx("p", {
                      className: "donation-text-small",
                      children: t("donations.pesifies"),
                    }),
                    S.jsx("div", {
                      className: "buttons",
                      children: S.jsx("a", {
                        target: "_blank",
                        href: "https://patreon.com/lacvartes",
                        className: "button",
                        children: t("donations.monthly"),
                      }),
                    }),
                  ],
                }),
                S.jsxs("article", {
                  id: "resto-del-mundo",
                  className: "donation",
                  ref: (r) => {
                    n.current[1] = r;
                  },
                  children: [
                    S.jsx("h2", {
                      className: "donation-title",
                      children: t("donations.fromTheRest"),
                    }),
                    S.jsxs("h3", {
                      className: "donation-subtitle",
                      children: [
                        S.jsx("img", { src: qy, alt: "PayPal logo" }),
                        "PayPal",
                      ],
                    }),
                    S.jsxs("div", {
                      className: "buttons",
                      children: [
                        S.jsxs("a", {
                          target: "_blank",
                          href: "https://www.paypal.com/donate/?hosted_button_id=BVJ6LD7YYYFY2",
                          className: "button",
                          children: [t("donations.monthlyOrOneTime"), " (USD)"],
                        }),
                        S.jsxs("a", {
                          target: "_blank",
                          href: "https://www.paypal.com/donate/?hosted_button_id=88DZ3PQXDCG38",
                          className: "button",
                          children: [t("donations.monthlyOrOneTime"), " (EUR)"],
                        }),
                      ],
                    }),
                    S.jsxs("h3", {
                      className: "donation-subtitle",
                      children: [
                        S.jsx("img", {
                          className: "rounded",
                          src: Qy,
                          alt: "Stripe logo",
                        }),
                        "Stripe",
                      ],
                    }),
                    S.jsxs("div", {
                      className: "buttons",
                      children: [
                        S.jsxs("a", {
                          target: "_blank",
                          href: "https://donate.stripe.com/aEU5oifsc9oacRadQQ",
                          className: "button",
                          children: [t("donations.oneTime"), " (USD)"],
                        }),
                        S.jsxs("a", {
                          target: "_blank",
                          href: "https://donate.stripe.com/5kA2c6cg0gQC9EY289",
                          className: "button",
                          children: [t("donations.oneTime"), " (EUR)"],
                        }),
                      ],
                    }),
                    S.jsxs("h3", {
                      className: "donation-subtitle",
                      children: [
                        S.jsx("img", { src: Jy, alt: "Patreon logo" }),
                        "Patreon",
                      ],
                    }),
                    S.jsx("div", {
                      className: "buttons",
                      children: S.jsxs("a", {
                        target: "_blank",
                        href: "https://patreon.com/lacvhacks",
                        className: "button",
                        children: [t("donations.monthly"), " (USD)"],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  RM = na(OM),
  LM = () => {
    const [t, e] = Hn("global");
    return (
      k.useEffect(() => {
        document.title = "LACV | Página no encontrada";
      }, []),
      S.jsx("section", {
        className: "inner-section",
        children: S.jsx("div", {
          className: "container",
          children: S.jsxs("div", {
            className: "not-found",
            children: [
              S.jsx("h1", { children: t("global.notFound") }),
              S.jsxs("p", {
                children: [
                  t("global.changedRoutes"),
                  S.jsx("br", {}),
                  t("global.lookingForCH"),
                  " ",
                  S.jsx(or, {
                    to: "/repasos-coderhouse",
                    style: { textDecoration: "underline" },
                    children: t("global.clickHere"),
                  }),
                  ".",
                ],
              }),
              S.jsxs(or, {
                to: "/",
                className: "inner-section-go-back-link",
                children: [S.jsx(Fc, {}), " ", t("global.goBack")],
              }),
            ],
          }),
        }),
      })
    );
  },
  MM = na(LM),
  AM = () => {
    const t = ta();
    return (
      k.useEffect(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }, [t]),
      S.jsxs("div", {
        className: "App",
        children: [
          S.jsx(T3, { location: t }),
          S.jsx(pM, {
            mode: "wait",
            children: S.jsxs(
              jw,
              {
                location: t,
                children: [
                  S.jsx(oi, { path: "*", element: S.jsx(MM, {}) }),
                  S.jsx(oi, { path: "/", element: S.jsx(gM, {}) }),
                  S.jsx(oi, { path: "/cursos", element: S.jsx(vM, {}) }),
                  S.jsx(oi, {
                    path: "/repasos-coderhouse",
                    element: S.jsx(_M, {}),
                  }),
                  S.jsx(oi, {
                    path: "/repasos-coderhouse/:course",
                    element: S.jsx(TM, {}),
                  }),
                  S.jsx(oi, { path: "/donaciones", element: S.jsx(RM, {}) }),
                ],
              },
              t.pathname
            ),
          }),
          S.jsx(E3, {}),
        ],
      })
    );
  },
  DM = {
    soon: "Soon",
    goBack: "Go back",
    notFound: "Page not found.",
    changedRoutes:
      "I've changed some routes, so you might want to check the menu!",
    lookingForCH:
      "If you're looking for the course reviews for Coderhouse, you can",
    clickHere: "click here",
    courseNotFound: "Course not found.",
    courseWriteToMe:
      "Write to me at lacvhacks@duck.com if you want me to upload videos from another course.",
  },
  NM = {
    home: "Home",
    courses: "Courses",
    reviews: "Review videos",
    donations: "Donations",
    notFound: "Page not found",
  },
  jM = {
    home: "Home",
    courses: "Courses",
    reviews: "Reviews",
    donations: "Donations",
    soon: "Soon",
    coderhouse: "Coderhouse",
  },
  VM = {
    hero: {
      title1: "➴I'm Luis Caicedo.",
      title2: "I create content about cibersecurity.",
      text: "I learned cybersecurity on my own and now I want to share the knowledge I gained over the years. I know it can be frustrating and difficult to move forward at times. My goal is to help you better understand the main methods of Hacking, Cracking, Cryptography, Stenography and keep knowledge free and accessible.",
    },
    stats: { subscribers: "Subscribers", videos: "Videos", views: "Views" },
    shortcuts: {
      youtube: {
        title: "YouTube",
        text: "Videos about web development, primarily covering HTML, CSS, JavaScript, and React. You'll discover tips, tricks, tutorials, and several completely free courses.",
      },
      discord: {
        title: "Discord",
        text: "Join my Discord Community, an ideal space to chat with people who are starting out or want to share information about the world of web development.",
      },
      donations: {
        title: "Donations",
        text: "If you'd like, you can support my content by making a monthly or one-time donation. This helps me continue creating more and better videos. ❤️",
      },
    },
  },
  FM = {
    title: "Review videos",
    subtitle:
      "If you're enrolled at Coderhouse, you can find review videos of their courses here.",
    goToButton: "Go to the course videos",
    courses: {
      webDevelopment: {
        title: "Web Development Course",
        topics: [
          "Prototyping",
          "HTML",
          "CSS",
          "Box Model",
          "Flexbox",
          "Grid",
          "Media Queries",
          "Pseudo-classes",
          "Pseudo-elements",
          "Transformations",
          "Animations",
          "Bootstrap",
          "Git",
          "GitHub",
          "SASS",
          "SEO",
          "Servers",
        ],
      },
      javascript: {
        title: "JavaScript Course",
        topics: [
          "Variables",
          "Loops",
          "Functions",
          "Objects",
          "Arrays",
          "DOM",
          "Events",
          "LocalStorage",
          "Libraries",
          "Asynchrony",
          "Fetch",
        ],
      },
      react: {
        title: "React Course",
        topics: [
          "JSX",
          "Components",
          "Promises",
          "Asynchrony",
          "APIs",
          "Hooks",
          "Routing",
          "Events",
          "Context",
          "Firebase",
        ],
      },
    },
  },
  IM = {
    title: "Donations",
    subtitle:
      "You can support my content by making a small monthly or one-time contribution, to help create more and better content.",
    fromArgentina: "From Argentina 🇦🇷",
    fromTheRest: "From the rest of the world 🌎",
    monthly: "Monthly donation",
    oneTime: "One-Time donation",
    monthlyOrOneTime: "Monthly or one-time donation",
    pesifies:
      "It will be converted to ARS at the time of payment, and standard taxes will be applied.",
  },
  zM = {
    global: DM,
    pages: NM,
    header: jM,
    home: VM,
    reviews: FM,
    donations: IM,
  },
  BM = {
    soon: "Próximamente",
    goBack: "Volver",
    notFound: "Página no encontrada.",
    changedRoutes:
      "Cambié algunas rutas, así que capaz querés buscar en el menú!",
    lookingForCH:
      "Si estás buscando los repasitos del curso de Coderhouse, podés hacer",
    clickHere: "clic acá",
    courseNotFound: "Curso no encontrado.",
    courseWriteToMe:
      "Escribime a lacvhacks@duck.com si querés que suba los videítos de otro curso.",
  },
  $M = {
    home: "Inicio",
    courses: "Cursos",
    reviews: "Videítos de repaso",
    donations: "Donaciones",
    notFound: "Página no encontrada",
  },
  UM = {
    home: "Inicio",
    courses: "Cursos",
    reviews: "Repasos",
    donations: "Donaciones",
    soon: "Próximamente",
    coderhouse: "Coderhouse",
  },
  HM = {
    hero: 
    {
      title1: "➴Soy Luis Caicedo.",
      title2: "Hago contenido sobre Ciberseguridad.",
      text: "¡Descubrí el mundo de la ciberseguridad por mi cuenta y estoy emocionado de compartir contigo todo lo que he aprendido! Sé que puede ser un camino desafiante, pero quiero motivarte a superar esos obstáculos. Mi objetivo es guiarte hacia una comprensión más profunda del emocionante mundo del Hacking, Cracking, Criptografía y Esteganografía. ¡Juntos, podemos hacer que el conocimiento sea libre y accesible!.",
    },
    stats: {
      subscribers: "Suscriptores",
      videos: "Videos",
      views: "Visualizaciones",
    },
    shortcuts: {
      youtube: {
        title: "YouTube",
        text: "Videítos sobre desarrollo web, principalmente de HTML, CSS, JavaScript y React. Vas a encontrar tips, truquitos, tutoriales y varios cursos totalmente gratuitos.",
      },
      discord: {
        title: "Discord",
        text: "Unite a mi Comunidad de Discord, un espacio ideal para charlar con personas que están comenzando o tienen ganas de compartir información sobre el mundo del desarrollo web.",
      },
      donations: {
        title: "Donaciones",
        text: "Si querés, podés apoyar mi contenido haciendo una donación mensual o único. Esto me ayuda a seguir creando más y mejores videos. ❤️",
      },
      motivacion: {
        title: "Motivación",
        text: "📦 No somos cajas vacias por llenar, somos fuego por encender. 🔥",
      },
    },
  },
  WM = {
    title: "Videítos de repaso",
    subtitle:
      "Si estás cursando en Coderhouse, podés encontrar videítos de repaso de sus cursos acá.",
    goToButton: "Ir a los videítos del curso",
    courses: {
      webDevelopment: {
        title: "Curso de Desarrollo Web",
        topics: [
          "Prototipado",
          "HTML",
          "CSS",
          "Box Model",
          "Flexbox",
          "Grid",
          "Media queries",
          "Pseudoclases",
          "Pseudoelementos",
          "Transformaciones",
          "Animaciones",
          "Bootstrap",
          "Git",
          "GitHub",
          "SASS",
          "SEO",
          "Servidores",
        ],
      },
      javascript: {
        title: "Curso de JavaScript",
        topics: [
          "Variables",
          "Ciclos",
          "Funciones",
          "Objetos",
          "Arrays",
          "DOM",
          "Eventos",
          "LocalStorage",
          "Librerías",
          "Asincronía",
          "Fetch",
        ],
      },
      react: {
        title: "Curso de React",
        topics: [
          "JSX",
          "Componentes",
          "Promesas",
          "Asincronía",
          "APIs",
          "Hooks",
          "Routing",
          "Eventos",
          "Context",
          "Firebase",
        ],
      },
    },
  },
  YM = {
    title: "Donaciones",
    subtitle:
      "Podés apoyar mi contenido haciendo un pequeño aporte mensual o único, para poder hacer más y mejor contenido.",
    fromArgentina: "Desde Argentina 🇦🇷",
    fromTheRest: "Desde el resto del mundo 🌎",
    monthly: "Donación mensual",
    oneTime: "Donación única",
    monthlyOrOneTime: "Donación mensual o única",
    pesifies:
      "Se pesifica al momento del cobro y se cobran los típicos impuestos.",
  },
  GM = {
    global: BM,
    pages: $M,
    header: UM,
    home: HM,
    reviews: WM,
    donations: YM,
  },
  KM = {
    soon: "Em breve",
    goBack: "Voltar",
    notFound: "Página não encontrada.",
    changedRoutes: "Mudei algumas rotas, talvez você queira verificar o menu!",
    lookingForCH:
      "Se você está procurando as avaliações dos cursos de Coderhouse, ",
    clickHere: "clique aqui",
    courseNotFound: "Curso não encontrado.",
    courseWriteToMe:
      "Escreva para mim em lacvhacks@duck.com se quiser que eu carregue vídeos de outro curso.",
  },
  XM = {
    home: "Início",
    courses: "Cursos",
    reviews: "Vídeos de avaliação",
    donations: "Doações",
    notFound: "Página não encontrada",
  },
  QM = {
    home: "Início",
    courses: "Cursos",
    reviews: "Avaliações",
    donations: "Doações",
    soon: "Em breve",
    coderhouse: "Coderhouse",
  },
  qM = {
    hero: {
      title1: "➴Sou Luis Caicedo.",
      title2: "Crio conteúdo sobre cibersecurity.",
      text: "Aprendi cibersegurança por conta própria e agora quero compartilhar o conhecimento que adquiri ao longo dos anos. Sei que pode ser frustrante e difícil avançar às vezes. Meu objetivo é ajudá-lo a entender melhor os principais métodos de Hacking, Cracking, Criptografia, Estenografia e manter o conhecimento livre e acessível.",
    },
    stats: {
      subscribers: "Inscritos",
      videos: "Vídeos",
      views: "Visualizações",
    },
    shortcuts: {
      youtube: {
        title: "YouTube",
        text: "Vídeos sobre desenvolvimento web, cobrindo principalmente HTML, CSS, JavaScript e React. Você descobrirá dicas, truques, tutoriais e vários cursos completamente gratuitos.",
      },
      discord: {
        title: "Discord",
        text: "Junte-se à minha Comunidade no Discord, um espaço ideal para conversar com pessoas que estão começando ou desejam compartilhar informações sobre o mundo do desenvolvimento web.",
      },
      donations: {
        title: "Doações",
        text: "Se desejar, você pode apoiar meu conteúdo fazendo uma doação mensal ou única. Isso me ajuda a continuar criando mais e melhores vídeos. ❤️",
      },
    },
  },
  JM = {
    title: "Vídeos de avaliação",
    subtitle:
      "Se você está matriculado em Coderhouse, pode encontrar vídeos de avaliação de seus cursos aqui.",
    goToButton: "Ir para os vídeos do curso",
    courses: {
      webDevelopment: {
        title: "Curso de Desenvolvimento Web",
        topics: [
          "Prototipagem",
          "HTML",
          "CSS",
          "Box Model",
          "Flexbox",
          "Grid",
          "Media Queries",
          "Pseudo-classes",
          "Pseudo-elementos",
          "Transformações",
          "Animações",
          "Bootstrap",
          "Git",
          "GitHub",
          "SASS",
          "SEO",
          "Servidores",
        ],
      },
      javascript: {
        title: "Curso de JavaScript",
        topics: [
          "Variáveis",
          "Loops",
          "Funções",
          "Objetos",
          "Arrays",
          "DOM",
          "Eventos",
          "LocalStorage",
          "Bibliotecas",
          "Assincronia",
          "Fetch",
        ],
      },
      react: {
        title: "Curso de React",
        topics: [
          "JSX",
          "Componentes",
          "Promessas",
          "Assincronia",
          "APIs",
          "Hooks",
          "Routing",
          "Eventos",
          "Contexto",
          "Firebase",
        ],
      },
    },
  },
  ZM = {
    title: "Doações",
    subtitle:
      "Você pode apoiar meu conteúdo fazendo uma pequena contribuição mensal ou única, para ajudar a criar mais e melhor conteúdo.",
    fromArgentina: "Da Argentina 🇦🇷",
    fromTheRest: "Do resto do mundo 🌎",
    monthly: "Doação mensal",
    oneTime: "Doação única",
    monthlyOrOneTime: "Doação mensal ou única",
    pesifies:
      "Será convertido para ARS no momento do pagamento e serão aplicados impostos padrão.",
  },
  e4 = {
    global: KM,
    pages: XM,
    header: QM,
    home: qM,
    reviews: JM,
    donations: ZM,
  },
  t4 = {
    type: "logger",
    log(t) {
      this.output("log", t);
    },
    warn(t) {
      this.output("warn", t);
    },
    error(t) {
      this.output("error", t);
    },
    output(t, e) {
      console && console[t] && console[t].apply(console, e);
    },
  };
class qc {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, n);
  }
  init(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = e || t4),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, n, r, i) {
    return i && !this.debug
      ? null
      : (typeof e[0] == "string" && (e[0] = `${r}${this.prefix} ${e[0]}`),
        this.logger[n](e));
  }
  create(e) {
    return new qc(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new qc(this.logger, e)
    );
  }
}
var _r = new qc();
class Af {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return (
      e.split(" ").forEach((r) => {
        (this.observers[r] = this.observers[r] || []),
          this.observers[r].push(n);
      }),
      this
    );
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e];
        return;
      }
      this.observers[e] = this.observers[e].filter((r) => r !== n);
    }
  }
  emit(e) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    this.observers[e] &&
      [].concat(this.observers[e]).forEach((o) => {
        o(...r);
      }),
      this.observers["*"] &&
        [].concat(this.observers["*"]).forEach((o) => {
          o.apply(o, [e, ...r]);
        });
  }
}
function _a() {
  let t, e;
  const n = new Promise((r, i) => {
    (t = r), (e = i);
  });
  return (n.resolve = t), (n.reject = e), n;
}
function Zy(t) {
  return t == null ? "" : "" + t;
}
function n4(t, e, n) {
  t.forEach((r) => {
    e[r] && (n[r] = e[r]);
  });
}
function Ug(t, e, n) {
  function r(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function i() {
    return !t || typeof t == "string";
  }
  const s = typeof e != "string" ? [].concat(e) : e.split(".");
  for (; s.length > 1; ) {
    if (i()) return {};
    const o = r(s.shift());
    !t[o] && n && (t[o] = new n()),
      Object.prototype.hasOwnProperty.call(t, o) ? (t = t[o]) : (t = {});
  }
  return i() ? {} : { obj: t, k: r(s.shift()) };
}
function ev(t, e, n) {
  const { obj: r, k: i } = Ug(t, e, Object);
  r[i] = n;
}
function r4(t, e, n, r) {
  const { obj: i, k: s } = Ug(t, e, Object);
  (i[s] = i[s] || []), r && (i[s] = i[s].concat(n)), r || i[s].push(n);
}
function Jc(t, e) {
  const { obj: n, k: r } = Ug(t, e);
  if (n) return n[r];
}
function i4(t, e, n) {
  const r = Jc(t, n);
  return r !== void 0 ? r : Jc(e, n);
}
function Q2(t, e, n) {
  for (const r in e)
    r !== "__proto__" &&
      r !== "constructor" &&
      (r in t
        ? typeof t[r] == "string" ||
          t[r] instanceof String ||
          typeof e[r] == "string" ||
          e[r] instanceof String
          ? n && (t[r] = e[r])
          : Q2(t[r], e[r], n)
        : (t[r] = e[r]));
  return t;
}
function Js(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var s4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function o4(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, (e) => s4[e]) : t;
}
const a4 = [" ", ",", "?", "!", ";"];
function l4(t, e, n) {
  (e = e || ""), (n = n || "");
  const r = a4.filter((o) => e.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0) return !0;
  const i = new RegExp(`(${r.map((o) => (o === "?" ? "\\?" : o)).join("|")})`);
  let s = !i.test(t);
  if (!s) {
    const o = t.indexOf(n);
    o > 0 && !i.test(t.substring(0, o)) && (s = !0);
  }
  return s;
}
function Zc(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!t) return;
  if (t[e]) return t[e];
  const r = e.split(n);
  let i = t;
  for (let s = 0; s < r.length; ++s) {
    if (!i || (typeof i[r[s]] == "string" && s + 1 < r.length)) return;
    if (i[r[s]] === void 0) {
      let o = 2,
        a = r.slice(s, s + o).join(n),
        l = i[a];
      for (; l === void 0 && r.length > s + o; )
        o++, (a = r.slice(s, s + o).join(n)), (l = i[a]);
      if (l === void 0) return;
      if (l === null) return null;
      if (e.endsWith(a)) {
        if (typeof l == "string") return l;
        if (a && typeof l[a] == "string") return l[a];
      }
      const u = r.slice(s + o).join(n);
      return u ? Zc(l, u, n) : void 0;
    }
    i = i[r[s]];
  }
  return i;
}
function ef(t) {
  return t && t.indexOf("_") > 0 ? t.replace("_", "-") : t;
}
class tv extends Af {
  constructor(e) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = e || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      o =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a = [e, n];
    r && typeof r != "string" && (a = a.concat(r)),
      r && typeof r == "string" && (a = a.concat(s ? r.split(s) : r)),
      e.indexOf(".") > -1 && (a = e.split("."));
    const l = Jc(this.data, a);
    return l || !o || typeof r != "string"
      ? l
      : Zc(this.data && this.data[e] && this.data[e][n], r, s);
  }
  addResource(e, n, r, i) {
    let s =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const o =
      s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [e, n];
    r && (a = a.concat(o ? r.split(o) : r)),
      e.indexOf(".") > -1 && ((a = e.split(".")), (i = n), (n = a[1])),
      this.addNamespaces(n),
      ev(this.data, a, i),
      s.silent || this.emit("added", e, n, r, i);
  }
  addResources(e, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const s in r)
      (typeof r[s] == "string" ||
        Object.prototype.toString.apply(r[s]) === "[object Array]") &&
        this.addResource(e, n, s, r[s], { silent: !0 });
    i.silent || this.emit("added", e, n, r);
  }
  addResourceBundle(e, n, r, i, s) {
    let o =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1 },
      a = [e, n];
    e.indexOf(".") > -1 && ((a = e.split(".")), (i = r), (r = n), (n = a[1])),
      this.addNamespaces(n);
    let l = Jc(this.data, a) || {};
    i ? Q2(l, r, s) : (l = { ...l, ...r }),
      ev(this.data, a, l),
      o.silent || this.emit("added", e, n, r);
  }
  removeResourceBundle(e, n) {
    this.hasResourceBundle(e, n) && delete this.data[e][n],
      this.removeNamespaces(n),
      this.emit("removed", e, n);
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0;
  }
  getResourceBundle(e, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(e, n) }
        : this.getResource(e, n)
    );
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var q2 = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, n, r, i) {
    return (
      t.forEach((s) => {
        this.processors[s] && (e = this.processors[s].process(e, n, r, i));
      }),
      e
    );
  },
};
const nv = {};
class tf extends Af {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      n4(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        e,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = _r.create("translator"));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (e == null) return !1;
    const r = this.resolve(e, n);
    return r && r.res !== void 0;
  }
  extractFromKey(e, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let s = n.ns || this.options.defaultNS || [];
    const o = r && e.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !l4(e, r, i);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: e, namespaces: s };
      const u = e.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (s = u.shift()),
        (e = u.join(i));
    }
    return typeof s == "string" && (s = [s]), { key: e, namespaces: s };
  }
  translate(e, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      e == null)
    )
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      s =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: o, namespaces: a } = this.extractFromKey(e[e.length - 1], n),
      l = a[a.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const x = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${l}${x}${o}`,
              usedKey: o,
              exactUsedKey: o,
              usedLng: u,
              usedNS: l,
            }
          : `${l}${x}${o}`;
      }
      return i
        ? { res: o, usedKey: o, exactUsedKey: o, usedLng: u, usedNS: l }
        : o;
    }
    const d = this.resolve(e, n);
    let f = d && d.res;
    const h = (d && d.usedKey) || o,
      m = (d && d.exactUsedKey) || o,
      g = Object.prototype.toString.apply(f),
      _ = ["[object Number]", "[object Function]", "[object RegExp]"],
      v = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      p &&
      f &&
      typeof f != "string" &&
      typeof f != "boolean" &&
      typeof f != "number" &&
      _.indexOf(g) < 0 &&
      !(typeof v == "string" && g === "[object Array]")
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const x = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(h, f, { ...n, ns: a })
          : `key '${o} (${this.language})' returned an object instead of string.`;
        return i ? ((d.res = x), d) : x;
      }
      if (s) {
        const x = g === "[object Array]",
          w = x ? [] : {},
          T = x ? m : h;
        for (const C in f)
          if (Object.prototype.hasOwnProperty.call(f, C)) {
            const E = `${T}${s}${C}`;
            (w[C] = this.translate(E, { ...n, joinArrays: !1, ns: a })),
              w[C] === E && (w[C] = f[C]);
          }
        f = w;
      }
    } else if (p && typeof v == "string" && g === "[object Array]")
      (f = f.join(v)), f && (f = this.extendTranslation(f, e, n, r));
    else {
      let x = !1,
        w = !1;
      const T = n.count !== void 0 && typeof n.count != "string",
        C = tf.hasDefaultValue(n),
        E = T ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        b =
          n.ordinal && T
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        O = n[`defaultValue${E}`] || n[`defaultValue${b}`] || n.defaultValue;
      !this.isValidLookup(f) && C && ((x = !0), (f = O)),
        this.isValidLookup(f) || ((w = !0), (f = o));
      const A =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          w
            ? void 0
            : f,
        H = C && O !== f && this.options.updateMissing;
      if (w || x || H) {
        if (
          (this.logger.log(H ? "updateKey" : "missingKey", u, l, o, H ? O : f),
          s)
        ) {
          const j = this.resolve(o, { ...n, keySeparator: !1 });
          j &&
            j.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let F = [];
        const I = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && I && I[0])
          for (let j = 0; j < I.length; j++) F.push(I[j]);
        else
          this.options.saveMissingTo === "all"
            ? (F = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : F.push(n.lng || this.language);
        const W = (j, L, N) => {
          const P = C && N !== f ? N : A;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(j, l, L, P, H, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(j, l, L, P, H, n),
            this.emit("missingKey", j, l, L, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && T
            ? F.forEach((j) => {
                this.pluralResolver.getSuffixes(j, n).forEach((L) => {
                  W([j], o + L, n[`defaultValue${L}`] || O);
                });
              })
            : W(F, o, O));
      }
      (f = this.extendTranslation(f, e, n, d, r)),
        w &&
          f === o &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${l}:${o}`),
        (w || x) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (f = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o,
                x ? f : void 0
              ))
            : (f = this.options.parseMissingKeyHandler(f)));
    }
    return i ? ((d.res = f), d) : f;
  }
  extendTranslation(e, n, r, i, s) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        typeof e == "string" &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = e.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (d = { ...this.options.interpolation.defaultVariables, ...d }),
        (e = this.interpolator.interpolate(e, d, r.lng || this.language, r)),
        u)
      ) {
        const f = e.match(this.interpolator.nestingRegexp),
          h = f && f.length;
        c < h && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        i &&
        i.res &&
        (r.lng = i.usedLng),
        r.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            function () {
              for (
                var f = arguments.length, h = new Array(f), m = 0;
                m < f;
                m++
              )
                h[m] = arguments[m];
              return s && s[0] === h[0] && !r.context
                ? (o.logger.warn(
                    `It seems you are nesting recursively key: ${h[0]} in key: ${n[0]}`
                  ),
                  null)
                : o.translate(...h, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      l = typeof a == "string" ? [a] : a;
    return (
      e != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (e = q2.handle(
          l,
          e,
          n,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: i, ...r }
            : r,
          this
        )),
      e
    );
  }
  resolve(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      s,
      o,
      a;
    return (
      typeof e == "string" && (e = [e]),
      e.forEach((l) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          c = u.key;
        i = c;
        let d = u.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && typeof n.count != "string",
          h =
            f &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          m =
            n.context !== void 0 &&
            (typeof n.context == "string" || typeof n.context == "number") &&
            n.context !== "",
          g = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        d.forEach((_) => {
          this.isValidLookup(r) ||
            ((a = _),
            !nv[`${g[0]}-${_}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((nv[`${g[0]}-${_}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${g.join(
                  ", "
                )}" won't get resolved as namespace "${a}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            g.forEach((v) => {
              if (this.isValidLookup(r)) return;
              o = v;
              const p = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(p, c, v, _, n);
              else {
                let x;
                f && (x = this.pluralResolver.getSuffix(v, n.count, n));
                const w = `${this.options.pluralSeparator}zero`,
                  T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (p.push(c + x),
                    n.ordinal &&
                      x.indexOf(T) === 0 &&
                      p.push(c + x.replace(T, this.options.pluralSeparator)),
                    h && p.push(c + w)),
                  m)
                ) {
                  const C = `${c}${this.options.contextSeparator}${n.context}`;
                  p.push(C),
                    f &&
                      (p.push(C + x),
                      n.ordinal &&
                        x.indexOf(T) === 0 &&
                        p.push(C + x.replace(T, this.options.pluralSeparator)),
                      h && p.push(C + w));
                }
              }
              let y;
              for (; (y = p.pop()); )
                this.isValidLookup(r) ||
                  ((s = y), (r = this.getResource(v, _, y, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: s, usedLng: o, usedNS: a }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === "")
    );
  }
  getResource(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(e, n, r, i)
      : this.resourceStore.getResource(e, n, r, i);
  }
  static hasDefaultValue(e) {
    const n = "defaultValue";
    for (const r in e)
      if (
        Object.prototype.hasOwnProperty.call(e, r) &&
        n === r.substring(0, n.length) &&
        e[r] !== void 0
      )
        return !0;
    return !1;
  }
}
function Fd(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
class rv {
  constructor(e) {
    (this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = _r.create("languageUtils"));
  }
  getScriptPartFromCode(e) {
    if (((e = ef(e)), !e || e.indexOf("-") < 0)) return null;
    const n = e.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (((e = ef(e)), !e || e.indexOf("-") < 0)) return e;
    const n = e.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = e.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Fd(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Fd(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = Fd(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let n;
    return (
      e.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        e.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((s) => {
            if (s === i) return s;
            if (
              !(s.indexOf("-") < 0 && i.indexOf("-") < 0) &&
              s.indexOf(i) === 0
            )
              return s;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (
      (typeof e == "function" && (e = e(n)),
      typeof e == "string" && (e = [e]),
      Object.prototype.toString.apply(e) === "[object Array]")
    )
      return e;
    if (!n) return e.default || [];
    let r = e[n];
    return (
      r || (r = e[this.getScriptPartFromCode(n)]),
      r || (r = e[this.formatLanguageCode(n)]),
      r || (r = e[this.getLanguagePartFromCode(n)]),
      r || (r = e.default),
      r || []
    );
  }
  toResolveHierarchy(e, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], e),
      i = [],
      s = (o) => {
        o &&
          (this.isSupportedCode(o)
            ? i.push(o)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${o}`
              ));
      };
    return (
      typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            s(this.formatLanguageCode(e)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            s(this.getScriptPartFromCode(e)),
          this.options.load !== "currentOnly" &&
            s(this.getLanguagePartFromCode(e)))
        : typeof e == "string" && s(this.formatLanguageCode(e)),
      r.forEach((o) => {
        i.indexOf(o) < 0 && s(this.formatLanguageCode(o));
      }),
      i
    );
  }
}
let u4 = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  c4 = {
    1: function (t) {
      return +(t > 1);
    },
    2: function (t) {
      return +(t != 1);
    },
    3: function (t) {
      return 0;
    },
    4: function (t) {
      return t % 10 == 1 && t % 100 != 11
        ? 0
        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
        ? 1
        : 2;
    },
    5: function (t) {
      return t == 0
        ? 0
        : t == 1
        ? 1
        : t == 2
        ? 2
        : t % 100 >= 3 && t % 100 <= 10
        ? 3
        : t % 100 >= 11
        ? 4
        : 5;
    },
    6: function (t) {
      return t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2;
    },
    7: function (t) {
      return t == 1
        ? 0
        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
        ? 1
        : 2;
    },
    8: function (t) {
      return t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3;
    },
    9: function (t) {
      return +(t >= 2);
    },
    10: function (t) {
      return t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4;
    },
    11: function (t) {
      return t == 1 || t == 11
        ? 0
        : t == 2 || t == 12
        ? 1
        : t > 2 && t < 20
        ? 2
        : 3;
    },
    12: function (t) {
      return +(t % 10 != 1 || t % 100 == 11);
    },
    13: function (t) {
      return +(t !== 0);
    },
    14: function (t) {
      return t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3;
    },
    15: function (t) {
      return t % 10 == 1 && t % 100 != 11
        ? 0
        : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20)
        ? 1
        : 2;
    },
    16: function (t) {
      return t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2;
    },
    17: function (t) {
      return t == 1 || (t % 10 == 1 && t % 100 != 11) ? 0 : 1;
    },
    18: function (t) {
      return t == 0 ? 0 : t == 1 ? 1 : 2;
    },
    19: function (t) {
      return t == 1
        ? 0
        : t == 0 || (t % 100 > 1 && t % 100 < 11)
        ? 1
        : t % 100 > 10 && t % 100 < 20
        ? 2
        : 3;
    },
    20: function (t) {
      return t == 1 ? 0 : t == 0 || (t % 100 > 0 && t % 100 < 20) ? 1 : 2;
    },
    21: function (t) {
      return t % 100 == 1
        ? 1
        : t % 100 == 2
        ? 2
        : t % 100 == 3 || t % 100 == 4
        ? 3
        : 0;
    },
    22: function (t) {
      return t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3;
    },
  };
const f4 = ["v1", "v2", "v3"],
  d4 = ["v4"],
  iv = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function h4() {
  const t = {};
  return (
    u4.forEach((e) => {
      e.lngs.forEach((n) => {
        t[n] = { numbers: e.nr, plurals: c4[e.fc] };
      });
    }),
    t
  );
}
class p4 {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = e),
      (this.options = n),
      (this.logger = _r.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        d4.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = h4());
  }
  addRule(e, n) {
    this.rules[e] = n;
  }
  getRule(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ef(e), {
          type: n.ordinal ? "ordinal" : "cardinal",
        });
      } catch {
        return;
      }
    return (
      this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    );
  }
  needsPlural(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((i) => `${n}${i}`);
  }
  getSuffixes(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, s) => iv[i] - iv[s])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${i}`
            )
        : r.numbers.map((i) => this.getSuffix(e, i, n))
      : [];
  }
  getSuffix(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(e, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, n) {
    const r = e.noAbs ? e.plurals(n) : e.plurals(Math.abs(n));
    let i = e.numbers[r];
    this.options.simplifyPluralSuffix &&
      e.numbers.length === 2 &&
      e.numbers[0] === 1 &&
      (i === 2 ? (i = "plural") : i === 1 && (i = ""));
    const s = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === "v1"
      ? i === 1
        ? ""
        : typeof i == "number"
        ? `_plural_${i.toString()}`
        : s()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          e.numbers.length === 2 &&
          e.numbers[0] === 1)
      ? s()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !f4.includes(this.options.compatibilityJSON);
  }
}
function sv(t, e, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    s = i4(t, e, n);
  return (
    !s &&
      i &&
      typeof n == "string" &&
      ((s = Zc(t, n, r)), s === void 0 && (s = Zc(e, n, r))),
    s
  );
}
class m4 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = _r.create("interpolator")),
      (this.options = e),
      (this.format = (e.interpolation && e.interpolation.format) || ((n) => n)),
      this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const n = e.interpolation;
    (this.escape = n.escape !== void 0 ? n.escape : o4),
      (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
      (this.useRawValueToEscape =
        n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
      (this.prefix = n.prefix ? Js(n.prefix) : n.prefixEscaped || "{{"),
      (this.suffix = n.suffix ? Js(n.suffix) : n.suffixEscaped || "}}"),
      (this.formatSeparator = n.formatSeparator
        ? n.formatSeparator
        : n.formatSeparator || ","),
      (this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || ""),
      (this.nestingPrefix = n.nestingPrefix
        ? Js(n.nestingPrefix)
        : n.nestingPrefixEscaped || Js("$t(")),
      (this.nestingSuffix = n.nestingSuffix
        ? Js(n.nestingSuffix)
        : n.nestingSuffixEscaped || Js(")")),
      (this.nestingOptionsSeparator = n.nestingOptionsSeparator
        ? n.nestingOptionsSeparator
        : n.nestingOptionsSeparator || ","),
      (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
      (this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(e, "g");
    const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(n, "g");
    const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(r, "g");
  }
  interpolate(e, n, r, i) {
    let s, o, a;
    const l =
      (this.options &&
        this.options.interpolation &&
        this.options.interpolation.defaultVariables) ||
      {};
    function u(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const c = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const p = sv(
          n,
          l,
          m,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        );
        return this.alwaysFormat
          ? this.format(p, void 0, r, { ...i, ...n, interpolationkey: m })
          : p;
      }
      const g = m.split(this.formatSeparator),
        _ = g.shift().trim(),
        v = g.join(this.formatSeparator).trim();
      return this.format(
        sv(
          n,
          l,
          _,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        ),
        v,
        r,
        { ...i, ...n, interpolationkey: _ }
      );
    };
    this.resetRegExp();
    const d =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (m) => u(m) },
        {
          regex: this.regexp,
          safeValue: (m) => (this.escapeValue ? u(this.escape(m)) : u(m)),
        },
      ].forEach((m) => {
        for (a = 0; (s = m.regex.exec(e)); ) {
          const g = s[1].trim();
          if (((o = c(g)), o === void 0))
            if (typeof d == "function") {
              const v = d(e, s, i);
              o = typeof v == "string" ? v : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, g)) o = "";
            else if (f) {
              o = s[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${g} for interpolating ${e}`
              ),
                (o = "");
          else typeof o != "string" && !this.useRawValueToEscape && (o = Zy(o));
          const _ = m.safeValue(o);
          if (
            ((e = e.replace(s[0], _)),
            f
              ? ((m.regex.lastIndex += o.length),
                (m.regex.lastIndex -= s[0].length))
              : (m.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      s,
      o;
    function a(l, u) {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const d = l.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      (l = d[0]), (f = this.interpolate(f, o));
      const h = f.match(/'/g),
        m = f.match(/"/g);
      ((h && h.length % 2 === 0 && !m) || m.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'));
      try {
        (o = JSON.parse(f)), u && (o = { ...u, ...o });
      } catch (g) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            g
          ),
          `${l}${c}${f}`
        );
      }
      return delete o.defaultValue, l;
    }
    for (; (i = this.nestingRegexp.exec(e)); ) {
      let l = [];
      (o = { ...r }),
        (o = o.replace && typeof o.replace != "string" ? o.replace : o),
        (o.applyPostProcessor = !1),
        delete o.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((d) => d.trim());
        (i[1] = c.shift()), (l = c), (u = !0);
      }
      if (
        ((s = n(a.call(this, i[1].trim(), o), o)),
        s && i[0] === e && typeof s != "string")
      )
        return s;
      typeof s != "string" && (s = Zy(s)),
        s ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),
          (s = "")),
        u &&
          (s = l.reduce(
            (c, d) =>
              this.format(c, d, r.lng, { ...r, interpolationkey: i[1].trim() }),
            s.trim()
          )),
        (e = e.replace(i[0], s)),
        (this.regexp.lastIndex = 0);
    }
    return e;
  }
}
function g4(t) {
  let e = t.toLowerCase().trim();
  const n = {};
  if (t.indexOf("(") > -1) {
    const r = t.split("(");
    e = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    e === "currency" && i.indexOf(":") < 0
      ? n.currency || (n.currency = i.trim())
      : e === "relativetime" && i.indexOf(":") < 0
      ? n.range || (n.range = i.trim())
      : i.split(";").forEach((o) => {
          if (!o) return;
          const [a, ...l] = o.split(":"),
            u = l
              .join(":")
              .trim()
              .replace(/^'+|'+$/g, "");
          n[a.trim()] || (n[a.trim()] = u),
            u === "false" && (n[a.trim()] = !1),
            u === "true" && (n[a.trim()] = !0),
            isNaN(u) || (n[a.trim()] = parseInt(u, 10));
        });
  }
  return { formatName: e, formatOptions: n };
}
function Zs(t) {
  const e = {};
  return function (r, i, s) {
    const o = i + JSON.stringify(s);
    let a = e[o];
    return a || ((a = t(ef(i), s)), (e[o] = a)), a(r);
  };
}
class y4 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = _r.create("formatter")),
      (this.options = e),
      (this.formats = {
        number: Zs((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (s) => i.format(s);
        }),
        currency: Zs((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (s) => i.format(s);
        }),
        datetime: Zs((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (s) => i.format(s);
        }),
        relativetime: Zs((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (s) => i.format(s, r.range || "day");
        }),
        list: Zs((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (s) => i.format(s);
        }),
      }),
      this.init(e);
  }
  init(e) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ",";
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n;
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = Zs(n);
  }
  format(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, l) => {
      const { formatName: u, formatOptions: c } = g4(l);
      if (this.formats[u]) {
        let d = a;
        try {
          const f =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            h = f.locale || f.lng || i.locale || i.lng || r;
          d = this.formats[u](a, h, { ...c, ...i, ...f });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, e);
  }
}
function v4(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
class x4 extends Af {
  constructor(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = e),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = _r.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(e, n, r, i) {
    const s = {},
      o = {},
      a = {},
      l = {};
    return (
      e.forEach((u) => {
        let c = !0;
        n.forEach((d) => {
          const f = `${u}|${d}`;
          !r.reload && this.store.hasResourceBundle(u, d)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? o[f] === void 0 && (o[f] = !0)
                : ((this.state[f] = 1),
                  (c = !1),
                  o[f] === void 0 && (o[f] = !0),
                  s[f] === void 0 && (s[f] = !0),
                  l[d] === void 0 && (l[d] = !0)));
        }),
          c || (a[u] = !0);
      }),
      (Object.keys(s).length || Object.keys(o).length) &&
        this.queue.push({
          pending: o,
          pendingCount: Object.keys(o).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(s),
        pending: Object.keys(o),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(e, n, r) {
    const i = e.split("|"),
      s = i[0],
      o = i[1];
    n && this.emit("failedLoading", s, o, n),
      r && this.store.addResourceBundle(s, o, r),
      (this.state[e] = n ? -1 : 2);
    const a = {};
    this.queue.forEach((l) => {
      r4(l.loaded, [s], o),
        v4(l, e),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            a[u] || (a[u] = {});
            const c = l.loaded[u];
            c.length &&
              c.forEach((d) => {
                a[u][d] === void 0 && (a[u][d] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit("loaded", a),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      s =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: r,
        tried: i,
        wait: s,
        callback: o,
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, n, r, i + 1, s * 2, o);
          }, s);
          return;
        }
        o(u, c);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, n);
        u && typeof u.then == "function"
          ? u.then((c) => a(null, c)).catch(a)
          : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(e, n, a);
  }
  prepareLoading(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        i && i()
      );
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)),
      typeof n == "string" && (n = [n]);
    const s = this.queueLoad(e, n, r, i);
    if (!s.toLoad.length) return s.pending.length || i(), null;
    s.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, n, r) {
    this.prepareLoading(e, n, {}, r);
  }
  reload(e, n, r) {
    this.prepareLoading(e, n, { reload: !0 }, r);
  }
  loadOne(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = e.split("|"),
      i = r[0],
      s = r[1];
    this.read(i, s, "read", void 0, void 0, (o, a) => {
      o &&
        this.logger.warn(
          `${n}loading namespace ${s} for language ${i} failed`,
          o
        ),
        !o &&
          a &&
          this.logger.log(`${n}loaded namespace ${s} for language ${i}`, a),
        this.loaded(e, o, a);
    });
  }
  saveMissing(e, n, r, i, s) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = { ...o, isUpdate: s },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(e, n, r, i, l)) : (c = u(e, n, r, i)),
              c && typeof c.then == "function"
                ? c.then((d) => a(null, d)).catch(a)
                : a(null, c);
          } catch (c) {
            a(c);
          }
        else u(e, n, r, i, a, l);
      }
      !e || !e[0] || this.store.addResource(e[0], n, r, i);
    }
  }
}
function ov() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (e) {
      let n = {};
      if (
        (typeof e[1] == "object" && (n = e[1]),
        typeof e[1] == "string" && (n.defaultValue = e[1]),
        typeof e[2] == "string" && (n.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object")
      ) {
        const r = e[3] || e[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (t, e, n, r) => t,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function av(t) {
  return (
    typeof t.ns == "string" && (t.ns = [t.ns]),
    typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]),
    typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]),
    t.supportedLngs &&
      t.supportedLngs.indexOf("cimode") < 0 &&
      (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
    t
  );
}
function Ru() {}
function _4(t) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
}
class Ml extends Af {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = av(e)),
      (this.services = {}),
      (this.logger = _r),
      (this.modules = { external: [] }),
      _4(this),
      n && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(e, n), this;
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init() {
    var e = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == "string"
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = ov();
    (this.options = { ...i, ...this.options, ...av(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    function s(c) {
      return c ? (typeof c == "function" ? new c() : c) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? _r.init(s(this.modules.logger), this.options)
        : _r.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < "u" && (c = y4);
      const d = new rv(this.options);
      this.store = new tv(this.options.resources, this.options);
      const f = this.services;
      (f.logger = _r),
        (f.resourceStore = this.store),
        (f.languageUtils = d),
        (f.pluralResolver = new p4(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((f.formatter = s(c)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter
          ))),
        (f.interpolator = new m4(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new x4(
          s(this.modules.backend),
          f.resourceStore,
          f,
          this.options
        )),
        f.backendConnector.on("*", function (h) {
          for (
            var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), _ = 1;
            _ < m;
            _++
          )
            g[_ - 1] = arguments[_];
          e.emit(h, ...g);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = s(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = s(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new tf(this.services, this.options)),
        this.translator.on("*", function (h) {
          for (
            var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), _ = 1;
            _ < m;
            _++
          )
            g[_ - 1] = arguments[_];
          e.emit(h, ...g);
        }),
        this.modules.external.forEach((h) => {
          h.init && h.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Ru),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return e.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return e.store[c](...arguments), e;
        };
      });
    const l = _a(),
      u = () => {
        const c = (d, f) => {
          this.isInitialized &&
            !this.initializedStoreOnce &&
            this.logger.warn(
              "init: i18next is already initialized. You should call init just once!"
            ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            l.resolve(f),
            r(d, f);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      l
    );
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ru;
    const i = typeof e == "string" ? e : this.language;
    if (
      (typeof e == "function" && (r = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const s = [],
        o = (a) => {
          if (!a || a === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
            u !== "cimode" && s.indexOf(u) < 0 && s.push(u);
          });
        };
      i
        ? o(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => o(l)),
        this.options.preload && this.options.preload.forEach((a) => o(a)),
        this.services.backendConnector.load(s, this.options.ns, (a) => {
          !a &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(a);
        });
    } else r(null);
  }
  reloadResources(e, n, r) {
    const i = _a();
    return (
      e || (e = this.languages),
      n || (n = this.options.ns),
      r || (r = Ru),
      this.services.backendConnector.reload(e, n, (s) => {
        i.resolve(), r(s);
      }),
      i
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!e.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      e.type === "backend" && (this.modules.backend = e),
      (e.type === "logger" || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === "languageDetector" && (this.modules.languageDetector = e),
      e.type === "i18nFormat" && (this.modules.i18nFormat = e),
      e.type === "postProcessor" && q2.addPostProcessor(e),
      e.type === "formatter" && (this.modules.formatter = e),
      e.type === "3rdParty" && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(e, n) {
    var r = this;
    this.isLanguageChangingTo = e;
    const i = _a();
    this.emit("languageChanging", e);
    const s = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      o = (l, u) => {
        u
          ? (s(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      a = (l) => {
        !e && !l && this.services.languageDetector && (l = []);
        const u =
          typeof l == "string"
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || s(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            o(c, u);
          });
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !e &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(a)
          : this.services.languageDetector.detect(a)
        : a(e),
      i
    );
  }
  getFixedT(e, n, r) {
    var i = this;
    const s = function (o, a) {
      let l;
      if (typeof a != "object") {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2;
          d < u;
          d++
        )
          c[d - 2] = arguments[d];
        l = i.options.overloadTranslationOptionHandler([o, a].concat(c));
      } else l = { ...a };
      (l.lng = l.lng || s.lng),
        (l.lngs = l.lngs || s.lngs),
        (l.ns = l.ns || s.ns),
        (l.keyPrefix = l.keyPrefix || r || s.keyPrefix);
      const f = i.options.keySeparator || ".";
      let h;
      return (
        l.keyPrefix && Array.isArray(o)
          ? (h = o.map((m) => `${l.keyPrefix}${f}${m}`))
          : (h = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o),
        i.t(h, l)
      );
    };
    return (
      typeof e == "string" ? (s.lng = e) : (s.lngs = e),
      (s.ns = n),
      (s.keyPrefix = r),
      s
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      s = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const o = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(r, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (o(r, e) && (!i || o(s, e)))
    );
  }
  loadNamespaces(e, n) {
    const r = _a();
    return this.options.ns
      ? (typeof e == "string" && (e = [e]),
        e.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const r = _a();
    typeof e == "string" && (e = [e]);
    const i = this.options.preload || [],
      s = e.filter((o) => i.indexOf(o) < 0);
    return s.length
      ? ((this.options.preload = i.concat(s)),
        this.loadResources((o) => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(e) {
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new rv(ov());
    return n.indexOf(r.getLanguagePartFromCode(e)) > -1 ||
      e.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Ml(e, n);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ru;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const i = { ...this.options, ...e, isClone: !0 },
      s = new Ml(i);
    return (
      (e.debug !== void 0 || e.prefix !== void 0) &&
        (s.logger = s.logger.clone(e)),
      ["store", "services", "language"].forEach((a) => {
        s[a] = this[a];
      }),
      (s.services = { ...this.services }),
      (s.services.utils = { hasLoadedNamespace: s.hasLoadedNamespace.bind(s) }),
      r &&
        ((s.store = new tv(this.store.data, i)),
        (s.services.resourceStore = s.store)),
      (s.translator = new tf(s.services, i)),
      s.translator.on("*", function (a) {
        for (
          var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1;
          c < l;
          c++
        )
          u[c - 1] = arguments[c];
        s.emit(a, ...u);
      }),
      s.init(i, n),
      (s.translator.options = i),
      (s.translator.backendConnector.services.utils = {
        hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
      }),
      s
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const st = Ml.createInstance();
st.createInstance = Ml.createInstance;
st.createInstance;
st.dir;
st.init;
st.loadResources;
st.reloadResources;
st.use;
st.changeLanguage;
st.getFixedT;
st.t;
st.exists;
st.setDefaultNamespace;
st.hasLoadedNamespace;
st.loadNamespaces;
st.loadLanguages;
function w4(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Al(t) {
  "@babel/helpers - typeof";
  return (
    (Al =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Al(t)
  );
}
function S4(t, e) {
  if (Al(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Al(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function C4(t) {
  var e = S4(t, "string");
  return Al(e) === "symbol" ? e : String(e);
}
function lv(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, C4(r.key), r);
  }
}
function P4(t, e, n) {
  return (
    e && lv(t.prototype, e),
    n && lv(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
var J2 = [],
  k4 = J2.forEach,
  T4 = J2.slice;
function E4(t) {
  return (
    k4.call(T4.call(arguments, 1), function (e) {
      if (e) for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    }),
    t
  );
}
var uv = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  b4 = function (e, n, r) {
    var i = r || {};
    i.path = i.path || "/";
    var s = encodeURIComponent(n),
      o = "".concat(e, "=").concat(s);
    if (i.maxAge > 0) {
      var a = i.maxAge - 0;
      if (Number.isNaN(a)) throw new Error("maxAge should be a Number");
      o += "; Max-Age=".concat(Math.floor(a));
    }
    if (i.domain) {
      if (!uv.test(i.domain)) throw new TypeError("option domain is invalid");
      o += "; Domain=".concat(i.domain);
    }
    if (i.path) {
      if (!uv.test(i.path)) throw new TypeError("option path is invalid");
      o += "; Path=".concat(i.path);
    }
    if (i.expires) {
      if (typeof i.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      o += "; Expires=".concat(i.expires.toUTCString());
    }
    if (
      (i.httpOnly && (o += "; HttpOnly"),
      i.secure && (o += "; Secure"),
      i.sameSite)
    ) {
      var l =
        typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
      switch (l) {
        case !0:
          o += "; SameSite=Strict";
          break;
        case "lax":
          o += "; SameSite=Lax";
          break;
        case "strict":
          o += "; SameSite=Strict";
          break;
        case "none":
          o += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return o;
  },
  cv = {
    create: function (e, n, r, i) {
      var s =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      r &&
        ((s.expires = new Date()),
        s.expires.setTime(s.expires.getTime() + r * 60 * 1e3)),
        i && (s.domain = i),
        (document.cookie = b4(e, encodeURIComponent(n), s));
    },
    read: function (e) {
      for (
        var n = "".concat(e, "="), r = document.cookie.split(";"), i = 0;
        i < r.length;
        i++
      ) {
        for (var s = r[i]; s.charAt(0) === " "; ) s = s.substring(1, s.length);
        if (s.indexOf(n) === 0) return s.substring(n.length, s.length);
      }
      return null;
    },
    remove: function (e) {
      this.create(e, "", -1);
    },
  },
  O4 = {
    name: "cookie",
    lookup: function (e) {
      var n;
      if (e.lookupCookie && typeof document < "u") {
        var r = cv.read(e.lookupCookie);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (e, n) {
      n.lookupCookie &&
        typeof document < "u" &&
        cv.create(
          n.lookupCookie,
          e,
          n.cookieMinutes,
          n.cookieDomain,
          n.cookieOptions
        );
    },
  },
  R4 = {
    name: "querystring",
    lookup: function (e) {
      var n;
      if (typeof window < "u") {
        var r = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf("?") > -1 &&
          (r = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        for (
          var i = r.substring(1), s = i.split("&"), o = 0;
          o < s.length;
          o++
        ) {
          var a = s[o].indexOf("=");
          if (a > 0) {
            var l = s[o].substring(0, a);
            l === e.lookupQuerystring && (n = s[o].substring(a + 1));
          }
        }
      }
      return n;
    },
  },
  wa = null,
  fv = function () {
    if (wa !== null) return wa;
    try {
      wa = window !== "undefined" && window.localStorage !== null;
      var e = "i18next.translate.boo";
      window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
    } catch {
      wa = !1;
    }
    return wa;
  },
  L4 = {
    name: "localStorage",
    lookup: function (e) {
      var n;
      if (e.lookupLocalStorage && fv()) {
        var r = window.localStorage.getItem(e.lookupLocalStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (e, n) {
      n.lookupLocalStorage &&
        fv() &&
        window.localStorage.setItem(n.lookupLocalStorage, e);
    },
  },
  Sa = null,
  dv = function () {
    if (Sa !== null) return Sa;
    try {
      Sa = window !== "undefined" && window.sessionStorage !== null;
      var e = "i18next.translate.boo";
      window.sessionStorage.setItem(e, "foo"),
        window.sessionStorage.removeItem(e);
    } catch {
      Sa = !1;
    }
    return Sa;
  },
  M4 = {
    name: "sessionStorage",
    lookup: function (e) {
      var n;
      if (e.lookupSessionStorage && dv()) {
        var r = window.sessionStorage.getItem(e.lookupSessionStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (e, n) {
      n.lookupSessionStorage &&
        dv() &&
        window.sessionStorage.setItem(n.lookupSessionStorage, e);
    },
  },
  A4 = {
    name: "navigator",
    lookup: function (e) {
      var n = [];
      if (typeof navigator < "u") {
        if (navigator.languages)
          for (var r = 0; r < navigator.languages.length; r++)
            n.push(navigator.languages[r]);
        navigator.userLanguage && n.push(navigator.userLanguage),
          navigator.language && n.push(navigator.language);
      }
      return n.length > 0 ? n : void 0;
    },
  },
  D4 = {
    name: "htmlTag",
    lookup: function (e) {
      var n,
        r =
          e.htmlTag ||
          (typeof document < "u" ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == "function" &&
          (n = r.getAttribute("lang")),
        n
      );
    },
  },
  N4 = {
    name: "path",
    lookup: function (e) {
      var n;
      if (typeof window < "u") {
        var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (r instanceof Array)
          if (typeof e.lookupFromPathIndex == "number") {
            if (typeof r[e.lookupFromPathIndex] != "string") return;
            n = r[e.lookupFromPathIndex].replace("/", "");
          } else n = r[0].replace("/", "");
      }
      return n;
    },
  },
  j4 = {
    name: "subdomain",
    lookup: function (e) {
      var n =
          typeof e.lookupFromSubdomainIndex == "number"
            ? e.lookupFromSubdomainIndex + 1
            : 1,
        r =
          typeof window < "u" &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (r) return r[n];
    },
  };
function V4() {
  return {
    order: [
      "querystring",
      "cookie",
      "localStorage",
      "sessionStorage",
      "navigator",
      "htmlTag",
    ],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: function (e) {
      return e;
    },
  };
}
var Z2 = (function () {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    w4(this, t),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(e, n);
  }
  return (
    P4(t, [
      {
        key: "init",
        value: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          (this.services = n || { languageUtils: {} }),
            (this.options = E4(r, this.options || {}, V4())),
            typeof this.options.convertDetectedLanguage == "string" &&
              this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
              (this.options.convertDetectedLanguage = function (s) {
                return s.replace("-", "_");
              }),
            this.options.lookupFromUrlIndex &&
              (this.options.lookupFromPathIndex =
                this.options.lookupFromUrlIndex),
            (this.i18nOptions = i),
            this.addDetector(O4),
            this.addDetector(R4),
            this.addDetector(L4),
            this.addDetector(M4),
            this.addDetector(A4),
            this.addDetector(D4),
            this.addDetector(N4),
            this.addDetector(j4);
        },
      },
      {
        key: "addDetector",
        value: function (n) {
          this.detectors[n.name] = n;
        },
      },
      {
        key: "detect",
        value: function (n) {
          var r = this;
          n || (n = this.options.order);
          var i = [];
          return (
            n.forEach(function (s) {
              if (r.detectors[s]) {
                var o = r.detectors[s].lookup(r.options);
                o && typeof o == "string" && (o = [o]), o && (i = i.concat(o));
              }
            }),
            (i = i.map(function (s) {
              return r.options.convertDetectedLanguage(s);
            })),
            this.services.languageUtils.getBestMatchFromCodes
              ? i
              : i.length > 0
              ? i[0]
              : null
          );
        },
      },
      {
        key: "cacheUserLanguage",
        value: function (n, r) {
          var i = this;
          r || (r = this.options.caches),
            r &&
              ((this.options.excludeCacheFor &&
                this.options.excludeCacheFor.indexOf(n) > -1) ||
                r.forEach(function (s) {
                  i.detectors[s] &&
                    i.detectors[s].cacheUserLanguage(n, i.options);
                }));
        },
      },
    ]),
    t
  );
})();
Z2.type = "languageDetector";
st.use(Z2).init({
  fallbackLng: "es",
  resources: { es: { global: GM }, en: { global: zM }, pt: { global: e4 } },
  detection: {
    order: ["localStorage", "navigator"],
    convertDetectedLanguage: (t) => t.split("-")[0],
  },
  lookupLocalStorage: "lng",
});
const Id = st.language;
Id.split("-")[0] !== "es" &&
  Id.split("-")[0] !== "en" &&
  Id.split("-")[0] !== "pt" &&
  ((st.language = "es"), localStorage.setItem("i18nextLng", "es"));
zd.createRoot(document.getElementById("root")).render(
  S.jsx(wb, {
    i18n: st,
    children: S.jsx(DE, {
      children: S.jsx(jw, {
        children: S.jsx(oi, { path: "*", element: S.jsx(AM, {}) }),
      }),
    }),
  })
);