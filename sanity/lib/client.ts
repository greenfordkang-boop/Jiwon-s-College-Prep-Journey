import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const isConfigValid = projectId && projectId !== 'placeholder_id' && dataset;

export const client = isConfigValid
    ? createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn,
    })
    : {
        fetch: async () => [],
    } as any;
