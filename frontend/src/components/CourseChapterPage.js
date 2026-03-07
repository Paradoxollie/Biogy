import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  getCourseChapter,
  getCourseLesson,
  resolveCourseSelection,
} from '../data/stlCurriculum';

const LEVEL_STYLES = {
  premiere: {
    badge: 'bg-lab-blue/10 text-lab-blue',
    line: 'bg-lab-blue',
    note: 'border-lab-blue/20 bg-lab-blue/5',
    link: 'text-lab-blue',
  },
  terminale: {
    badge: 'bg-lab-teal/10 text-lab-teal',
    line: 'bg-lab-teal',
    note: 'border-lab-teal/20 bg-lab-teal/5',
    link: 'text-lab-teal',
  },
};

function MicroscopeDiagram() {
  return (
    <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Schema simplifie du microscope">
      <rect x="120" y="190" width="120" height="18" rx="8" fill="#dbeafe" />
      <rect x="168" y="110" width="24" height="82" rx="8" fill="#93c5fd" />
      <path d="M190 70 C220 70 238 95 238 125 L238 150" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinecap="round" />
      <rect x="206" y="50" width="70" height="18" rx="8" fill="#60a5fa" />
      <rect x="224" y="66" width="16" height="26" rx="6" fill="#1d4ed8" />
      <rect x="156" y="104" width="72" height="12" rx="6" fill="#475569" />
      <rect x="134" y="146" width="104" height="8" rx="4" fill="#94a3b8" />
      <circle cx="120" cy="124" r="14" fill="#38bdf8" />
      <circle cx="104" cy="150" r="10" fill="#7dd3fc" />
      <line x1="278" y1="58" x2="326" y2="34" stroke="#94a3b8" strokeWidth="2" />
      <line x1="228" y1="156" x2="326" y2="156" stroke="#94a3b8" strokeWidth="2" />
      <line x1="120" y1="124" x2="44" y2="94" stroke="#94a3b8" strokeWidth="2" />
      <line x1="104" y1="150" x2="44" y2="172" stroke="#94a3b8" strokeWidth="2" />
      <text x="330" y="36" fontSize="12" fill="#334155">Oculaire</text>
      <text x="330" y="160" fontSize="12" fill="#334155">Platine</text>
      <text x="8" y="96" fontSize="12" fill="#334155">Vis macro</text>
      <text x="8" y="176" fontSize="12" fill="#334155">Vis micro</text>
      <text x="130" y="226" fontSize="12" fill="#475569">Commencer toujours au faible grossissement</text>
    </svg>
  );
}

function CellComparisonDiagram() {
  return (
    <svg viewBox="0 0 420 220" className="w-full" role="img" aria-label="Comparaison simple entre cellule procaryote et eucaryote">
      <rect x="28" y="38" width="150" height="120" rx="56" fill="#ecfeff" stroke="#14b8a6" strokeWidth="3" />
      <circle cx="88" cy="98" r="16" fill="#99f6e4" />
      <path d="M106 98 C126 74 150 76 158 98 C146 120 122 118 106 98Z" fill="#5eead4" />
      <line x1="88" y1="98" x2="88" y2="22" stroke="#94a3b8" strokeWidth="2" />
      <text x="58" y="18" fontSize="12" fill="#334155">ADN libre</text>
      <text x="62" y="182" fontSize="14" fontWeight="bold" fill="#0f766e">Procaryote</text>

      <rect x="240" y="26" width="150" height="150" rx="20" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <circle cx="316" cy="102" r="28" fill="#bfdbfe" stroke="#2563eb" strokeWidth="3" />
      <circle cx="280" cy="72" r="10" fill="#93c5fd" />
      <circle cx="350" cy="74" r="10" fill="#93c5fd" />
      <rect x="270" y="126" width="84" height="18" rx="8" fill="#93c5fd" />
      <line x1="316" y1="74" x2="316" y2="12" stroke="#94a3b8" strokeWidth="2" />
      <text x="300" y="12" fontSize="12" fill="#334155">Noyau</text>
      <text x="286" y="198" fontSize="14" fontWeight="bold" fill="#1d4ed8">Eucaryote</text>
    </svg>
  );
}

function BiotechDomainsDiagram() {
  return (
    <svg viewBox="0 0 480 300" className="w-full" role="img" aria-label="Les cinq domaines des biotechnologies">
      <ellipse cx="240" cy="150" rx="90" ry="52" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="3" />
      <text x="188" y="140" fontSize="20" fontWeight="bold" fill="#0f172a">Biotechnologies</text>
      <text x="176" y="166" fontSize="12" fill="#334155">utiliser le vivant pour</text>
      <text x="184" y="184" fontSize="12" fill="#334155">produire un bien ou un service</text>

      <ellipse cx="108" cy="76" rx="74" ry="42" fill="#fff1f2" stroke="#ef4444" strokeWidth="3" />
      <text x="78" y="72" fontSize="15" fontWeight="bold" fill="#991b1b">Rouges</text>
      <text x="52" y="94" fontSize="12" fill="#7f1d1d">sante et diagnostic</text>

      <ellipse cx="370" cy="68" rx="74" ry="42" fill="#fefce8" stroke="#eab308" strokeWidth="3" />
      <text x="340" y="64" fontSize="15" fontWeight="bold" fill="#854d0e">Jaunes</text>
      <text x="316" y="86" fontSize="12" fill="#713f12">environnement</text>

      <ellipse cx="402" cy="210" rx="74" ry="42" fill="#f0fdf4" stroke="#65a30d" strokeWidth="3" />
      <text x="372" y="206" fontSize="15" fontWeight="bold" fill="#3f6212">Vertes</text>
      <text x="346" y="228" fontSize="12" fill="#365314">agriculture</text>

      <ellipse cx="114" cy="220" rx="74" ry="42" fill="#eff6ff" stroke="#2563eb" strokeWidth="3" />
      <text x="84" y="216" fontSize="15" fontWeight="bold" fill="#1d4ed8">Bleues</text>
      <text x="64" y="238" fontSize="12" fill="#1e3a8a">milieux marins</text>

      <ellipse cx="246" cy="258" rx="74" ry="32" fill="#f8fafc" stroke="#0f172a" strokeWidth="3" />
      <text x="212" y="255" fontSize="15" fontWeight="bold" fill="#111827">Blanches</text>
      <text x="206" y="274" fontSize="12" fill="#374151">industrie</text>

      <line x1="172" y1="124" x2="144" y2="102" stroke="#94a3b8" strokeWidth="2" />
      <line x1="304" y1="120" x2="332" y2="96" stroke="#94a3b8" strokeWidth="2" />
      <line x1="320" y1="186" x2="348" y2="198" stroke="#94a3b8" strokeWidth="2" />
      <line x1="160" y1="190" x2="144" y2="200" stroke="#94a3b8" strokeWidth="2" />
      <line x1="240" y1="202" x2="240" y2="226" stroke="#94a3b8" strokeWidth="2" />
    </svg>
  );
}

