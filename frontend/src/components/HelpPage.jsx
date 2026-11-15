import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import PageHero from './ui/PageHero';
import { Stagger, StaggerItem } from './ui/motion';
import { PENCILS } from '../data/visuals';

export default function HelpPage() {
  return <><PageHero eyebrow="Aide & utilisation" title={[{ text: 'Bien utiliser' }, { text: 'Biogy.', className: 'italic text-biogy-700' }]} lead="Quelques repères pour travailler en classe et poursuivre tes révisions à la maison." pencil={PENCILS.verrerie} /><div className="page-narrow mt-12"><Stagger className="border-t border-ink-900/15">{[
    ['Ai-je besoin d’un compte ?', 'Les cours, les cartes de révision et les séances de laboratoire sont accessibles sans compte. Connecte-toi pour envoyer une copie, participer au forum ou proposer un projet.'],
    ['Où sont enregistrés mes favoris et mes réponses ?', 'Les favoris, les cours revus et les brouillons de TP sont enregistrés dans le navigateur de cet appareil. Ils ne suivent pas automatiquement ton compte sur un autre appareil. Un nettoyage du navigateur peut les effacer. Sur un ordinateur partagé, exporte ton travail et déconnecte-toi après la séance.'],
    ['Comment conserver ou rendre mon TP ?', 'La séance propose une sauvegarde locale et un export. Garde une copie de ton travail avant de quitter un ordinateur partagé. Le bouton d’envoi demande une connexion ; vérifie le message de confirmation avant de fermer la page.'],
    ['Que faire si le serveur est indisponible ?', 'Tu peux continuer à consulter les cours et à réviser. Garde ton brouillon de laboratoire ou exporte-le, puis réessaie l’envoi plus tard. Une copie n’est remise que lorsque le site confirme son envoi.'],
    ['J’ai oublié mon mot de passe.', 'Demande à ton enseignante de réinitialiser ton mot de passe depuis son espace de gestion. Ne publie jamais ton mot de passe sur le forum.'],
    ['Comment accéder aux corrections professeur ?', 'Les corrections de laboratoire sont réservées au compte enseignant disposant des droits d’administration. Connecte-toi avec ce compte puis ouvre le mode professeur dans la séance.'],
    ['Comment imprimer un cours ?', 'Dans un cours, choisis l’onglet à imprimer puis utilise le bouton Imprimer. La navigation et les boutons sont retirés de la version papier.'],
    ['Comment signaler une erreur ou demander de l’aide ?', 'Préviens ton enseignante en précisant le titre du cours et l’action qui pose problème. Pour une question de cours, tu peux aussi ouvrir une discussion dans le forum.'],
  ].map(([title, answer], index) => <StaggerItem key={title}><details className="group border-b border-ink-900/10"><summary className="flex cursor-pointer list-none items-center gap-5 py-5 [&::-webkit-details-marker]:hidden"><span className="font-mono text-[11px] text-ink-400">{String(index + 1).padStart(2, '0')}</span><span className="flex-1 font-display text-xl leading-snug text-ink-900">{title}</span><Plus size={18} className="shrink-0 text-ink-500 transition-transform duration-300 group-open:rotate-45" /></summary><p className="pb-6 pl-10 text-[15px] leading-7 text-ink-600">{answer}</p></details></StaggerItem>)}</Stagger><div className="mt-10 flex flex-wrap gap-3"><Link to="/apprendre" className="btn-primary">Retrouver un cours</Link><Link to="/forum" className="btn-secondary">Ouvrir le forum</Link></div></div></>;
}
