/* eslint-disable import/no-named-as-default */
import Vue from 'vue';
import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader';

import Amplify from 'aws-amplify';
import awsconfig from '@/aws-exports.js';

Amplify.configure(awsconfig);

applyPolyfills().then(() => {
    defineCustomElements(window);
});

Vue.config.ignoredElements = [/amplify-\w*/];
