"use client";
import React from "react";
import Head from "next/head";
import { FiPhone, FiMapPin, FiSearch } from "react-icons/fi";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaSwimmingPool,
  FaShoppingBag,
} from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";

export default function Header() {
  // color variables (hex used inline where needed)
  const gold = "#bfa06a"; // warm gold
  const muted = "#8b8b8b";
  const bg = "#fffdfa";
  const cardBg = "#ffffffcc";

  const listings = [
    {
      id: 1,
      tag: "PENTHOUSE",
      title: "Skyline Penthouse — BKC",
      size: "4 BHK • 4500 sq.ft",
      price: "₹ 12.5 Cr",
      features: "Private lift • Panoramic terrace",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      tag: "ESTATE",
      title: "Seaside Manor — Goa",
      size: "6 BHK • 9800 sq.ft",
      price: "Price on request",
      features: "Private beach • Infinity pool",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      tag: "VILLA",
      title: "Hilltop Villa — Lonavala",
      size: "5 BHK • 7200 sq.ft",
      price: "₹ 6.8 Cr",
      features: "Secluded • Scenic views",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      tag: "EXCLUSIVE",
      title: "Riverview Penthouse — Worli",
      size: "3 BHK • 3600 sq.ft",
      price: "₹ 9.2 Cr",
      features: "Private terrace • Concierge",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      tag: "RETREAT",
      title: "Azure Hill Retreat — Mahabaleshwar",
      size: "4 BHK • 5200 sq.ft",
      price: "₹ 4.6 Cr",
      features: "Private grounds • Panoramic views",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      tag: "SEA VIEW",
      title: "Crescent Beach Estate — Alibaug",
      size: "7 BHK • 11000 sq.ft",
      price: "Price on request",
      features: "Private beach • Pool",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const agents = [
    { name: "Anita Sharma", role: "Senior Agent", phone: "+91 98765 43210" },
    { name: "Rahul Mehra", role: "Concierge Lead", phone: "+91 91234 56789" },
    { name: "Priya Desai", role: "Listing Manager", phone: "+91 99887 77665" },
  ];

  return (
    <>
      <Head>
        <title>Luxuria — Premium Properties</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="relative z-10">
        <nav className="flex items-center justify-between px-6 md:px-12 py-5">
          <div className="flex items-center gap-4">
            <div
              className="font-serif text-2xl font-semibold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Lux<span style={{ color: gold }}>uria</span>
            </div>
            <div style={{ color: muted, fontSize: 13 }}>
              Curated Luxury Properties
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a className="font-medium" style={{ color: "#222222" }} href="#">
              Buy
            </a>
            <a className="font-medium" style={{ color: "#222222" }} href="#">
              Rent
            </a>
            <a className="font-medium" style={{ color: "#222222" }} href="#">
              Collections
            </a>
            <a className="font-medium" style={{ color: "#222222" }} href="#">
              Agents
            </a>
            <a
              style={{
                background: gold,
                color: "#ffffff",
                padding: "8px 14px",
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: "none",
              }}
              href="#"
            >
              List Property
            </a>
          </div>
        </nav>

        <section
          className="min-h-[66vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,12,12,0.35),rgba(12,12,12,0.35)),url('https://images.unsplash.com/photo-1572120360610-d971b9b8f2b4?auto=format&fit=crop&w=1800&q=80')",
          }}
        >
          <div className="max-w-[1200px] mx-auto w-full grid lg:grid-cols-[1fr_420px] gap-10 px-6 md:px-8 py-16 text-white">
            <div>
              <h1
                className="font-serif text-4xl md:text-5xl leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Discover exceptional homes — curated for discerning tastes
              </h1>
              <p className="mt-4 text-gray-100 max-w-xl">
                Exclusive residences, private estates and penthouses with
                world-class finishes — handpicked and verified. Schedule private
                tours or request a confidential brochure.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    padding: "8px 14px",
                    borderRadius: 10,
                  }}
                  className="text-sm"
                >
                  Concierge viewings
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    padding: "8px 14px",
                    borderRadius: 10,
                  }}
                  className="text-sm"
                >
                  Verified listings
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    padding: "8px 14px",
                    borderRadius: 10,
                  }}
                  className="text-sm"
                >
                  Virtual tours
                </div>
              </div>
            </div>

            <aside
              style={{
                background: "rgba(255,255,255,0.3)",
                backdropFilter: "blur(6px)",
                padding: 18,
                borderRadius: 14,
                boxShadow: "0 8px 30px rgba(8,8,8,0.28)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <div style={{ fontWeight: 700 }}>Find your next residence</div>
                <div
                  style={{
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.12)",
                    fontWeight: 700,
                  }}
                >
                  Premium
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Search (demo)");
                }}
                className="space-y-3"
                aria-label="property search"
              >
                <div>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 rounded-lg border bg-transparent placeholder-gray-200 outline-none"
                      placeholder="Search city, neighbourhood, landmark"
                      type="text"
                      style={{
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: "#fff",
                      }}
                    />
                    <FiSearch
                      style={{
                        position: "absolute",
                        right: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <select
                    style={{
                      flex: 1,
                      padding: 12,
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.18)",
                      background: "transparent",
                      color: "#fff",
                    }}
                  >
                    <option>Buy</option>
                    <option>Rent</option>
                  </select>

                  <select
                    style={{
                      flex: 1,
                      padding: 12,
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.18)",
                      background: "transparent",
                      color: "#fff",
                    }}
                  >
                    <option>Any budget</option>
                    <option>₹ 5L+</option>
                    <option>₹ 50L+</option>
                    <option>₹ 2Cr+</option>
                  </select>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    style={{
                      background: gold,
                      border: "none",
                      padding: "12px 16px",
                      borderRadius: 10,
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.14)",
                      color: "#fff",
                    }}
                  >
                    Advanced
                  </button>
                </div>
              </form>

              <div
                style={{
                  marginTop: 12,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: 12,
                }}
              >
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <FiPhone />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>
                      Concierge
                    </div>
                    <div style={{ fontSize: 13, color: muted }}>
                      +91 22 1234 5678
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 md:px-8 py-8">
        {/* Featured Collections */}
        <section>
          <div className="flex items-end justify-between mb-4">
            <h2
              className="font-serif text-2xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Featured Collections
            </h2>
            <div style={{ color: muted }}>
              Handpicked properties for connoisseurs
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <article
                key={l.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src={l.img}
                    alt={l.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><rect width='100%' height='100%' fill='%23e9e5e0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size=20 fill='%23888888'>Image unavailable</text></svg>";
                    }}
                  />
                </div>
                <div className="p-4">
                  <div
                    className="inline-block"
                    style={{
                      background: gold,
                      color: "#fff",
                      padding: "6px 10px",
                      borderRadius: 10,
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {l.tag}
                  </div>
                  <h3
                    className="mt-2 font-serif text-lg"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {l.title}
                  </h3>
                  <div className="text-sm text-gray-600 mt-2">{l.size}</div>

                  <div className="flex justify-between items-center text-sm text-gray-700 mt-3">
                    <div style={{ fontWeight: 700 }}>{l.price}</div>
                    <div style={{ color: "#6b6b6b" }}>{l.features}</div>
                  </div>

                  {/* quick amenities row */}
                  <div className="mt-3 flex gap-3 items-center text-sm">
                    <div className="flex items-center gap-2">
                      <FaBed />
                      <span>
                        {Math.max(3, Math.floor(Math.random() * 6))} beds
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBath />
                      <span>
                        {Math.max(2, Math.floor(Math.random() * 4))} baths
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRulerCombined />
                      <span>
                        {Math.floor(Number(l.size.split(" ")[2]) || 3000)} sqft
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      style={{
                        background: "#111111",
                        color: "#fff",
                        padding: "8px 12px",
                        borderRadius: 8,
                        fontWeight: 700,
                      }}
                    >
                      View details
                    </button>
                    <button
                      style={{
                        border: "1px solid #e5e5e5",
                        padding: "8px 12px",
                        borderRadius: 8,
                      }}
                    >
                      Contact agent
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Price history + map placeholder */}
        <section className="mt-10 grid gap-6 grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white p-4 rounded-xl border shadow-sm">
            <h3
              className="font-serif text-lg"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Price history — selected property
            </h3>
            <ul style={{ marginTop: 8, color: muted }}>
              <li>Jan 2025 — Listed at ₹ 12.0 Cr</li>
              <li>Mar 2025 — Open house; price revised to ₹ 12.5 Cr</li>
              <li>Jul 2025 — Offer received (confidential)</li>
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-md border bg-white/30 text-sm">
                Estimated monthly cost (loan): ₹ 1.1L
              </div>
              <div className="p-3 rounded-md border bg-white/30 text-sm">
                Tax & transfer: Variable
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Amenities</h4>
              <div className="mt-3 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 p-2 rounded-md border">
                  <FaSwimmingPool /> <span className="text-sm">Pool</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md border">
                  <GiHomeGarage /> <span className="text-sm">Garage</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md border">
                  <FaShoppingBag />{" "}
                  <span className="text-sm">Near premium shopping</span>
                </div>
              </div>
            </div>
          </div>

          <aside className="bg-white p-4 rounded-xl border shadow-sm">
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 12,
                  background: "#f3f3f3",
                }}
              />
              <div>
                <div style={{ fontWeight: 700 }}>Featured agent</div>
                <div style={{ color: muted }}>Anita Sharma — Senior Agent</div>
                <div className="mt-2 flex items-center gap-2">
                  <FiPhone />{" "}
                  <a href={`tel:+919876543210`} style={{ color: "#111" }}>
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>
                Quick contact
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Contact request sent (demo)");
                }}
                className="space-y-3"
              >
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <button
                  className="w-full"
                  style={{
                    background: gold,
                    color: "#fff",
                    padding: "10px",
                    borderRadius: 8,
                    fontWeight: 700,
                  }}
                >
                  Request tour
                </button>
              </form>
            </div>
          </aside>
        </section>

        {/* Featured agents */}
        <section className="mt-10">
          <div className="flex items-end justify-between mb-4">
            <h2
              className="font-serif text-2xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Featured Agents
            </h2>
            <div style={{ color: muted }}>
              Trusted concierge & listing specialists
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {agents.map((a, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl border shadow-sm flex items-start gap-4"
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 12,
                    background: "#f3f3f3",
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700 }}>{a.name}</div>
                  <div style={{ color: muted }}>{a.role}</div>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <FiPhone />{" "}
                    <a href={`tel:${a.phone}`} style={{ color: "#111" }}>
                      {a.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Our Journal (blogs) */}
        <section className="mt-10">
          <div className="flex items-end justify-between mb-4">
            <h2
              className="font-serif text-2xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              From Our Journal
            </h2>
            <div style={{ color: muted }}>
              Insights on luxury homes, design and investment
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-xl overflow-hidden border shadow-sm">
              <img
                loading="lazy"
                className="w-full h-44 object-cover"
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80"
                alt="Design trends"
              />
              <div className="p-4">
                <h4 className="font-serif">
                  Interior trends for luxury apartments
                </h4>
                <p className="text-sm text-gray-500">
                  How curated materials and light shape modern high-end living.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden border shadow-sm">
              <img
                loading="lazy"
                className="w-full h-44 object-cover"
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
                alt="Market insights"
              />
              <div className="p-4">
                <h4 className="font-serif">Buying luxury: what to know</h4>
                <p className="text-sm text-gray-500">
                  Key considerations for high-value property investment in
                  India.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden border shadow-sm">
              <img
                loading="lazy"
                className="w-full h-44 object-cover"
                src="https://images.unsplash.com/photo-1505692794401-8d8b1d86cf41?auto=format&fit=crop&w=1200&q=80"
                alt="Seller tips"
              />
              <div className="p-4">
                <h4 className="font-serif">Staging your home for sale</h4>
                <p className="text-sm text-gray-500">
                  Simple staging techniques that attract discerning buyers.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="py-8">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div
              className="font-serif text-xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Lux<span style={{ color: gold }}>uria</span>
            </div>
            <div style={{ color: muted, marginTop: 6 }}>
              Curated properties • Concierge services • Private listings
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <a style={{ color: "#111" }} href="#">
              Privacy
            </a>
            <a style={{ color: "#111" }} href="#">
              Terms
            </a>
            <a style={{ color: "#111" }} href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