function MeasurementReliabilityDiagram() {
  return (
    <svg viewBox="0 0 480 260" className="w-full" role="img" aria-label="Lecture de mesure et fiabilite d un resultat">
      <rect x="36" y="36" width="112" height="168" rx="18" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <rect x="72" y="72" width="40" height="96" rx="12" fill="#dbeafe" stroke="#60a5fa" strokeWidth="3" />
      <line x1="72" y1="116" x2="112" y2="116" stroke="#1d4ed8" strokeWidth="3" />
      <circle cx="144" cy="108" r="10" fill="#fecaca" />
      <circle cx="144" cy="138" r="10" fill="#bbf7d0" />
      <line x1="154" y1="108" x2="202" y2="92" stroke="#94a3b8" strokeWidth="2" />
      <line x1="154" y1="138" x2="202" y2="140" stroke="#94a3b8" strokeWidth="2" />
      <text x="206" y="94" fontSize="12" fill="#334155">Regard trop haut</text>
      <text x="206" y="144" fontSize="12" fill="#334155">Oeil a hauteur</text>
      <text x="42" y="226" fontSize="12" fill="#334155">Lecture correcte du menisque</text>

      <rect x="266" y="40" width="174" height="156" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      <line x1="292" y1="176" x2="420" y2="176" stroke="#94a3b8" strokeWidth="2" />
      <line x1="292" y1="66" x2="292" y2="176" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="330" cy="120" r="7" fill="#38bdf8" />
      <circle cx="356" cy="116" r="7" fill="#38bdf8" />
      <circle cx="382" cy="118" r="7" fill="#38bdf8" />
      <circle cx="408" cy="84" r="7" fill="#ef4444" />
      <text x="314" y="60" fontSize="12" fill="#334155">Mesures proches</text>
      <text x="396" y="74" fontSize="12" fill="#7f1d1d">Valeur a verifier</text>
      <text x="304" y="196" fontSize="12" fill="#334155">Comparer les valeurs obtenues</text>
    </svg>
  );
}

function DataVisualizationDiagram() {
  return (
    <svg viewBox="0 0 480 260" className="w-full" role="img" aria-label="Organisation de donnees et representation graphique">
      <rect x="26" y="36" width="156" height="176" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      <text x="48" y="60" fontSize="14" fontWeight="bold" fill="#1f2937">Tableau propre</text>
      <line x1="44" y1="78" x2="164" y2="78" stroke="#94a3b8" strokeWidth="2" />
      <line x1="44" y1="108" x2="164" y2="108" stroke="#e2e8f0" strokeWidth="2" />
      <line x1="44" y1="138" x2="164" y2="138" stroke="#e2e8f0" strokeWidth="2" />
      <line x1="44" y1="168" x2="164" y2="168" stroke="#e2e8f0" strokeWidth="2" />
      <line x1="84" y1="52" x2="84" y2="196" stroke="#e2e8f0" strokeWidth="2" />
      <line x1="128" y1="52" x2="128" y2="196" stroke="#e2e8f0" strokeWidth="2" />
      <text x="48" y="96" fontSize="11" fill="#334155">Temps</text>
      <text x="92" y="96" fontSize="11" fill="#334155">Abs.</text>
      <text x="134" y="96" fontSize="11" fill="#334155">Obs.</text>

      <rect x="214" y="36" width="240" height="176" rx="18" fill="#eff6ff" stroke="#60a5fa" strokeWidth="3" />
      <text x="240" y="60" fontSize="14" fontWeight="bold" fill="#1f2937">Graphique adapte</text>
      <line x1="244" y1="176" x2="424" y2="176" stroke="#94a3b8" strokeWidth="2" />
      <line x1="244" y1="82" x2="244" y2="176" stroke="#94a3b8" strokeWidth="2" />
      <rect x="270" y="136" width="22" height="40" rx="4" fill="#38bdf8" />
      <rect x="312" y="112" width="22" height="64" rx="4" fill="#0ea5e9" />
      <rect x="354" y="92" width="22" height="84" rx="4" fill="#2563eb" />
      <polyline points="272,118 324,104 368,88 404,72" fill="none" stroke="#0f766e" strokeWidth="3" />
      <circle cx="272" cy="118" r="4" fill="#0f766e" />
      <circle cx="324" cy="104" r="4" fill="#0f766e" />
      <circle cx="368" cy="88" r="4" fill="#0f766e" />
      <circle cx="404" cy="72" r="4" fill="#0f766e" />
      <text x="236" y="198" fontSize="12" fill="#334155">Tableau lisible puis graphique interpretable</text>
    </svg>
  );
}

function CultureConditionsDiagram() {
  return (
    <svg viewBox="0 0 480 280" className="w-full" role="img" aria-label="Conditions de culture des micro-organismes">
      <circle cx="240" cy="138" r="72" fill="#ecfeff" stroke="#14b8a6" strokeWidth="4" />
      <circle cx="240" cy="138" r="54" fill="#ccfbf1" stroke="#2dd4bf" strokeWidth="3" strokeDasharray="6 6" />
      <text x="198" y="134" fontSize="18" fontWeight="bold" fill="#115e59">Culture</text>
      <text x="186" y="156" fontSize="12" fill="#134e4a">croissance microbienne</text>

      <line x1="240" y1="66" x2="240" y2="26" stroke="#94a3b8" strokeWidth="2" />
      <line x1="308" y1="110" x2="374" y2="78" stroke="#94a3b8" strokeWidth="2" />
      <line x1="308" y1="166" x2="378" y2="196" stroke="#94a3b8" strokeWidth="2" />
      <line x1="172" y1="166" x2="102" y2="196" stroke="#94a3b8" strokeWidth="2" />
      <line x1="172" y1="110" x2="106" y2="76" stroke="#94a3b8" strokeWidth="2" />

      <text x="214" y="18" fontSize="12" fill="#334155">Temperature</text>
      <text x="384" y="78" fontSize="12" fill="#334155">Nutriments</text>
      <text x="384" y="202" fontSize="12" fill="#334155">Oxygene / temps</text>
      <text x="26" y="202" fontSize="12" fill="#334155">Asepsie</text>
      <text x="24" y="74" fontSize="12" fill="#334155">pH / milieu</text>
      <text x="144" y="252" fontSize="12" fill="#334155">La croissance depend des conditions choisies</text>
    </svg>
  );
}

