<template>
    <button class="component c-button mouse hand" :class="[{ 'has-icon': icon }, type]">
        <i v-if="icon" :class="'icon-'+icon" class="component-el icon icon"></i>
        <slot>提交</slot>
    </button>
</template>

<script>
export default {
    name: 'CButton',
    props: {
        type: {
            type: String
        },
        icon: {
            type: String
        }
    }
}
</script>

<style lang="scss">
.component.c-button {
    $color: rgba($brandColor, .7);
    $hoverColor: rgba($brandColor, .9);
    $activeColor: rgba($brandColor, .5);

    position: relative;
    width: 100px;
    height: 28px;
    box-sizing: border-box;
    border: 1px solid $color;
    border-radius: 2px;
    font-size: 12px;
    color: $color;
    background-color: #ffffff;
    .component-el.icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        color: $color;
    }
    &.has-icon {
        text-align: left;
        padding-left: 30px;
    }
    &:hover {
        border-color: $hoverColor;
        color: $hoverColor;
        .component-el.icon {
            color: $hoverColor;
        }
    }
    &:active {
        border-color: $activeColor;
        color: $activeColor;
        .component-el.icon {
            color: $activeColor;
        }
    }
    &.brand {
        $color: rgba($brandColor, .9);
        $hoverColor: rgba($brandColor, .8);
        $activeColor: rgba($brandColor, 1);

        border: none;
        color: #ffffff;
        background-color: $brandColor;
        .component-el.icon {
            color: #ffffff;
        }
        &:hover {
            background-color: $hoverColor;
        }
        &:active {
            background-color: $activeColor;
        }
    }
    &.success {
        $color: rgba($successColor, .9);
        $hoverColor: rgba($successColor, .8);
        $activeColor: rgba($successColor, 1);

        border: none;
        color: #ffffff;
        background-color: $successColor;
        .component-el.icon {
            color: #ffffff;
        }
        &:hover {
            background-color: $hoverColor;
        }
        &:active {
            background-color: $activeColor;
        }
    }
    &.warning {
        $color: rgba($warningColor, .9);
        $hoverColor: rgba($warningColor, .8);
        $activeColor: rgba($warningColor, 1);

        border: none;
        color: #ffffff;
        background-color: $warningColor;
        .component-el.icon {
            color: #ffffff;
        }
        &:hover {
            background-color: $hoverColor;
        }
        &:active {
            background-color: $activeColor;
        }
    }
    &.danger {
        $color: rgba($dangerColor, .9);
        $hoverColor: rgba($dangerColor, .8);
        $activeColor: rgba($dangerColor, 1);

        border: none;
        color: #ffffff;
        background-color: $dangerColor;
        .component-el.icon {
            color: #ffffff;
        }
        &:hover {
            background-color: $hoverColor;
        }
        &:active {
            background-color: $activeColor;
        }
    }
}
</style>
