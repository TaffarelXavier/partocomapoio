import Vue from 'vue';
import MyCarousel from './components/MyCarousel.vue';

var app = new Vue({
    el: "#app",
    components: { 'my-carousel':MyCarousel },
    data: {
        titulo: "",
        sub_titulo: "",
        idade_gestacional: "",
        dilatacao_do_colo_do_utero: "",
        sinais_e_sintomas_naturais_esperados: "",
        alter_aco_es_emocionais_na_mae: "",
        ajuda_do_acompanhante: "",
        a_mae_deve_se_alimentar_bem: "",
        algumas_posicoes_durante_o_trabalho_de_parto: "",
        amamentacao_1: "",
        contato_pele_a_pele: "",
        isLoaded: true,
    },
    mounted() {
        const self = this;

        (async function () {
            try {
                const your_vercel_api_token_here =
                    "6761f3fe-3d58-4bbb-bae4-a2c979e43184";

                self.isLoaded = true;

                const createEdgeConfig = await fetch(
                    "https://api.vercel.com/v1/edge-config/ecfg_jkh3mkuexoduiizm1e3vy7djlddp/items",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ExEfYwbmDwqFWQITdcRtAo0t`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const result = await createEdgeConfig.json();

                self.titulo = self.getData(result, "titulo");
                self.sub_titulo = self.getData(result, "sub_titulo");
                self.idade_gestacional = self.getData(
                    result,
                    "idade_gestacional"
                );
                self.dilatacao_do_colo_do_utero = self.getData(
                    result,
                    "dilatacao_do_colo_do_utero"
                );
                self.sinais_e_sintomas_naturais_esperados = self.getData(
                    result,
                    "sinais_e_sintomas_naturais_esperados"
                );
                self.alter_aco_es_emocionais_na_mae = self.getData(
                    result,
                    "alter_aco_es_emocionais_na_mae"
                );
                self.ajuda_do_acompanhante = self.getData(
                    result,
                    "ajuda_do_acompanhante"
                );
                self.a_mae_deve_se_alimentar_bem = self.getData(
                    result,
                    "a_mae_deve_se_alimentar_bem"
                );
                self.algumas_posicoes_durante_o_trabalho_de_parto = self.getData(
                    result,
                    "algumas_posicoes_durante_o_trabalho_de_parto"
                );
                self.amamentacao_1 = self.getData(result, "amamentacao_1");
                self.contato_pele_a_pele = self.getData(
                    result,
                    "contato_pele_a_pele"
                );
            } catch (error) {
                console.log(error);
            } finally {
                self.isLoaded = false;
            }
        })();
    },
    methods: {
        getData(data, name) {
            return data.find((el) => el.key === name).value;
        },
    },
});
