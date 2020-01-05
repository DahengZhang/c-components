<template>
    <div class="component c-input" :class="{ 'on-focus': onFocus }">
        <i v-if="type" @click="searchFunc" :class="'icon-'+type" class="component-el icon left-icon mouse hand"></i>
        <input :type="type === 'password' && !preview && 'password' || 'text'"
            spellcheck="false"
            :value="value"
            @focus="onFocus = true"
            @blur="onFocus = false"
            @input="onInput"
            @keydown.enter="searchFunc"
            :placeholder="placeholder"
            class="component-el input"
            :class="[{ 'has-icon': type }, { 'is-password': type === 'password' }]">
        <i v-if="type === 'password'" @click="preview = !preview" :class="[{ 'icon-password-not-view': !preview }, { 'icon-password-view': preview }]" class="component-el icon right-icon mouse hand"></i>
    </div>
</template>

<script>
export default {
    name: 'CInput',
    props: {
        value: {
            type: String | Number,
            default: ''
        },
        placeholder: {
            type: String
        },
        type: {
            type: String
        }
    },
    data () {
        return {
            onFocus: false,
            preview: false
        }
    },
    methods: {
        searchFunc (v) {
            this.type === 'search' && this.$emit('search', this.value)
        },
        onInput (v) {
            this.$emit('input', v.target.value)
        }
    }
}
</script>

<style lang="scss">
.component.c-input {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 28px;
    box-sizing: border-box;
    border: 1px solid rgba($greyColor, .3);
    border-radius: 2px;
    font-size: 12px;
    background-color: #ffffff;
    .component-el.icon {
        position: absolute;
        top: 50%;
        font-size: 16px !important;
        transform: translate3d(0, -50%, 0);
        color: rgba($greyColor, .5);
        &.left-icon {
            left: 5px;
        }
        &.right-icon {
            right: 5px;
        }
    }
    .component-el.input{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 5px 10px;
        font-size: inherit;
        background-color: transparent;
        color: $textColor !important;
        &.has-icon {
            padding-left: 30px;
        }
        &.is-password {
            padding-right: 30px;
        }
        &::placeholder {
            font-size: 12px;
            color: rgba($greyColor, .7);
        }
    }
    &:hover, &.on-focus {
        border-color: rgba($greyColor, .7);
        .component-el.icon {
            color: rgba($greyColor, 1);
        }
        .component-el.input {
            &::placeholder {
                color: rgba($greyColor, .5);
            }
        }
    }
}
</style>
