/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import definePlugin from "@utils/types";

import { cancelForge } from "./session";
import { settings } from "./settings";
import { openVencorfyModal } from "./ui";
import { startProgressWidget, stopProgressWidget } from "./widget";

export default definePlugin({
    name: "Vencorfy",
    description: "Effortlessly simulate and progress your Discord profile badge stats across Game Variety, Game Time, and Streaming.",
    authors: [{ name: "djdoolky76", id: 546797199527247874n }],
    tags: ["Activity", "Customisation", "Utility"],
    settings,
    toolboxActions: {
        "Open Vencorfy": () => openVencorfyModal()
    },
    start() {
        startProgressWidget();
    },
    stop() {
        stopProgressWidget();
        cancelForge();
    }
});
