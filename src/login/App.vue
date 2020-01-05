<template>
    <div class="page login">
        <c-input v-model="account" :placeholder="'账户'" :type="'account'" class="login-item c-input-el"></c-input>
        <c-input v-model="password" :placeholder="'密码'" :type="'password'" class="login-item c-input-el"></c-input>
        <c-button :type="'brand'" class="login-item c-button-el">登录</c-button>
        <c-select v-model="type" :option="option" :placeholder="'请选择'" multiple class="login-item c-select-el"></c-select>
        {{type}}
    </div>
</template>

<script>
import CInput from 'src/components/c-input'
import CButton from 'src/components/c-button'
import CSelect from 'src/components/c-select'

export default {
    name: 'LoginPage',
    data () {
        return {
            account: 'sasasas',
            password: '',
            type: 'rick',
            option: [{
                label: '瑞克',
                value: 'rick'
            }, {
                label: '莫蒂',
                value: 'morty'
            }, {
                label: '杰瑞',
                value: 'jerry',
                disable: true
            }, {
                label: '桑切斯',
                value: 'sanchez'
            }, {
                label: '史密斯',
                value: 'smith'
            }]
        }
    },
    methods: {
        searchFunc (v) {
            console.log(v)
        }
    },
    components: {
        CInput,
        CButton,
        CSelect
    }
}
</script>

<style lang="scss">
.page.login {
    padding: 10px;
    .login-item {
        vertical-align: top;
    }
    .c-input-el {
        width: 200px;
    }
    .c-button-el {
        // width: 200px;
    }
    .c-select-el {
        width: 200px;
    }
}
</style>
