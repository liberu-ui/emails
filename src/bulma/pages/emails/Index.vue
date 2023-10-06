<template>
    <enso-table class="box is-paddingless raises-on-hover"
        id="emails"
        @edit="edit($event.id)">
        <template #priority="{ row }">
            <span class="tag is-table-tag mr-1"
                :class="enums.emailPriorityLabels._get(row.priority)">
                {{ enums.emailPriorities._get(row.priority) }}
            </span>
        </template>
        <template #status="{ row }">
            <span class="tag is-table-tag mr-1"
                :class="enums.emailStatusLabels._get(row.status)">
                {{ enums.emailStatuses._get(row.status) }}
            </span>
        </template>
    </enso-table>
</template>

<script>

import { mapState } from 'vuex';
import { EnsoTable } from '@liberu-ui/tables/bulma';

export default {
    name: 'Index',

    inject: ['errorHandler', 'i18n', 'route', 'routerErrorHandler'],

    components: {
        EnsoTable,
    },

    data: () => ({
        email: null,
    }),

    computed: {
        ...mapState(['enums']),
    },

    methods: {
        edit(id) {
            this.$router.push({
                name: 'emails.edit',
                params: { email: id },
            }).catch(this.routerErrorHandler);
        },
    },
};
</script>

<style lang="scss">

</style>