function IdentificationFlowDiagram() {
  return (
    <svg viewBox="0 0 520 240" className="w-full" role="img" aria-label="Demarche d identification d un micro-organisme">
      <rect x="24" y="84" width="96" height="58" rx="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <rect x="152" y="84" width="96" height="58" rx="14" fill="#ecfeff" stroke="#14b8a6" strokeWidth="3" />
      <rect x="280" y="84" width="96" height="58" rx="14" fill="#fefce8" stroke="#eab308" strokeWidth="3" />
      <rect x="408" y="84" width="88" height="58" rx="14" fill="#f0fdf4" stroke="#65a30d" strokeWidth="3" />
      <text x="42" y="108" fontSize="13" fontWeight="bold" fill="#1f2937">Observer</text>
      <text x="38" y="126" fontSize="11" fill="#334155">culture / microscope</text>
      <text x="166" y="108" fontSize="13" fontWeight="bold" fill="#1f2937">Orienter</text>
      <text x="166" y="126" fontSize="11" fill="#334155">hypotheses</text>
      <text x="298" y="108" fontSize="13" fontWeight="bold" fill="#1f2937">Tester</text>
      <text x="294" y="126" fontSize="11" fill="#334155">tests discriminants</text>
      <text x="424" y="108" fontSize="13" fontWeight="bold" fill="#1f2937">Conclure</text>
      <text x="422" y="126" fontSize="11" fill="#334155">prudemment</text>
      <line x1="120" y1="113" x2="152" y2="113" stroke="#94a3b8" strokeWidth="3" />
      <line x1="248" y1="113" x2="280" y2="113" stroke="#94a3b8" strokeWidth="3" />
      <line x1="376" y1="113" x2="408" y2="113" stroke="#94a3b8" strokeWidth="3" />
      <text x="118" y="42" fontSize="12" fill="#334155">Plusieurs indices convergents</text>
      <text x="162" y="192" fontSize="12" fill="#334155">Un test seul ne suffit pas toujours</text>
    </svg>
  );
}

function SerialDilutionDiagram() {
  return (
    <svg viewBox="0 0 520 280" className="w-full" role="img" aria-label="Gamme de dilutions et boites de denombrement">
      <text x="28" y="34" fontSize="14" fontWeight="bold" fill="#1f2937">Dilutions successives</text>
      {[0, 1, 2, 3].map((index) => {
        const x = 36 + index * 86;
        const label = ['10^-1', '10^-2', '10^-3', '10^-4'][index];
        return (
          <g key={label}>
            <rect x={x} y="62" width="36" height="94" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
            <rect x={x} y="108" width="36" height="48" rx="0" fill="#93c5fd" />
            {index < 3 ? <line x1={x + 36} y1="104" x2={x + 76} y2="104" stroke="#94a3b8" strokeWidth="2" /> : null}
            <text x={x - 2} y="176" fontSize="12" fill="#334155">{label}</text>
          </g>
        );
      })}
      <text x="338" y="34" fontSize="14" fontWeight="bold" fill="#1f2937">Boites obtenues</text>
      {[{ x: 352, c: 'Trop chargee', dots: 14 }, { x: 420, c: 'Exploitable', dots: 7 }, { x: 488, c: 'Trop pauvre', dots: 3 }].map((item, idx) => (
        <g key={item.c}>
          <circle cx={item.x} cy="108" r="28" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
          {Array.from({ length: item.dots }).map((_, i) => {
            const dx = [-10, -2, 8, 14, -14, 4, -6, 12, -12, 0, 10, -8, 6, -4][i];
            const dy = [-10, -6, -4, 4, 6, 10, 12, -12, 0, -14, 8, 2, -8, 14][i];
            return <circle key={i} cx={item.x + dx} cy={108 + dy} r="2.8" fill={idx === 1 ? '#0ea5e9' : '#475569'} />;
          })}
          <text x={item.x - 30} y="154" fontSize="11" fill="#334155">{item.c}</text>
        </g>
      ))}
      <text x="122" y="236" fontSize="12" fill="#334155">Choisir la boite qui permet un comptage net et interpretable</text>
    </svg>
  );
}

function SolutionPreparationDiagram() {
  return (
    <svg viewBox="0 0 520 280" className="w-full" role="img" aria-label="Preparation d une solution par dissolution et dilution">
      <rect x="30" y="38" width="206" height="194" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      <text x="60" y="62" fontSize="14" fontWeight="bold" fill="#1f2937">Dissolution</text>
      <rect x="62" y="146" width="52" height="46" rx="10" fill="#dbeafe" stroke="#60a5fa" strokeWidth="3" />
      <rect x="142" y="96" width="44" height="96" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <rect x="150" y="138" width="28" height="54" fill="#93c5fd" />
      <line x1="114" y1="170" x2="142" y2="146" stroke="#94a3b8" strokeWidth="3" />
      <text x="56" y="214" fontSize="11" fill="#334155">Solide pese</text>
      <text x="136" y="214" fontSize="11" fill="#334155">Fiole jaugee</text>

      <rect x="284" y="38" width="206" height="194" rx="20" fill="#eff6ff" stroke="#60a5fa" strokeWidth="3" />
      <text x="320" y="62" fontSize="14" fontWeight="bold" fill="#1f2937">Dilution</text>
      <rect x="314" y="98" width="36" height="94" rx="12" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="3" />
      <rect x="322" y="126" width="20" height="66" fill="#7dd3fc" />
      <rect x="390" y="92" width="44" height="100" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <rect x="398" y="144" width="28" height="48" fill="#93c5fd" />
      <line x1="350" y1="128" x2="390" y2="128" stroke="#94a3b8" strokeWidth="3" />
      <text x="292" y="214" fontSize="11" fill="#334155">Solution mere</text>
      <text x="388" y="214" fontSize="11" fill="#334155">Solution fille</text>
      <text x="112" y="258" fontSize="12" fill="#334155">Masse precise puis volume final precise</text>
      <text x="344" y="258" fontSize="12" fill="#334155">Prelever puis completer au trait</text>
    </svg>
  );
}

function BiomoleculeTestsDiagram() {
  return (
    <svg viewBox="0 0 520 260" className="w-full" role="img" aria-label="Exemples de tests de reconnaissance des biomolecules">
      {[
        { x: 56, fill: '#facc15', label: 'Amidon', sub: 'Lugol' },
        { x: 168, fill: '#c084fc', label: 'Proteines', sub: 'Biuret' },
        { x: 280, fill: '#fb923c', label: 'Sucres red.', sub: 'Benedict' },
        { x: 392, fill: '#f472b6', label: 'Lipides', sub: 'Sudan' },
      ].map((item) => (
        <g key={item.label}>
          <rect x={item.x} y="54" width="48" height="118" rx="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
          <rect x={item.x + 8} y="106" width="32" height="66" rx="6" fill={item.fill} opacity="0.85" />
          <text x={item.x - 4} y="198" fontSize="12" fill="#1f2937">{item.label}</text>
          <text x={item.x + 2} y="216" fontSize="11" fill="#475569">{item.sub}</text>
        </g>
      ))}
      <text x="112" y="30" fontSize="14" fontWeight="bold" fill="#1f2937">Choisir un test selon la biomolecule recherchee</text>
      <text x="126" y="240" fontSize="12" fill="#334155">Le resultat se compare toujours a des temoins</text>
    </svg>
  );
}

