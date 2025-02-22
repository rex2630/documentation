import React from 'react';
import { LandingPage } from '../../component/landingPages/LandingPage';
import { LandingPageHeadline } from '../../component/landingPages/LandingPageHeadline';
import { LandingPageDescription } from '../../component/landingPages/LandingPageDescription';
import { LandingPageInstallationStep } from '../../component/landingPages/LandingPageInstallationStep';
import { LandingPageInstallation } from '../../component/landingPages/LandingPageInstallation';
import { LandingPageInstallationCode } from '../../component/landingPages/LandingPageInstallationCode';
import SvelteLogo from '../../../static/img/technologies/logo-svelte.svg';
import { LandingPageActions } from '../../component/landingPages/LandingPageActions';
import { MoreIntegrations } from '../../component/landingPages/LandingPageMoreIntegrations';
import Head from '@docusaurus/Head';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{ link: '/js-sdk/using_with_svelte/installation' }}
    exampleApp="svelte-example"
    githubRepo="svelte"
    primary={primary}
  />
);

export default function Svelte() {
  return (
    <LandingPage title={'Tolgee for Svelte'}>
      <Head>
        <meta
          name="description"
          content="Learn how to install Tolgee Svelte integration library. With Tolgee i18n library for Svelte you can enjoy all Tolgee i18n features."
        />
      </Head>
      <LandingPageHeadline
        loveImage={{
          img: <SvelteLogo width={65} />,
          name: 'Svelte',
        }}
        title="Tolgee for Svelte"
      >
        <DocsLinks />
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/svelte">
        <p>
          Tolgee for Svelte provides simple API to create multi-lingual Svelte
          application. With Tolgee i18n library for Svelte you can enjoy all
          Tolgee i18n features.
        </p>
        <p>
          To see Svelte with Tolgee in action, check{' '}
          <a href="https://github.com/tolgee/svelte-example">
            this example app
          </a>
          .
        </p>
      </LandingPageDescription>

      <LandingPageInstallation>
        <LandingPageInstallationStep title="1. Create project in Tolgee platform">
          <p>
            Go to <a href="https://app.tolgee.io">Tolgee Cloud app</a> or access
            your{' '}
            <a href="/platform/self_hosting/running_with_docker">
              self-hosted instance
            </a>{' '}
            and create a project. Then obtain your API key.
          </p>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="2. Setup Tolgee integration">
          <p>Install the npm packages.</p>
          <LandingPageInstallationCode>
            npm i @tolgee/svelte
          </LandingPageInstallationCode>
          <p>Then wrap your code with TolgeeProvider</p>
          <LandingPageInstallationCode language="svelte" fullWidth>
            {svelteProviderCode}
          </LandingPageInstallationCode>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="3. Use T component to translate your texts">
          <LandingPageInstallationCode language="svelte" fullWidth>
            {usingTCode}
          </LandingPageInstallationCode>
          <p>Now you are able to Alt + Click & translate your texts!</p>
        </LandingPageInstallationStep>

        <LandingPageInstallationStep title="Explore the Docs and check out example app!">
          <p>Continue exploring...</p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <DocsLinks primary />
          </div>
        </LandingPageInstallationStep>
      </LandingPageInstallation>
      <MoreIntegrations />
    </LandingPage>
  );
}

const svelteProviderCode = `<script>
  import { TolgeeProvider } from "@tolgee/svelte";

  const tolgeeConfig = {
    preloadFallback: true,
    apiUrl: 'https://app.tolgee.io',
    apiKey: '<your API key>',
  };
</script>

<TolgeeProvider config={tolgeeConfig}>
  <div slot="loading-fallback">Loading...</div>
  <slot />
</TolgeeProvider>`;

const usingTCode = `<script>
  import { T } from "@tolgee/svelte";
</script>
<h1>
  <T keyName="translate_me" defaultValue="Translate me!" />
</h1>`;
