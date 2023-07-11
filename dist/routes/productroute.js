"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productC_1 = require("../controllers/productC");
const router = (0, express_1.Router)();
router.get('/', productC_1.getProducts);
exports.default = router;