function SeparationTechniquesDiagram() {
  return (
    <svg viewBox="0 0 540 280" className="w-full" role="img" aria-label="Techniques simples de separation">
      <rect x="24" y="34" width="150" height="196" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      <text x="62" y="58" fontSize="14" fontWeight="bold" fill="#1f2937">Filtration</text>
      <path d="M78 86 L120 86 L98 126 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
      <rect x="90" y="126" width="16" height="34" fill="#cbd5e1" />
      <rect x="74" y="160" width="48" height="34" rx="8" fill="#dbeafe" stroke="#60a5fa" strokeWidth="3" />

      <rect x="196" y="34" width="150" height="196" rx="20" fill="#eff6ff" stroke="#60a5fa" strokeWidth="3" />
      <text x="222" y="58" fontSize="14" fontWeight="bold" fill="#1f2937">Centrifugation</text>
      <rect x="258" y="82" width="28" height="110" rx="12" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="3" />
      <rect x="264" y="138" width="16" height="46" fill="#7dd3fc" />
      <path d="M250 202 Q272 222 294 202" fill="#dcfce7" stroke="#65a30d" strokeWidth="3" />
      <text x="222" y="216" fontSize="11" fill="#334155">Pellet + surnageant</text>

      <rect x="368" y="34" width="150" height="196" rx="20" fill="#ecfeff" stroke="#14b8a6" strokeWidth="3" />
      <text x="390" y="58" fontSize="14" fontWeight="bold" fill="#1f2937">Chromatographie</text>
      <rect x="422" y="82" width="46" height="110" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
      <line x1="430" y1="170" x2="460" y2="170" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="444" cy="150" r="4" fill="#0ea5e9" />
      <circle cx="438" cy="122" r="4" fill="#2563eb" />
      <circle cx="452" cy="98" r="4" fill="#0f766e" />
      <text x="394" y="216" fontSize="11" fill="#334155">Migration differente</text>
    </svg>
  );
}

function RiskAnalysisDiagram() {
  return (
    <svg viewBox="0 0 540 280" className="w-full" role="img" aria-label="Analyse a priori des risques au laboratoire">
      <rect x="22" y="42" width="116" height="52" rx="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <rect x="156" y="42" width="130" height="52" rx="14" fill="#ecfeff" stroke="#14b8a6" strokeWidth="3" />
      <rect x="304" y="42" width="128" height="52" rx="14" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" />
      <rect x="450" y="42" width="68" height="52" rx="14" fill="#fee2e2" stroke="#ef4444" strokeWidth="3" />
      <text x="38" y="72" fontSize="12" fill="#1f2937">Situation de travail</text>
      <text x="172" y="72" fontSize="12" fill="#1f2937">Situation exposante</text>
      <text x="324" y="72" fontSize="12" fill="#1f2937">Evenement dangereux</text>
      <text x="466" y="72" fontSize="12" fill="#1f2937">Dommage</text>
      <line x1="138" y1="68" x2="156" y2="68" stroke="#94a3b8" strokeWidth="3" />
      <line x1="286" y1="68" x2="304" y2="68" stroke="#94a3b8" strokeWidth="3" />
      <line x1="432" y1="68" x2="450" y2="68" stroke="#94a3b8" strokeWidth="3" />

      {[
        { x: 54, title: 'Manipulateur' },
        { x: 162, title: 'Matiere' },
        { x: 270, title: 'Materiel' },
        { x: 378, title: 'Methode' },
        { x: 466, title: 'Milieu' },
      ].map((item) => (
        <g key={item.title}>
          <rect x={item.x} y="164" width="70" height="48" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2.5" />
          <text x={item.x + 8} y="192" fontSize="11" fill="#334155">{item.title}</text>
        </g>
      ))}
      <text x="164" y="244" fontSize="12" fill="#334155">Analyser puis choisir une prevention adaptee</text>
    </svg>
  );
}

function TitrationDiagram() {
  return (
    <svg viewBox="0 0 560 300" className="w-full" role="img" aria-label="Montage de dosage volumetrique et courbe d equivalence">
      <rect x="56" y="30" width="24" height="132" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <rect x="60" y="88" width="16" height="74" fill="#93c5fd" />
      <rect x="64" y="162" width="8" height="26" rx="4" fill="#1d4ed8" />
      <line x1="72" y1="188" x2="102" y2="210" stroke="#60a5fa" strokeWidth="3" />
      <path d="M98 210 L138 210 L124 250 L112 250 Z" fill="#dbeafe" stroke="#60a5fa" strokeWidth="3" />
      <ellipse cx="118" cy="250" rx="24" ry="6" fill="#bfdbfe" />
      <text x="34" y="20" fontSize="12" fill="#334155">Burette</text>
      <text x="88" y="272" fontSize="12" fill="#334155">Erlenmeyer</text>

      <rect x="256" y="34" width="246" height="210" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      <line x1="286" y1="214" x2="468" y2="214" stroke="#94a3b8" strokeWidth="2" />
      <line x1="286" y1="68" x2="286" y2="214" stroke="#94a3b8" strokeWidth="2" />
      <polyline points="298,198 336,190 364,178 386,154 402,126 414,108 432,98 456,92" fill="none" stroke="#0ea5e9" strokeWidth="4" />
      <line x1="396" y1="74" x2="396" y2="214" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 6" />
      <text x="382" y="62" fontSize="12" fill="#7f1d1d">Ve</text>
      <text x="304" y="86" fontSize="12" fill="#334155">Grande variation</text>
      <text x="314" y="236" fontSize="12" fill="#334155">Volume de titrant verse</text>
      <text x="230" y="144" fontSize="12" fill="#334155" transform="rotate(-90 230 144)">Grandeur suivie</text>
    </svg>
  );
}

function getToneClasses(tone) {
  const tones = {
    blue: 'border-blue-200 bg-blue-50',
    teal: 'border-teal-200 bg-teal-50',
    green: 'border-green-200 bg-green-50',
    amber: 'border-amber-200 bg-amber-50',
    rose: 'border-rose-200 bg-rose-50',
    slate: 'border-slate-200 bg-slate-50',
    violet: 'border-violet-200 bg-violet-50',
  };

  return tones[tone] || 'border-gray-200 bg-gray-50';
}

