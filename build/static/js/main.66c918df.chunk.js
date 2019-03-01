(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    function(e, n) {
      e.exports = {
        button: { name: "button", isReady: !0 },
        tabs: { name: "tabs", isReady: !1 }
      };
    },
    function(e, n) {
      e.exports = {
        text: {
          name: "text",
          js: '<button type="button" class="zel-button">Text Button</button>',
          react: !1,
          angular: !1,
          vue: !1
        },
        filled: {
          name: "filled",
          js:
            '<button type="button" class="zel-button zel-button__filled">Filled Button</button>',
          react: !1,
          angular: !1,
          vue: !1
        },
        contained: {
          name: "contained",
          js:
            '<button type="button" class="zel-button zel-button__contained">Contained Button</button>',
          react: !1,
          angular: !1,
          vue: !1
        }
      };
    },
    ,
    ,
    ,
    function(e, n, t) {
      e.exports = t(14);
    },
    ,
    ,
    ,
    ,
    ,
    function(e, n, t) {},
    function(e, n, t) {},
    function(e, n, t) {
      
      t.r(n);
      var o = t(0),
        a = t.n(o),
        i = t(4),
        r = t.n(i),
        l = t(5),
        c = (t(12), t(1)),
        s = t.n(c),
        u = t(2),
        d = t.n(u);
      t(13);
      var f = function() {
        return a.a.createElement(
          a.a.Fragment,
          null,
          Object.keys(d.a).map(function(e, n) {
            return a.a.createElement("div", {
              dangerouslySetInnerHTML: { __html: d.a[e].js },
              key: "button".concat(n)
            });
          })
        );
      };
      var b = function() {
          var e = Object(o.useState)("welcome"),
            n = Object(l.a)(e, 2),
            t = n[0],
            i = n[1];
          return a.a.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }
            },
            a.a.createElement(
              "h1",
              {
                style: {
                  textAlign: "center",
                  margin: 0,
                  padding: 30,
                  color: "#ffffff",
                  background: "#27166f "
                }
              },
              "Zeppelin Element Library"
            ),
            a.a.createElement(
              "div",
              { style: { display: "flex", flexGrow: 1 } },
              a.a.createElement(
                "div",
                {
                  style: {
                    borderRight: "1px solid black",
                    flexBasis: "25%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: 30
                  }
                },
                Object.keys(s.a).map(function(e) {
                  return a.a.createElement(
                    "button",
                    {
                      className: "zel-button",
                      onClick: function() {
                        return i(s.a[e].name);
                      }
                    },
                    s.a[e].name
                  );
                })
              ),
              a.a.createElement(
                "div",
                { style: { flexGrow: 1, padding: 30 } },
                "welcome" === t &&
                  a.a.createElement(
                    "p",
                    null,
                    "Welcome to the Zeppelin Element Library"
                  ),
                "button" === t && a.a.createElement(f, null),
                "tabs" === t &&
                  a.a.createElement("p", null, "This element is not ready")
              )
            )
          );
        },
        m = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function p(e, n) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var t = e.installing;
              null != t &&
                (t.onstatechange = function() {
                  "installed" === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."
                        ),
                        n && n.onUpdate && n.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        n && n.onSuccess && n.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }
      r.a.render(a.a.createElement(b, null), document.getElementById("root")),
        (function(e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function() {
              var n = "".concat("", "/service-worker.js");
              m
                ? ((function(e, n) {
                    fetch(e)
                      .then(function(t) {
                        var o = t.headers.get("content-type");
                        404 === t.status ||
                        (null != o && -1 === o.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function(e) {
                              e.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : p(e, n);
                      })
                      .catch(function() {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(n, e),
                  navigator.serviceWorker.ready.then(function() {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA"
                    );
                  }))
                : p(n, e);
            });
          }
        })();
    }
  ],
  [[6, 1, 2]]
]);
//# sourceMappingURL=main.66c918df.chunk.js.map
