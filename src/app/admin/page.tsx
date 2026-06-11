'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const GREEN = '#204D36';
const YELLOW = '#FED117';
const CORAL = '#EA6660';
const APPLE = '#65B330';
const CREAM = '#FAF9F5';
const MUTED = '#6b7c72';

type Section = 'dashboard' | 'restaurants' | 'commandes' | 'fidelite' | 'campagnes';

const RESTAURANTS = [
  { id: 1, name: 'Opéra', city: 'Paris 9ᵉ', ca: 28400, orders: 342, rating: 4.8, status: 'open', clients: 1240 },
  { id: 2, name: 'Marais', city: 'Paris 4ᵉ', ca: 31200, orders: 389, rating: 4.9, status: 'open', clients: 1580 },
  { id: 3, name: 'République', city: 'Paris 11ᵉ', ca: 22100, orders: 271, rating: 4.6, status: 'open', clients: 980 },
  { id: 4, name: 'Batignolles', city: 'Paris 17ᵉ', ca: 18700, orders: 228, rating: 4.7, status: 'open', clients: 820 },
  { id: 5, name: 'Saint-Germain', city: 'Paris 6ᵉ', ca: 34500, orders: 412, rating: 4.9, status: 'open', clients: 1720 },
  { id: 6, name: 'Montpellier Centre', city: 'Montpellier', ca: 19800, orders: 245, rating: 4.5, status: 'open', clients: 870 },
  { id: 7, name: 'Lyon Confluence', city: 'Lyon', ca: 24300, orders: 298, rating: 4.7, status: 'open', clients: 1090 },
  { id: 8, name: 'Bordeaux Saint-Pierre', city: 'Bordeaux', ca: 21600, orders: 264, rating: 4.6, status: 'maintenance', clients: 940 },
];

const ORDERS = [
  { ref: 'CMD-4821', resto: 'Marais', client: 'Sophie M.', montant: 28, statut: 'livré', date: 'il y a 3 min' },
  { ref: 'CMD-4820', resto: 'Opéra', client: 'Thomas R.', montant: 19, statut: 'en cours', date: 'il y a 7 min' },
  { ref: 'CMD-4819', resto: 'Saint-Germain', client: 'Alice K.', montant: 34, statut: 'livré', date: 'il y a 12 min' },
  { ref: 'CMD-4818', resto: 'République', client: 'Marc D.', montant: 22, statut: 'livré', date: 'il y a 18 min' },
  { ref: 'CMD-4817', resto: 'Lyon Confluence', client: 'Emma P.', montant: 41, statut: 'en cours', date: 'il y a 21 min' },
];

const FIDELITE = [
  { tier: 'Bronze', count: 4280, pts: '0–199', color: '#CD7F32' },
  { tier: 'Argent', count: 2140, pts: '200–499', color: '#A8A9AD' },
  { tier: 'Or', count: 980, pts: '500–999', color: YELLOW },
  { tier: 'Platine', count: 320, pts: '1000+', color: '#E5E4E2' },
];

const BAR_DATA = [
  { label: 'Jan', val: 142 },
  { label: 'Fév', val: 128 },
  { label: 'Mar', val: 165 },
  { label: 'Avr', val: 189 },
  { label: 'Mai', val: 210 },
  { label: 'Jun', val: 234 },
];
const MAX_BAR = Math.max(...BAR_DATA.map((d) => d.val));

const navItems: { id: Section; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Vue d\'ensemble', icon: '◻' },
  { id: 'restaurants', label: 'Restaurants', icon: '⌂' },
  { id: 'commandes', label: 'Commandes', icon: '◈' },
  { id: 'fidelite', label: 'Programme fidélité', icon: '★' },
  { id: 'campagnes', label: 'Campagnes', icon: '◎' },
];

