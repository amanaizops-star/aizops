
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./db");
// const contactRoutes = require("./routes/contact");
// const authRoutes = require("./routes/authRoutes");
// const customerRoutes = require("./routes/customerRoutes");
// const auth1Routes = require('./routes/demoRoutes');
// const trialRoutes = require('./routes/trialRoutes');
// const app = express();
// const { scheduleTrialReminders } = require('./utils/trialScheduler');


// // ✅ CORS configuration
// app.use(cors({
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// }));

// // ✅ Body parsers
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// // ✅ Debug middleware
// app.use((req, res, next) => {
//     console.log(`\n📨 ${req.method} ${req.url}`);
//     console.log("Content-Type:", req.headers["content-type"]);
//     console.log("Body:", req.body);
//     next();
// });

// // ✅ Root route
// app.get("/", (req, res) => {
//     res.json({
//         success: true,
//         message: "API is running",
//         customerRoute: "POST /api/customers/register",
//     });
// });

// // ✅ Test route
// app.get("/test", (req, res) => {
//     res.json({ success: true, message: "Server is running!" });
// });

// // ✅ Mount routes
// app.use("/api/customers", customerRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/auth", authRoutes);
// app.use('/api/auth', auth1Routes);
// app.use('/api/trial', trialRoutes);

// function listRegisteredRoutes(app) {
//     console.log("\n🔎 Registered routes:");

//     if (!app.router || !app.router.stack) {
//         console.warn("  ⚠️  No routes found (app.router is undefined).");
//         return;
//     }

//     app.router.stack.forEach((layer) => {
//         if (layer.route) {
//             const methods = Object.keys(layer.route.methods)
//                 .map(method => method.toUpperCase())
//                 .join(", ");

//             console.log(`  ${methods} ${layer.route.path}`);
//         }
//     });
// }

// // ✅ 404 handler
// app.use((req, res) => {
//     console.log(`❌ 404 - Route not found: ${req.method} ${req.url}`);
//     res.status(404).json({
//         success: false,
//         message: "Route not found",
//         requestedUrl: req.url,
//         availableRoutes: [
//             "GET /",
//             "GET /test",
//             "POST /api/customers/register",
//             "PUT /api/customers/set-password/:id",
//             "POST /api/customers/verify-otp/:id",
//         ],
//     });
// });

// // ✅ Global error handler
// app.use((err, req, res, next) => {
//     console.error("❌ Server error:", err);
//     res.status(500).json({ success: false, message: "Internal server error" });
// });



// // ✅ Connect DB and start server
// connectDB();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`\n🚀 Server running on port ${PORT}`);
//     console.log(`✅ Test route:      http://localhost:${PORT}/test`);
//     console.log(`✅ Register:        http://localhost:${PORT}/api/customers/register`);

//     // ✅ List routes INSIDE the listen callback — guaranteed app._router is ready
//     listRegisteredRoutes(app);
// });



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

function safeRequire(path) {
    try {
        const mod = require(path);
        const handler = mod?.default || mod;
        if (typeof handler !== "function") {
            console.error(`❌ Route file "${path}" does not export a valid router/function.`);
            console.error(`   Got: ${typeof handler} →`, handler);
            const fallback = express.Router();
            fallback.use((req, res) => {
                res.status(500).json({
                    success: false,
                    message: `Route module "${path}" failed to load correctly.`,
                });
            });
            return fallback;
        }
        return handler;
    } catch (err) {
        console.error(`❌ Failed to require("${path}"):`, err.message);
        const fallback = express.Router();
        fallback.use((req, res) => {
            res.status(500).json({
                success: false,
                message: `Route module "${path}" threw an error on load.`,
                error: err.message,
            });
        });
        return fallback;
    }
}

const contactRoutes   = safeRequire("./routes/contact");
const authRoutes      = safeRequire("./routes/authRoutes");
const customerRoutes  = safeRequire("./routes/customerRoutes");
const demoRoutes      = safeRequire("./routes/demoRoutes");
const trialRoutes     = safeRequire("./routes/trialRoutes");

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

if (process.env.NODE_ENV !== "production") {
    app.use((req, res, next) => {
        console.log(`\n📨 ${req.method} ${req.url}`);
        console.log("Content-Type:", req.headers["content-type"]);
        console.log("Body:", req.body);
        next();
    });
}

app.get("/", (req, res) => {
    res.json({ success: true, message: "API is running" });
});

app.get("/test", (req, res) => {
    res.json({ success: true, message: "Server is running!" });
});


console.log("\n📌 Mounting routes...");
app.use("/api/customers", customerRoutes);
app.use("/api/contact",   contactRoutes);
app.use("/api/auth",      authRoutes);
app.use("/api/demo",      demoRoutes);
app.use("/api/trial",     trialRoutes);
console.log("✅ All routes mounted.\n");

function listRegisteredRoutes(app) {
    console.log("\n🔎 REGISTERED ROUTES:");
    console.log("===================");
    const routes = [];

    function extractRoutes(stack, basePath = "") {
        if (!stack) return;
        stack.forEach((layer) => {
            if (layer.route) {
                const methods = Object.keys(layer.route.methods)
                    .map((m) => m.toUpperCase())
                    .join(", ");
                routes.push(`${methods} ${basePath}${layer.route.path}`);
            } else if (layer.name === "router" && layer.handle?.stack) {
                let routerPath = "";
                if (layer.regexp) {
                    const pathMatch = layer.regexp.toString().match(/\\\/([^\\/]+)/g);
                    if (pathMatch) {
                        routerPath = pathMatch.map((p) => p.replace(/\\/g, "")).join("");
                    }
                }
                extractRoutes(layer.handle.stack, routerPath);
            }
        });
    }

    if (app._router?.stack) {
        extractRoutes(app._router.stack);
    }

    routes.sort().forEach((route) => console.log(`  ✅ ${route}`));
    console.log("===================\n");
}

app.use((req, res) => {
    console.log(`❌ 404 - Route not found: ${req.method} ${req.url}`);
    res.status(404).json({
        success: false,
        message: "Route not found",
        requestedUrl: req.url,
    });
});

app.use((err, req, res, next) => {
    console.error("❌ Server error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on port ${PORT}`);
    console.log(`✅ Test:          http://localhost:${PORT}/test`);
    console.log(`✅ Auth:          http://localhost:${PORT}/api/auth/register`);
    console.log(`✅ Demo:          http://localhost:${PORT}/api/demo/register`);
    console.log(`✅ Trial:         http://localhost:${PORT}/api/trial`);
    console.log(`✅ Customers:     http://localhost:${PORT}/api/customers`);
    console.log(`✅ Contact:       http://localhost:${PORT}/api/contact`);
    listRegisteredRoutes(app);
});