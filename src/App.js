import React, { useState } from "react";
import { Heart, Sparkles, Gamepad2, Beer, CircleDot } from "lucide-react";
import "./App.css";

export default function Giftcard3DRevealPage() {
  const [zoomed, setZoomed] = useState(false);

  const params = new URLSearchParams(window.location.search);

  const gift = {
    from: params.get("from") || "Таны хайртай хүнээс ❤️",
    to: params.get("to") || "Чамд зориулсан",
    pack: params.get("pack") || "BRO NIGHT PACK",
    message:
      params.get("msg") ||
      "Цэргийн баяраар чамд хөгжилтэй, тухтай нэг орой бэлэглэж байна. Ger Gaming Lounge-д гоё өнгөрүүлээрэй.",
    code: params.get("code") || "GER18-001",
    valid: params.get("valid") || "2026.03.18 – 2026.03.25",
    items: [
      params.get("item1") || "2 цаг Gaming",
      params.get("item2") || "1 цаг Биллиард",
      params.get("item3") || "2 Beer",
    ],
  };

  return (
    <div className="page">
      <div className="bg-gradient-layer" />
      <div className="bg-grid-layer" />

      <div className="main-grid">
        <div className="left-panel">
          <div className="glow-shadow" />

          <div className="scene">
            <div className="stand-wrap">
              <div className="stand-base-spin" />
              <div className="stand-base-inner" />
              <div className="stand-rod" />
            </div>

            <div
              className={`gift-card ${zoomed ? "zoomed" : ""}`}
              onClick={() => setZoomed(!zoomed)}
              title="Click to zoom"
            >
              <div className="gift-card-overlay" />

              <div className="card-content">
                <div className="card-header">
                  <div>
                    <div className="brand-label">Ger Gaming Lounge</div>
                    <div className="pack-title">{gift.pack}</div>
                  </div>

                  <div className="sparkle-box">
                    <Sparkles size={24} />
                  </div>
                </div>

                <div className="items-list">
                  <div className="item-row">
                    <Gamepad2 size={16} className="item-icon" />
                    <span>{gift.items[0]}</span>
                  </div>
                  <div className="item-row">
                    <CircleDot size={16} className="item-icon" />
                    <span>{gift.items[1]}</span>
                  </div>
                  <div className="item-row">
                    <Beer size={16} className="item-icon" />
                    <span>{gift.items[2]}</span>
                  </div>
                </div>

                <div className="card-footer">
                  <div>
                    <div className="meta-label">Code</div>
                    <div className="meta-value code-value">{gift.code}</div>
                  </div>
                  <div className="footer-right">
                    <div className="meta-label">Valid</div>
                    <div className="meta-small">{gift.valid}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="click-hint">
              {zoomed ? "Click card again to go back" : "Click the card to zoom in"}
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="from-badge">
            <Heart size={16} />
            <span>From wife / girlfriend</span>
          </div>

          <h1 className="receiver-title">{gift.to}</h1>
          <p className="from-text">{gift.from}</p>

          <div className="message-box">
            <div className="message-label">Message</div>
            <p className="message-text">{gift.message}</p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              Энэ линк нь бэлгийн карт харуулах зориулалттай. Хүлээн авагч энэ
              хуудсыг нээгээд картаа харж, кодоо үзүүлэн ашиглана.
            </div>

            <div className="info-card">
              Та зөвхөн <span className="highlight">нэр</span>,{" "}
              <span className="highlight">мессеж</span>,{" "}
              <span className="highlight">код</span>,{" "}
              <span className="highlight">pack</span>-аа линкээр сольж болно.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}