export default function AdminPage() {
  const [section, setSection] = useState<Section>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const totalCA = RESTAURANTS.reduce((a, r) => a + r.ca, 0);
  const totalOrders = RESTAURANTS.reduce((a, r) => a + r.orders, 0);
  const totalClients = RESTAURANTS.reduce((a, r) => a + r.clients, 0);

  return (
    <div style={{ fontFamily: '"Jost", system-ui, sans-serif', background: '#F0F4F2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* top bar */}
      <div style={{ background: GREEN, color: '#fff', height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={() => setSidebarOpen((v) => !v)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#fff', fontSize: 18, padding: 4 }}>☰</button>
          <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em' }}>
            L&apos;Éden Fruité <span style={{ color: YELLOW, fontWeight: 400, fontSize: 13 }}>· Espace franchise</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.7)' }}>Réseau · {RESTAURANTS.length} restaurants</span>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: YELLOW, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: GREEN }}>A</div>
          <Link href="/" style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>← Site public</Link>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* sidebar */}
        {sidebarOpen && (
          <aside style={{ width: 220, background: '#fff', borderRight: '1px solid #e2e8e4', padding: '20px 0', flexShrink: 0 }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSection(item.id)}
                style={{
                  width: '100%',
                  padding: '11px 22px',
                  background: section === item.id ? `rgba(32,77,54,.08)` : 'transparent',
                  border: 'none',
                  borderLeft: `3px solid ${section === item.id ? GREEN : 'transparent'}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: 13.5,
                  fontWeight: section === item.id ? 600 : 400,
                  color: section === item.id ? GREEN : MUTED,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  transition: 'all .12s',
                }}
              >
                <span style={{ fontSize: 15 }}>{item.icon}</span>
                {item.label}
              </button>
            ))}

            <div style={{ margin: '20px 16px 0', padding: '14px', background: `rgba(254,209,23,.15)`, borderRadius: 8, border: `1px solid rgba(254,209,23,.4)` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, marginBottom: 4 }}>OBJECTIF JUIN</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: GREEN }}>87%</div>
              <div style={{ height: 6, background: 'rgba(32,77,54,.15)', borderRadius: 3, marginTop: 8 }}>
                <div style={{ height: '100%', width: '87%', background: APPLE, borderRadius: 3 }} />
              </div>
              <div style={{ fontSize: 11, color: MUTED, marginTop: 5 }}>200 k€ / 230 k€</div>
            </div>
          </aside>
        )}

        {/* main */}
        <main style={{ flex: 1, padding: '28px 32px', overflowX: 'hidden' }}>

          {/* === DASHBOARD === */}
          {section === 'dashboard' && (
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: GREEN, marginBottom: 6 }}>Vue d&apos;ensemble</h1>
              <p style={{ fontSize: 13, color: MUTED, marginBottom: 24 }}>Réseau L&apos;Éden Fruité · Juin 2026</p>

              {/* KPIs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
                {[
                  { label: 'CA mensuel', value: `${(totalCA / 1000).toFixed(0)} k€`, delta: '+12%', color: GREEN },
                  { label: 'Commandes (mois)', value: totalOrders.toLocaleString('fr'), delta: '+8%', color: APPLE },
                  { label: 'Clients actifs', value: totalClients.toLocaleString('fr'), delta: '+18%', color: CORAL },
                  { label: 'Restaurants ouverts', value: `${RESTAURANTS.filter((r) => r.status === 'open').length}/${RESTAURANTS.length}`, delta: '', color: YELLOW },
                ].map((kpi) => (
                  <div key={kpi.label} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: MUTED, marginBottom: 6 }}>{kpi.label}</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: kpi.color }}>{kpi.value}</div>
                    {kpi.delta && <div style={{ fontSize: 12, color: APPLE, marginTop: 4, fontWeight: 600 }}>↑ {kpi.delta} vs mois dernier</div>}
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                {/* chart CA */}
                <div style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: GREEN, marginBottom: 16 }}>CA réseau — 6 derniers mois (k€)</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 100 }}>
                    {BAR_DATA.map((d) => (
                      <div key={d.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                        <div style={{ fontSize: 10, color: MUTED, fontWeight: 600 }}>{d.val}</div>
                        <div style={{ width: '100%', height: `${(d.val / MAX_BAR) * 80}px`, background: GREEN, borderRadius: '3px 3px 0 0', transition: 'height .4s' }} />
                        <div style={{ fontSize: 10, color: MUTED }}>{d.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* commandes récentes */}
                <div style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: GREEN, marginBottom: 14 }}>Dernières commandes</div>
                  {ORDERS.slice(0, 4).map((o) => (
                    <div key={o.ref} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f0f0f0', fontSize: 13 }}>
                      <div>
                        <span style={{ fontWeight: 600 }}>{o.client}</span>
                        <span style={{ color: MUTED, marginLeft: 6 }}>· {o.resto}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontWeight: 700 }}>{o.montant}€</span>
                        <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 99, background: o.statut === 'livré' ? `rgba(101,179,48,.15)` : `rgba(254,209,23,.3)`, color: o.statut === 'livré' ? APPLE : '#9a7a00', fontWeight: 600 }}>
                          {o.statut}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* top restaurants */}
              <div style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: GREEN, marginBottom: 14 }}>Top restaurants du mois</div>
                {[...RESTAURANTS].sort((a, b) => b.ca - a.ca).slice(0, 5).map((r, i) => (
                  <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: i === 0 ? YELLOW : i === 1 ? '#e2e2e2' : '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: GREEN, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name} <span style={{ fontWeight: 400, color: MUTED, fontSize: 12 }}>· {r.city}</span></div>
                      <div style={{ height: 4, background: '#f0f0f0', borderRadius: 2, marginTop: 6 }}>
                        <div style={{ height: '100%', width: `${(r.ca / RESTAURANTS[0].ca) * 100}%`, background: APPLE, borderRadius: 2 }} />
                      </div>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{(r.ca / 1000).toFixed(1)} k€</div>
                    <div style={{ fontSize: 12, color: MUTED }}>⭐ {r.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* === RESTAURANTS === */}
          {section === 'restaurants' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h1 style={{ fontSize: 22, fontWeight: 700, color: GREEN }}>Restaurants du réseau</h1>
                  <p style={{ fontSize: 13, color: MUTED, marginTop: 2 }}>{RESTAURANTS.length} établissements · {RESTAURANTS.filter(r => r.status === 'open').length} ouverts</p>
                </div>
                <button style={{ padding: '10px 20px', background: GREEN, color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
                  + Nouveau restaurant
                </button>
              </div>

              <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,.06)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
                  <thead>
                    <tr style={{ background: '#f8faf9' }}>
                      {['Restaurant', 'Ville', 'CA mensuel', 'Commandes', 'Note', 'Clients', 'Statut', ''].map((h) => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: MUTED, borderBottom: '1px solid #eef0ee' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {RESTAURANTS.map((r) => (
                      <tr key={r.id} style={{ borderBottom: '1px solid #f0f2f0' }}>
                        <td style={{ padding: '13px 16px', fontWeight: 600 }}>{r.name}</td>
                        <td style={{ padding: '13px 16px', color: MUTED }}>{r.city}</td>
                        <td style={{ padding: '13px 16px', fontWeight: 700 }}>{(r.ca / 1000).toFixed(1)} k€</td>
                        <td style={{ padding: '13px 16px' }}>{r.orders}</td>
                        <td style={{ padding: '13px 16px' }}>⭐ {r.rating}</td>
                        <td style={{ padding: '13px 16px' }}>{r.clients.toLocaleString('fr')}</td>
                        <td style={{ padding: '13px 16px' }}>
                          <span style={{ fontSize: 11, padding: '3px 9px', borderRadius: 99, background: r.status === 'open' ? `rgba(101,179,48,.15)` : `rgba(234,102,96,.15)`, color: r.status === 'open' ? APPLE : CORAL, fontWeight: 700 }}>
                            {r.status === 'open' ? 'Ouvert' : 'Maintenance'}
                          </span>
                        </td>
                        <td style={{ padding: '13px 16px' }}>
                          <button style={{ background: 'none', border: `1px solid ${GREEN}`, color: GREEN, borderRadius: 6, padding: '5px 12px', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>
                            Gérer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* === COMMANDES === */}
          {section === 'commandes' && (
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: GREEN, marginBottom: 6 }}>Commandes en temps réel</h1>
              <p style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>Flux consolidé — tous restaurants confondus</p>

              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                {[['En cours', '7', YELLOW], ['Livrées aujourd\'hui', '234', APPLE], ['Annulées', '3', CORAL]].map(([l, v, c]) => (
                  <div key={l as string} style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', boxShadow: '0 1px 4px rgba(0,0,0,.06)', flex: 1 }}>
                    <div style={{ fontSize: 11, color: MUTED, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: c as string, marginTop: 4 }}>{v}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,.06)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
                  <thead>
                    <tr style={{ background: '#f8faf9' }}>
                      {['Référence', 'Restaurant', 'Client', 'Montant', 'Statut', 'Heure'].map((h) => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: MUTED, borderBottom: '1px solid #eef0ee' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ORDERS.map((o) => (
                      <tr key={o.ref} style={{ borderBottom: '1px solid #f0f2f0' }}>
                        <td style={{ padding: '13px 16px', fontFamily: 'monospace', fontSize: 12, color: MUTED }}>{o.ref}</td>
                        <td style={{ padding: '13px 16px', fontWeight: 600 }}>{o.resto}</td>
                        <td style={{ padding: '13px 16px' }}>{o.client}</td>
                        <td style={{ padding: '13px 16px', fontWeight: 700 }}>{o.montant}€</td>
                        <td style={{ padding: '13px 16px' }}>
                          <span style={{ fontSize: 11, padding: '3px 9px', borderRadius: 99, background: o.statut === 'livré' ? `rgba(101,179,48,.15)` : `rgba(254,209,23,.3)`, color: o.statut === 'livré' ? APPLE : '#9a7a00', fontWeight: 700 }}>
                            {o.statut}
                          </span>
                        </td>
                        <td style={{ padding: '13px 16px', color: MUTED, fontSize: 12 }}>{o.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* === FIDÉLITÉ === */}
          {section === 'fidelite' && (
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: GREEN, marginBottom: 6 }}>Programme fidélité</h1>
              <p style={{ fontSize: 13, color: MUTED, marginBottom: 24 }}>{totalClients.toLocaleString('fr')} membres actifs sur l&apos;ensemble du réseau</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
                {FIDELITE.map((f) => (
                  <div key={f.tier} style={{ background: '#fff', borderRadius: 10, padding: '20px', boxShadow: '0 1px 4px rgba(0,0,0,.06)', borderTop: `4px solid ${f.color}` }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: GREEN }}>{f.tier}</div>
                    <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{f.pts} pts</div>
                    <div style={{ fontSize: 30, fontWeight: 700, color: f.color, marginTop: 10 }}>{f.count.toLocaleString('fr')}</div>
                    <div style={{ fontSize: 11, color: MUTED }}>membres</div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fff', borderRadius: 10, padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                <div style={{ fontWeight: 700, color: GREEN, fontSize: 14, marginBottom: 16 }}>Avantages actifs</div>
                {[
                  { pts: 100, label: 'Café offert', usage: '1 240 utilisations ce mois', actif: true },
                  { pts: 250, label: 'Dessert pour 2', usage: '620 utilisations ce mois', actif: true },
                  { pts: 500, label: '20€ de réduction', usage: '180 utilisations ce mois', actif: true },
                  { pts: 1000, label: 'Dîner pour 2 offert', usage: '34 utilisations ce mois', actif: true },
                ].map((a) => (
                  <div key={a.pts} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <div>
                      <span style={{ fontWeight: 600 }}>{a.label}</span>
                      <span style={{ fontSize: 12, color: MUTED, marginLeft: 8 }}>· {a.pts} pts</span>
                    </div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <span style={{ fontSize: 12, color: MUTED }}>{a.usage}</span>
                      <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 99, background: `rgba(101,179,48,.15)`, color: APPLE, fontWeight: 700 }}>Actif</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* === CAMPAGNES === */}
          {section === 'campagnes' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h1 style={{ fontSize: 22, fontWeight: 700, color: GREEN }}>Campagnes marketing</h1>
                  <p style={{ fontSize: 13, color: MUTED, marginTop: 2 }}>Automatisations et campagnes email/SMS</p>
                </div>
                <button style={{ padding: '10px 20px', background: GREEN, color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
                  + Nouvelle campagne
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { name: 'Relance inactifs 30j', type: 'Email automatique', sends: 840, opens: '48%', status: 'active' },
                  { name: 'Offre anniversaire', type: 'Email + SMS', sends: 320, opens: '72%', status: 'active' },
                  { name: 'Nouveau menu printemps', type: 'Email', sends: 7200, opens: '31%', status: 'terminée' },
                  { name: 'Happy Friday -20%', type: 'Push + Email', sends: 4100, opens: '44%', status: 'terminée' },
                ].map((c) => (
                  <div key={c.name} style={{ background: '#fff', borderRadius: 10, padding: '20px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div style={{ fontWeight: 700, fontSize: 15, color: GREEN }}>{c.name}</div>
                      <span style={{ fontSize: 11, padding: '3px 9px', borderRadius: 99, background: c.status === 'active' ? `rgba(101,179,48,.15)` : '#f0f0f0', color: c.status === 'active' ? APPLE : MUTED, fontWeight: 700 }}>
                        {c.status === 'active' ? '● Actif' : 'Terminée'}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: MUTED, marginBottom: 14 }}>{c.type}</div>
                    <div style={{ display: 'flex', gap: 24 }}>
                      <div>
                        <div style={{ fontSize: 20, fontWeight: 700, color: GREEN }}>{c.sends.toLocaleString('fr')}</div>
                        <div style={{ fontSize: 11, color: MUTED }}>envois</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 20, fontWeight: 700, color: APPLE }}>{c.opens}</div>
                        <div style={{ fontSize: 11, color: MUTED }}>taux d&apos;ouverture</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
