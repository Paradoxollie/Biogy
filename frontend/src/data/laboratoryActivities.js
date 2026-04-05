export const LABORATORY_ACTIVITIES = [
  {
    id: 'at5-metrologie-pipettes',
    code: 'AT5',
    title: 'Métrologie des pipettes',
    level: 'Première STL Biotechnologies',
    duration: '1 séance de laboratoire',
    format: 'Séance interactive à compléter en classe',
    launchPath: '/laboratoire/at5-metrologie-pipettes.html',
    summary:
      "Contrôler la qualité métrologique d'une pipette P1000, exploiter les mesures, raisonner sur la justesse et la fidélité, puis conclure sur la conformité du matériel.",
    hook:
      "Les élèves réalisent la séance directement dans le navigateur, peuvent enregistrer leur progression, puis envoyer leur copie à la fin de la séance.",
    objectives: [
      'Vérifier la qualité métrologique d une pipette à piston P1000.',
      'Exploiter des mesures de masse pour discuter justesse et fidélité.',
      'Utiliser une cible de métrologie pour interpréter les résultats.',
      'Rédiger une conclusion claire sur la conformité de la pipette.',
    ],
    highlights: [
      'Mode professeur protégé par mot de passe.',
      'Connexion demandée uniquement au moment de l envoi.',
      'Autosauvegarde locale pour éviter la perte de travail.',
      'Copie transmise au tableau de bord admin pour correction.',
    ],
  },
];

export const getLaboratoryActivities = () => LABORATORY_ACTIVITIES;

export const getLaboratoryActivity = (activityId) =>
  LABORATORY_ACTIVITIES.find((activity) => activity.id === activityId) || null;
