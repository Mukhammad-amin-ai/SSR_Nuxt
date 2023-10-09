<template >
    <HeaderComponent :bgColor="bgProp" :bgShadow="shadow" />
    <div class="container">
        <div class="container-content">
            <div class="content-header">
                <h4>To'lovlaringiz tarixi</h4>
            </div>
            <div class="payment">
                <div class="payment-header">
                    <div class="row">
                        <div class="column">
                            <div class="payment-label">
                                Keyingi to'lov sanasi:
                            </div>
                            <div class="payment-info">
                                <i class='bx bxs-hourglass-top'></i>
                                16.10.2023
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-payment">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Sana
                                </th>
                                <th>
                                    Summa
                                </th>
                                <th>
                                    Karta raqami
                                </th>
                                <th>
                                    Holati
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>16.09.2023 00:00</td>
                                <td> 97000.00 so'm</td>
                                <td>860049******8936</td>
                                <td>
                                    <span class="succed">To'langan</span>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
</template>
<script setup>
const shadow = reactive('0 6px 34px rgba(73,186,4,.09)')
const bgProp = reactive("#fff")




</script>
<style scoped>
.container {
    width: 100%;
    height: auto;
    background-color: #f5f8ff;
}

.container-content {
    max-width: 1230px;
    min-height: 50vh;
    margin: 0 auto;
    padding: 12px 15px 50px;
}

.content-header h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
}

.payment {
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 20px;
    padding: 16px;
}

.payment-header {
    background: #1b2f0f;
    border-radius: 10px;
    color: #fff;
    margin-bottom: 15px;
    padding: 20px;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.75rem;
    margin-left: calc(var(--bs-gutter-x)*-.5);
    margin-right: -0.75rem;
    margin-right: calc(var(--bs-gutter-x)*-.5);
    margin-top: 0;
    margin-top: calc(var(--bs-gutter-y)*-1);
}

.row>* {
    flex-shrink: 0;
    margin-top: var(--bs-gutter-y);
    max-width: 100%;
    padding-left: calc(var(--bs-gutter-x)*.5);
    padding-right: calc(var(--bs-gutter-x)*.5);
    width: 100%;
}

.payment-label {
    font-size: 14px;
    margin-bottom: 10px;
    opacity: .8;
}

.payment-info {
    background: #425536;
    border-radius: 10px;
    line-height: 40px;
    padding: 0 15px;
}

.table-payment {
    width: 100%;
    height: auto;
}

table {
    font-size: 14px;
    --bs-table-color: var(--bs-body-color);
    --bs-table-bg: transparent;
    --bs-table-border-color: var(--bs-border-color);
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: var(--bs-body-color);
    --bs-table-striped-bg: rgba(0, 0, 0, .05);
    --bs-table-active-color: var(--bs-body-color);
    --bs-table-active-bg: rgba(0, 0, 0, .1);
    --bs-table-hover-color: var(--bs-body-color);
    --bs-table-hover-bg: rgba(0, 0, 0, .075);
    border-color: #dee2e6;
    border-color: var(--bs-table-border-color);
    color: #212529;
    color: var(--bs-table-color);
    margin-bottom: 1rem;
    vertical-align: top;
    width: 100%;
    border-collapse: collapse;

}

thead {
    width: 100%;
    height: auto;
    color: #000;
    border-radius: 50px 0 0 50px;
}

th:first-child {
    border-radius: 50px 0 0 50px;
}

th:last-child {
    border-radius: 0 50px 50px 0;
}

th {
    background: rgba(73, 186, 4, .08);
    border: none;
    font-weight: 600;
    padding: 4px 20px;
    text-align: start;
}


tbody {
    border-bottom: 1px solid #dee2e6;
}

td {
    padding: 14px 20px;
}

.succed {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
}

@media (min-width: 768px) {
    .column {
        flex: 0 0 auto;
        width: 25%;
    }
}</style>