function DiagramTextBlock({ item }) {
  return (
    <>
      <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">{item.title}</h4>
      {item.text ? <p className="mt-2 text-sm leading-6 text-gray-700">{item.text}</p> : null}
      {item.bullets?.length ? (
        <ul className="mt-2 space-y-1 text-sm leading-6 text-gray-700">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function StructuredDiagram({ spec }) {
  if (!spec) {
    return null;
  }

  if (spec.kind === 'flow') {
    return (
      <div className="space-y-4">
        {spec.title ? <h4 className="text-base font-bold text-gray-800">{spec.title}</h4> : null}
        <div className="flex flex-wrap items-center gap-3">
          {spec.nodes.map((node, index) => (
            <React.Fragment key={node.title}>
              <article className={`min-w-[140px] flex-1 rounded-2xl border px-4 py-4 ${getToneClasses(node.tone)}`}>
                <DiagramTextBlock item={node} />
              </article>
              {index < spec.nodes.length - 1 ? (
                <div className="px-1 text-xl font-bold text-gray-400">→</div>
              ) : null}
            </React.Fragment>
          ))}
        </div>
        {spec.footer ? <p className="text-sm leading-6 text-gray-600">{spec.footer}</p> : null}
      </div>
    );
  }

  if (spec.kind === 'comparison') {
    return (
      <div className="space-y-4">
        {spec.title ? <h4 className="text-base font-bold text-gray-800">{spec.title}</h4> : null}
        <div className={`grid gap-4 ${spec.columns.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {spec.columns.map((column) => (
            <article key={column.title} className={`rounded-2xl border px-4 py-4 ${getToneClasses(column.tone)}`}>
              <DiagramTextBlock item={column} />
            </article>
          ))}
        </div>
        {spec.footer ? <p className="text-sm leading-6 text-gray-600">{spec.footer}</p> : null}
      </div>
    );
  }

  if (spec.kind === 'cycle') {
    return (
      <div className="space-y-4">
        {spec.title ? <h4 className="text-base font-bold text-gray-800">{spec.title}</h4> : null}
        <div className="rounded-3xl border border-gray-200 bg-white p-4">
          <div className="mx-auto max-w-sm rounded-3xl border border-lab-blue/20 bg-lab-blue/5 px-5 py-4 text-center">
            <h5 className="text-base font-bold text-gray-800">{spec.center.title}</h5>
            {spec.center.text ? <p className="mt-2 text-sm leading-6 text-gray-700">{spec.center.text}</p> : null}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {spec.nodes.map((node) => (
              <article key={node.title} className={`rounded-2xl border px-4 py-4 ${getToneClasses(node.tone)}`}>
                <DiagramTextBlock item={node} />
              </article>
            ))}
          </div>
        </div>
        {spec.footer ? <p className="text-sm leading-6 text-gray-600">{spec.footer}</p> : null}
      </div>
    );
  }

  if (spec.kind === 'bars') {
    return (
      <div className="space-y-4">
        {spec.title ? <h4 className="text-base font-bold text-gray-800">{spec.title}</h4> : null}
        <div className="rounded-3xl border border-gray-200 bg-white p-4">
          <div className="flex h-52 items-end justify-between gap-3">
            {spec.bars.map((bar) => (
              <div key={bar.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="text-xs font-semibold text-gray-500">{bar.valueLabel || bar.value}</div>
                <div
                  className={`w-full rounded-t-2xl ${bar.colorClass || 'bg-lab-blue'}`}
                  style={{ height: `${Math.max(16, Math.min(100, bar.value))}%` }}
                />
                <div className="text-center text-xs font-semibold text-gray-700">{bar.label}</div>
              </div>
            ))}
          </div>
          {spec.footer ? <p className="mt-4 text-sm leading-6 text-gray-600">{spec.footer}</p> : null}
        </div>
      </div>
    );
  }

  if (spec.kind === 'curve') {
    const points = spec.points || [];
    const maxY = Math.max(...points.map((point) => point.y), 1);
    const width = 420;
    const height = 180;
    const startX = 44;
    const startY = 150;
    const graphWidth = 320;
    const graphHeight = 108;
    const stepX = points.length > 1 ? graphWidth / (points.length - 1) : graphWidth;
    const polyline = points
      .map((point, index) => {
        const x = startX + index * stepX;
        const y = startY - (point.y / maxY) * graphHeight;
        return `${x},${y}`;
      })
      .join(' ');

    return (
      <div className="space-y-4">
        {spec.title ? <h4 className="text-base font-bold text-gray-800">{spec.title}</h4> : null}
        <div className="rounded-3xl border border-gray-200 bg-white p-4">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label={spec.title || 'Graphique'}>
            <line x1={startX} y1={startY} x2={startX + graphWidth + 20} y2={startY} stroke="#94a3b8" strokeWidth="2" />
            <line x1={startX} y1={24} x2={startX} y2={startY} stroke="#94a3b8" strokeWidth="2" />
            <polyline points={polyline} fill="none" stroke="#0ea5e9" strokeWidth="4" />
            {points.map((point, index) => {
              const x = startX + index * stepX;
              const y = startY - (point.y / maxY) * graphHeight;

              return (
                <g key={point.label}>
                  <circle cx={x} cy={y} r="4" fill="#0284c7" />
                  <text x={x - 8} y={startY + 18} fontSize="10" fill="#475569">
                    {point.label}
                  </text>
                </g>
              );
            })}
            <text x={width / 2 - 40} y={height - 4} fontSize="11" fill="#475569">
              {spec.xLabel || 'Abscisses'}
            </text>
            <text x="10" y={height / 2} fontSize="11" fill="#475569" transform={`rotate(-90 10 ${height / 2})`}>
              {spec.yLabel || 'Ordonnees'}
            </text>
          </svg>
          {spec.footer ? <p className="mt-4 text-sm leading-6 text-gray-600">{spec.footer}</p> : null}
        </div>
      </div>
    );
  }

  return null;
}

function getDiagramNode(diagramId) {
  const diagrams = {
    microscope: <MicroscopeDiagram />,
    cells: <CellComparisonDiagram />,
    domains: <BiotechDomainsDiagram />,
    measurement: <MeasurementReliabilityDiagram />,
    dataflow: <DataVisualizationDiagram />,
    culture: <CultureConditionsDiagram />,
    identification: <IdentificationFlowDiagram />,
    denombrement: <SerialDilutionDiagram />,
    solutions: <SolutionPreparationDiagram />,
    biomolecules: <BiomoleculeTestsDiagram />,
    separation: <SeparationTechniquesDiagram />,
    risks: <RiskAnalysisDiagram />,
    titration: <TitrationDiagram />,
  };

  return diagrams[diagramId] || null;
}

function renderDiagramContent({ diagramId, diagramSpec }) {
  if (diagramSpec) {
    return <StructuredDiagram spec={diagramSpec} />;
  }

  return getDiagramNode(diagramId);
}

function DiagramCard({ diagram }) {
  const node = renderDiagramContent({ diagramId: diagram.id, diagramSpec: diagram.diagramSpec });

  if (!node) {
    return null;
  }

  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
      <h3 className="text-lg font-bold text-gray-800">{diagram.title}</h3>
      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-lab-bg p-4">
        {node}
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-600">{diagram.caption}</p>
    </article>
  );
}

function MediaCredit({ item }) {
  if (!item?.credit && !item?.license && !item?.sourceUrl) {
    return null;
  }

  return (
    <div className="mt-4 rounded-xl border border-white/80 bg-white px-3 py-3 text-xs leading-5 text-gray-500">
      {item.credit ? <p>Credit visuel : {item.credit}</p> : null}
      {item.license ? <p>Licence : {item.license}</p> : null}
      {item.sourceUrl ? (
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex font-semibold text-lab-blue hover:underline"
        >
          Voir la source du visuel
        </a>
      ) : null}
    </div>
  );
}

function DocumentCard({ document, onOpenImage }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        {document.label ? (
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-700">
            {document.label}
          </span>
        ) : null}
        {document.source ? (
          <span className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-gray-600">
            {document.source}
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 text-base font-semibold leading-6 text-gray-800">{document.title}</h3>

      {document.imageSrc || document.diagramId || document.diagramSpec ? (
        <div className="mt-4">
          <button
            type="button"
            onClick={() =>
              onOpenImage?.({
                src: document.imageSrc,
                diagramId: document.diagramId,
                diagramSpec: document.diagramSpec,
                alt: document.imageAlt || document.title,
                title: document.title,
                credit: document.credit,
                license: document.license,
                sourceUrl: document.sourceUrl,
                footer: document.footer,
              })
            }
            className="group block w-full overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition hover:shadow-md"
          >
            {document.imageSrc ? (
              <img
                src={document.imageSrc}
                alt={document.imageAlt || document.title}
                className="h-auto w-full object-contain"
              />
            ) : document.diagramSpec ? (
              <div className="p-4">{renderDiagramContent({ diagramSpec: document.diagramSpec })}</div>
            ) : (
              <div className="p-4">{getDiagramNode(document.diagramId)}</div>
            )}
          </button>
          <button
            type="button"
            onClick={() =>
              onOpenImage?.({
                src: document.imageSrc,
                diagramId: document.diagramId,
                diagramSpec: document.diagramSpec,
                alt: document.imageAlt || document.title,
                title: document.title,
                credit: document.credit,
                license: document.license,
                sourceUrl: document.sourceUrl,
                footer: document.footer,
              })
            }
            className="mt-2 text-sm font-semibold text-lab-blue hover:underline"
          >
            {document.diagramId || document.diagramSpec ? 'Agrandir le schema' : 'Agrandir l image'}
          </button>
        </div>
      ) : null}

      {document.body?.length ? (
        <div className="mt-3 space-y-3 text-sm leading-6 text-gray-700">
          {document.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {document.footer ? (
        <p className="mt-4 rounded-xl border border-white/80 bg-white px-3 py-3 text-sm leading-6 text-gray-600">
          {document.footer}
        </p>
      ) : null}

      <MediaCredit item={document} />

    </article>
  );
}

function SupportList({ supports, onOpenImage }) {
  if (!supports?.length) {
    return null;
  }

  return (
    <div className="mt-4 space-y-3">
      {supports.map((support) => (
        <div key={`${support.label}-${support.detail || ''}`} className="rounded-2xl border border-gray-200 bg-white px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Support</p>
          {support.url ? (
            <a
              href={support.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm font-semibold text-lab-blue hover:underline"
            >
              {support.label}
            </a>
          ) : (
            <p className="mt-2 text-sm font-semibold text-gray-800">{support.label}</p>
          )}
          {support.detail ? (
            <p className="mt-2 text-sm leading-6 text-gray-600">{support.detail}</p>
          ) : null}
          {support.imageSrc || support.diagramId || support.diagramSpec ? (
            <div className="mt-3">
              <button
                type="button"
                onClick={() =>
                  onOpenImage?.({
                    src: support.imageSrc,
                    diagramId: support.diagramId,
                    diagramSpec: support.diagramSpec,
                    alt: support.imageAlt || support.label,
                    title: support.label,
                    credit: support.credit,
                    license: support.license,
                    sourceUrl: support.sourceUrl,
                    footer: support.detail,
                  })
                }
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition hover:shadow-md"
              >
                {support.imageSrc ? (
                  <img
                    src={support.imageSrc}
                    alt={support.imageAlt || support.label}
                    className="h-auto max-w-[220px] object-contain"
                  />
                ) : support.diagramSpec ? (
                  <div className="max-w-[320px] p-3">{renderDiagramContent({ diagramSpec: support.diagramSpec })}</div>
                ) : (
                  <div className="max-w-[260px] p-3">{getDiagramNode(support.diagramId)}</div>
                )}
              </button>
              <button
                type="button"
                onClick={() =>
                  onOpenImage?.({
                    src: support.imageSrc,
                    diagramId: support.diagramId,
                    diagramSpec: support.diagramSpec,
                    alt: support.imageAlt || support.label,
                    title: support.label,
                    credit: support.credit,
                    license: support.license,
                    sourceUrl: support.sourceUrl,
                    footer: support.detail,
                  })
                }
                className="mt-2 text-sm font-semibold text-lab-blue hover:underline"
              >
                {support.diagramId || support.diagramSpec ? 'Agrandir le schema' : 'Agrandir le support'}
              </button>
            </div>
          ) : null}
          <MediaCredit item={support} />
        </div>
      ))}
    </div>
  );
}

function QuestionSetCard({ item, style, onOpenImage }) {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
      {item.tag ? (
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
          {item.tag}
        </span>
      ) : null}
      <h3 className="mt-3 text-2xl font-bold text-gray-800">{item.title}</h3>
      {item.intro ? (
        <p className="mt-4 text-[15px] leading-8 text-gray-700">{item.intro}</p>
      ) : null}

      <SupportList supports={item.supports} onOpenImage={onOpenImage} />

      {item.documents?.length ? (
        <div
          className={`mt-5 grid gap-4 ${
            item.documents.length > 2
              ? 'md:grid-cols-2 xl:grid-cols-3'
              : item.documents.length > 1
                ? 'xl:grid-cols-2'
                : ''
          }`}
        >
          {item.documents.map((document) => (
            <DocumentCard
              key={`${item.title}-${document.title}`}
              document={document}
              onOpenImage={onOpenImage}
            />
          ))}
        </div>
      ) : null}

      {item.instruction ? (
        <div className={`mt-5 rounded-2xl border p-4 ${style.note}`}>
          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">Consigne</h4>
          <p className="mt-2 text-sm leading-6 text-gray-700">{item.instruction}</p>
        </div>
      ) : null}

      {item.questions?.length ? (
        <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
            {item.questionsTitle || 'Questions'}
          </h4>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
            {item.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

function CourseSectionCard({ item, style, onOpenImage }) {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
      <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>

      {item.body?.length ? (
        <div className="mt-4 space-y-4 text-[15px] leading-8 text-gray-700">
          {item.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {item.documents?.length ? (
        <div
          className={`mt-5 grid gap-4 ${
            item.documents.length > 2
              ? 'md:grid-cols-2 xl:grid-cols-3'
              : item.documents.length > 1
                ? 'xl:grid-cols-2'
                : ''
          }`}
        >
          {item.documents.map((document) => (
            <DocumentCard
              key={`${item.title}-${document.title}`}
              document={document}
              onOpenImage={onOpenImage}
            />
          ))}
        </div>
      ) : null}

      {item.cards?.length ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {item.cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-2xl border px-4 py-4 shadow-sm ${
                card.tone || 'border-gray-200 bg-gray-50'
              }`}
            >
              <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">{card.title}</h4>
              <p className="mt-2 text-sm leading-6 text-gray-700">{card.text}</p>
            </article>
          ))}
        </div>
      ) : null}

      {item.takeaway ? (
        <div className={`mt-5 rounded-2xl border p-4 ${style.note}`}>
          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
            {item.takeawayTitle || 'A retenir'}
          </h4>
          <p className="mt-2 text-sm leading-6 text-gray-700">{item.takeaway}</p>
        </div>
      ) : null}
    </article>
  );
}

