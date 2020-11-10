import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import moment from 'moment';

moment().format();
moment.locale('ru');

import {getLabData} from '../LabController.js'; // не придумал ничего лучше, потом допилю - ThePetrovich

const features = [
  {
    title: 'Табличка',
    link: 'https://tiny.cc/progivt20',
    imageUrl: 'img/table.png',
    description: (
      <>
        Все заслуги здесь. Необходимо выполнить вход в аккаунт Google.
      </>
    ),
  },
  {
    title: 'Видеозаписи',
    link: 'https://drive.google.com/drive/folders/1pis2VYVbRBTIke3vCnz0bMQITlNuFgsh',
    imageUrl: 'img/videos.png',
    description: (
      <>
        Записи лекций и практики в период  дистанционного обучениия
      </>
    ),
  },
  {
    title: 'GitHub',
    link: 'https://github.com/progivt/',
    imageUrl: 'img/adventure-cat.png',
    description: (
      <>
        Организация <b>progivt</b> на Гитхабе, все репозитории здесь.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3><a href={link}>{title}</a></h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}: Добро пожаловать `}
      description="Курс «Основы программирования» для студентов ИВТ ИМИ СВФУ">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title" id="heroTitle">{siteConfig.title}</h1>
          <p className="hero__subtitle" id="heroSubtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Начать
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

var displayDeadlineInterval = false;

function displayDeadline() {
  let docTitle = document.getElementById("heroTitle");
  let docSubtitle = document.getElementById("heroSubtitle");

  if (docTitle) {
    let data = getLabData();
    
    if (data) {
      if (moment(data.deadline).diff(moment()) > 0) {
        let timeToDeadline = moment(moment(data.deadline).diff(moment())).format('DD:HH:mm:ss');

        let url = `<a style="color:#FFFFFF" href="${data.url}">${data.name}</a>`;

        docTitle.innerHTML = url;
        docSubtitle.textContent = "До конца лабы: " + timeToDeadline;
      }
    }
  }
}

setInterval(function()
{
  if (displayDeadlineInterval) return false;

  displayDeadlineInterval = true;

  displayDeadline();

  displayDeadlineInterval = false;
}, 1000);

export default Home;
