<template>
    <div class="component c-select" :class="[{ 'on-active': onActive }, { 'read-only': readOnly }]">
        <div class="show-panel mouse vertical-middle" :class="{ 'hand': !readOnly }" @click="!readOnly && (onActive = !onActive)">
            <span class="show-el one-line" :class="{ 'has-value': showInfo }">{{showInfo && showInfo[label] || placeholder}}</span>
            <i class="component-el icon icon-dropdown" :class="{ 'open-dropdown': onActive }"></i>
        </div>
        <transition name="dropdown">
            <div v-if="onActive" class="dropdown-panel">
                <ul class="dropdown-wrapper">
                    <li v-for="item in option" @click="!item.disable && selectDropdown(item[key])" :class="[{ 'un-select': item.disable }, { 'disable': item.disable }, { 'selected': checkSelected(item) }]" :key="item.value" class="dropdown-item mouse hand vertical-middle">
                        <span class="dropdown-content">{{item[label]}}</span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'CSelect',
    props: {
        value: {
            type: Number | String | Array
        },
        option: {
            type: Array,
            default: () => {
                return []
            }
        },
        readOnly: {
            type: Boolean
        },
        multiple: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        key: {
            type: String,
            default: 'value'
        },
        label: {
            type: String,
            default: 'label'
        }
    },
    computed: {
        showInfo () {
            return this.option.find(item => {
                return item[this.key] === this.value
            })
        }
    },
    data () {
        return {
            onActive: false
        }
    },
    mounted () {
        window.addEventListener('mouseup', e => {
            // 将 dom 组成的伪数组转为数组，再查找数组中是否包含当前组建
            const tmp = Array.prototype.slice.call(e.path).find(item => item === this.$el)
            !tmp && (this.onActive = false)
        })
    },
    methods: {
        selectDropdown (v) {
            if (this.multiple) {
                const index = typeof this.value === 'string' ? [this.value].findIndex(item => item === v) : this.value.findIndex(item => v === item)
                index !== -1
                    ? this.$emit('input', [ ...(typeof this.value === 'string' ? [ this.value ] : this.value).slice(0, index),
                                            ...(typeof this.value === 'string' ? [ this.value ] : this.value).slice(index + 1) ])
                    : this.$emit('input', [ ...(typeof this.value === 'string' ? [ this.value ] : this.value), v ])
            } else {
                this.$emit('input', v)
                this.onActive = false
            }
        },
        checkSelected (v) {}
    }
}
</script>

<style lang="scss">
.component.c-select {
    $color: rgba($greyColor, .3);

    position: relative;
    display: inline-block;
    width: 100px;
    height: 28px;
    box-sizing: border-box;
    border: 1px solid $color;
    border-radius: 2px;
    font-size: 12px;

    .show-panel {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        padding: 0 25px 0 10px;
        white-space: nowrap;
        .show-el {
            width: 100%;
            color: rgba($greyColor, .5);
            &.has-value {
                color: $textColor !important;
            }
        }
        .component-el.icon {
            position: absolute;
            right: 5px;
            top: 50%;
            transform-origin: 50% 50%;
            transform: translateY(-50%);
            font-size: 18px;
            color: rgba($greyColor, .3);
            &.open-dropdown {
                transform: translateY(-50%) rotate(180deg);
            }
        }
    }
    .dropdown-panel {
        position: absolute;
        width: 100%;
        box-shadow: 1px 2px 4px 0px rgba(#040000, .2);
        .dropdown-item {
            height: 28px;
            box-sizing: border-box;
            padding: 0 10px;
            color: rgba(#000000, .5);
            &.un-select {
                color: rgba(#000000, .3);
            }
            .dropdown-content {
                color: inherit;
            }
            &:hover {
                background-color: rgba($greyColor, .2);
                color: rgba(#000000, 1);
                &.un-select {
                    background-color: #ffffff;
                    color: rgba(#000000, .3);
                }
            }
        }
    }

    &:hover, &.on-active {
        border-color: rgba($greyColor, .7);
        .show-panel {
            .show-el {
                color: rgba($greyColor, .7);
            }
            .component-el.icon {
                color: rgba($greyColor, .7);
            }
        }
        &.read-only {
            border-color: rgba($greyColor, .3);
            .show-panel {
                .show-el {
                    color: rgba($greyColor, .5);
                }
                .component-el.icon {
                    color: rgba($greyColor, .3);
                }
            }
        }
    }
}
</style>