function ChapterLessons({ level, chapter, activeLessonId, style }) {
  if (!chapter.lessons?.length) {
    return null;
  }

  return (
    <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">Sous-parties du chapitre</h2>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Ce chapitre officiel contient plusieurs sous-parties. Ouvre celle que tu veux travailler.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {chapter.lessons.map((lesson) => {
          const isActive = lesson.id === activeLessonId;

          return (
            <Link
              key={lesson.id}
              to={`/apprendre/${level.id}/${chapter.id}/${lesson.id}`}
              className={`rounded-2xl border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                isActive
                  ? `${style.note} border-transparent`
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-700">
                  {lesson.code}
                </span>
                {lesson.content ? (
                  <span className="rounded-full border border-lab-teal/20 bg-lab-teal/10 px-2.5 py-1 text-xs font-semibold text-lab-teal">
                    Disponible
                  </span>
                ) : (
                  <span className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-gray-600">
                    Structure prete
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-base font-semibold leading-6 text-gray-800">{lesson.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{lesson.summary}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function ChapterOutline({ chapter, style }) {
  const hasLessons = Boolean(chapter.lessons?.length);

  return (
    <>
      <section className={`mt-8 rounded-3xl border p-6 shadow-sm ${style.note}`}>
        <h2 className="text-2xl font-bold text-gray-800">Structure du chapitre</h2>
        <p className="mt-3 text-sm leading-7 text-gray-700">{chapter.summary}</p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {chapter.skills.map((skill) => (
            <div key={skill} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm leading-6 text-gray-700">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">
          {hasLessons ? 'Organisation du chapitre' : 'Cours complet'}
        </h2>
        <p className="mt-3 text-sm leading-7 text-gray-600">
          {hasLessons
            ? 'Ce chapitre officiel regroupe plusieurs sous-parties. Ouvre celle qui t interesse dans la liste ci-dessus pour travailler le contenu detaille.'
            : 'Cette page est creee pour garder une structure claire par chapitre. Le cours detaille sera ajoute ensuite dans le meme format que les premiers chapitres deja rediges.'}
        </p>
      </section>
    </>
  );
}

function ImageLightbox({ image, onClose }) {
  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.title || image.alt || 'Image agrandie'}
    >
      <div
        className="relative max-h-[95vh] w-full max-w-6xl rounded-3xl bg-white p-4 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Fermer
        </button>
        {image.title ? (
          <h3 className="pr-20 text-lg font-bold text-gray-800">{image.title}</h3>
        ) : null}
        <div className="mt-4 max-h-[82vh] overflow-auto rounded-2xl border border-gray-200 bg-gray-50 p-3">
          {image.diagramId || image.diagramSpec ? (
            <div className="mx-auto max-w-5xl bg-white p-4">
              {renderDiagramContent({ diagramId: image.diagramId, diagramSpec: image.diagramSpec })}
            </div>
          ) : (
            <img src={image.src} alt={image.alt || image.title || 'Image'} className="mx-auto h-auto w-full object-contain" />
          )}
        </div>
        {image.footer ? (
          <p className="mt-4 rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 text-sm leading-6 text-gray-600">
            {image.footer}
          </p>
        ) : null}
        <MediaCredit item={image} />
      </div>
    </div>
  );
}

function ChapterContent({ chapter, style, onOpenImage }) {
  const content = chapter.content;

  return (
    <>
      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
        <p className="mt-4 text-[15px] leading-8 text-gray-700">{content.intro}</p>
      </section>

      {content.prerequisites?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">A connaitre avant de commencer</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {content.prerequisites.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Objectifs</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {content.objectives.map((objective) => (
            <div key={objective} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700">
              {objective}
            </div>
          ))}
        </div>
      </section>

      {content.chapterQuestions?.length ? (
        <section className={`mt-8 rounded-3xl border p-6 shadow-lg ${style.note}`}>
          <h2 className="text-2xl font-bold text-gray-800">
            {content.chapterQuestionsTitle || 'Questions du chapitre'}
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.chapterQuestions.map((item) => (
              <li key={item} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {content.questionSets?.length ? (
        <section className="mt-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              {content.questionSetsTitle || 'Questions et supports'}
            </h2>
            {content.questionSetsIntro ? (
              <p className="mt-3 text-sm leading-7 text-gray-600">{content.questionSetsIntro}</p>
            ) : null}
          </div>

          <div className="mt-5 space-y-5">
            {content.questionSets.map((item) => (
              <QuestionSetCard
                key={item.title}
                item={item}
                style={style}
                onOpenImage={onOpenImage}
              />
            ))}
          </div>
        </section>
      ) : null}

      {content.courseSections?.length ? (
        <section className="mt-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              {content.courseSectionsTitle || 'Cours'}
            </h2>
            {content.courseSectionsIntro ? (
              <p className="mt-3 text-sm leading-7 text-gray-600">{content.courseSectionsIntro}</p>
            ) : null}
          </div>

          <div className="mt-5 space-y-5">
            {content.courseSections.map((item) => (
              <CourseSectionCard
                key={item.title}
                item={item}
                style={style}
                onOpenImage={onOpenImage}
              />
            ))}
          </div>
        </section>
      ) : null}

      {content.vocabulary?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Vocabulaire essentiel</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {content.vocabulary.map((item) => (
              <article key={item.term} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">{item.term}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.definition}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {content.diagrams?.length ? (
        <section className="mt-8 grid gap-6 xl:grid-cols-2">
          {content.diagrams.map((diagram) => (
            <DiagramCard key={diagram.id} diagram={diagram} />
          ))}
        </section>
      ) : null}

      {content.sections?.length ? (
        <section className="mt-8 space-y-5">
          {content.sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className={`mb-4 h-1.5 w-14 rounded-full ${style.line}`} />
              {section.tag ? (
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                  {section.tag}
                </span>
              ) : null}
              <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>

              {section.supports?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.supports.map((support) =>
                    support.url ? (
                      <a
                        key={support.label}
                        href={support.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600 transition hover:bg-white"
                      >
                        {support.label}
                      </a>
                    ) : (
                      <span
                        key={support.label}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600"
                      >
                        {support.label}
                      </span>
                    ),
                  )}
                </div>
              ) : null}

              <div className="mt-4 space-y-4 text-[15px] leading-8 text-gray-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.documents?.length ? (
                <div
                  className={`mt-5 grid gap-4 ${
                    section.documents.length > 2
                      ? 'md:grid-cols-2 xl:grid-cols-3'
                      : section.documents.length > 1
                        ? 'xl:grid-cols-2'
                        : ''
                  }`}
                >
                  {section.documents.map((document) => (
                    <DocumentCard key={`${section.title}-${document.title}`} document={document} />
                  ))}
                </div>
              ) : null}

              {section.cards?.length ? (
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {section.cards.map((card) => (
                    <article
                      key={card.title}
                      className={`rounded-2xl border px-4 py-4 shadow-sm ${
                        card.tone || 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-700">{card.text}</p>
                    </article>
                  ))}
                </div>
              ) : null}

              {section.questions?.length ? (
                <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
                    {section.questionsTitle || 'Questions'}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                    {section.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {section.takeaway ? (
                <div className={`mt-5 rounded-2xl border p-4 ${style.note}`}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800">
                    {section.takeawayTitle || 'Ce qu il faut retenir'}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{section.takeaway}</p>
                </div>
              ) : null}
            </article>
          ))}
        </section>
      ) : null}

      {content.method?.steps?.length ? (
        <section className={`mt-8 rounded-3xl border p-6 shadow-lg ${style.note}`}>
          <h2 className="text-2xl font-bold text-gray-800">{content.method.title}</h2>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.method.steps.map((step) => (
              <li key={step} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3">
                {step}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {content.commonMistakes?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Erreurs a eviter</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.commonMistakes.map((item) => (
              <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">{content.keyPointsTitle || 'A retenir'}</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.keyPoints.map((item) => (
              <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            {content.selfCheckTitle || 'Questions pour verifier'}
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
            {content.selfCheck.map((item) => (
              <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {content.practice?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            {content.practiceTitle || 'Petit entrainement'}
          </h2>
          {content.practiceIntro ? (
            <p className="mt-3 text-sm leading-7 text-gray-600">{content.practiceIntro}</p>
          ) : null}
          <div className="mt-5 space-y-4">
            {content.practice.map((item) => (
              <article key={item.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-sm font-semibold text-gray-800">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.expected}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {content.sources?.length ? (
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Pour aller plus loin</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {content.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span>{source.title}</span>
                <span className={`font-semibold ${style.link}`}>Ouvrir</span>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

function CourseChapterPage() {
  const { levelId, chapterId, lessonId } = useParams();
  const [activeImage, setActiveImage] = useState(null);
  const resolved = resolveCourseSelection(levelId, chapterId, lessonId);

  if (resolved.redirected) {
    const target = resolved.lessonId
      ? `/apprendre/${resolved.levelId}/${resolved.chapterId}/${resolved.lessonId}`
      : `/apprendre/${resolved.levelId}/${resolved.chapterId}`;

    return <Navigate to={target} replace />;
  }

  const result = getCourseChapter(resolved.levelId, resolved.chapterId);

  if (!result) {
    return <Navigate to="/apprendre" replace />;
  }

  const { level, section, chapter } = result;
  const style = LEVEL_STYLES[level.id] || LEVEL_STYLES.premiere;
  const lesson =
    getCourseLesson(level.id, chapter.id, resolved.lessonId) ||
    (!resolved.lessonId && chapter.lessons?.length === 1 ? chapter.lessons[0] : null);
  const contentItem = lesson || (chapter.content ? chapter : null);

  return (
    <div className="container mx-auto max-w-5xl px-4 pb-16 pt-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link to="/apprendre" className="hover:underline">
          Apprendre
        </Link>
        <span className="px-2">/</span>
        <Link to={`/apprendre/${level.id}`} className="hover:underline">
          {level.title}
        </Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-gray-700">{chapter.code}</span>
        {lesson ? (
          <>
            <span className="px-2">/</span>
            <span className="font-semibold text-gray-700">{lesson.code}</span>
          </>
        ) : null}
      </nav>

      <section className="rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-xl lg:px-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
            {level.title}
          </span>
          <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
            {section.title}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
            contentItem?.content
              ? 'border border-lab-teal/20 bg-lab-teal/10 text-lab-teal'
              : 'border border-gray-200 bg-gray-50 text-gray-700'
          }`}>
            {contentItem?.content ? 'Cours disponible' : 'Structure du chapitre'}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-bold text-gray-800 lg:text-4xl">
          {chapter.code} - {chapter.title}
        </h1>
        <p className="mt-4 text-base leading-8 text-gray-600">{chapter.summary}</p>

        {lesson ? (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Cours selectionne</p>
            <h2 className="mt-2 text-xl font-bold text-gray-800">
              {lesson.code} - {lesson.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{lesson.summary}</p>
          </div>
        ) : null}

        <div className="mt-6">
          <Link
            to={`/apprendre/${level.id}`}
            className={`text-sm font-semibold hover:underline ${style.link}`}
          >
            Retour au sommaire de {level.title}
          </Link>
        </div>
      </section>

      <ChapterLessons level={level} chapter={chapter} activeLessonId={lesson?.id || null} style={style} />

      {contentItem?.content ? (
        <ChapterContent chapter={contentItem} style={style} onOpenImage={setActiveImage} />
      ) : (
        <ChapterOutline chapter={chapter} style={style} />
      )}

      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}

export default CourseChapterPage;
