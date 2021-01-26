import db from './db.json';

const MY_SEO = {
  title: 'Alura Quiz App',
  description: 'App de Quiz criado durante o evento Imersão React Next.js',
  openGraph: {
    type: 'website',
    url: 'https://aluraquiz-base.mrbrunelli.vercel.app/',
    title: 'App de Quiz - github/mrbrunelli',
    description: 'Minha versão do App de Quiz',
    image: db.bg,
  },
};

export default MY_SEO;
