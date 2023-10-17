<template>
        <Content class="postContent" />
</template>

<style lang="scss">


.postContent {
    margin: 0 1rem;
    & h1 {
        font-size: 1.5rem;
    }

    & h2 {
        font-size: 1rem;
    }

    & h1,h2 {
        color: rgb(var(--blue-6));
    }

    & img {
        max-width: 100%;
        display: block;
        margin: auto;
    }

    & h1,
    h2,
    p {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    & p,
    a,
    li {
        color: var(--color-text-1);
    }
    & p {
        font-size: 16px;
        text-align: justify;
    }
    & code {
        padding: 0 5px;
        border: 1px dotted var(--color-neutral-6);
        border-radius: 2px;
    }

    & a {
        text-decoration: none;
        padding-bottom: 2px;
    }
    & a:hover {
        border-bottom: 1px solid var(--color-text-1);
    }
    & pre code{
        display: block;
        border: none;
        padding-left: 12px;
        padding-right: 12px;
        min-width: 100%;
        width: fit-content;
    }

    & .vp-adaptive-theme{
        position: relative;
        background-color: rgb(var(--gray-2));
        border-radius: 14px;
        z-index: 1;
    }
    & pre{
        padding: 14px 0;
        overflow-x: auto;
        word-spacing: normal;
        word-wrap: normal;
        word-break: normal;
    }
    & .vp-adaptive-theme .copy{
        position: absolute;
        top: 4px;
        right: 4px;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        opacity: 0;
        z-index: 3;
        cursor: pointer;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktY29weSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDJhMiAyIDAgMCAxIDItMmg4YTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMlYyWm0yLTFhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMUg2Wk0yIDVhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xdi0xaDF2MWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoMXYxSDJaIi8+Cjwvc3ZnPg==');
        background-color: rgb(var(--gray-2));
        background-position: 50%;
        background-size: 20px;
        background-repeat: no-repeat;
        transition: opacity .4s;
        border: none;
    }
    & .vp-adaptive-theme .copy:hover{
        opacity: 1;
    }
    & .vp-adaptive-theme .lang{
        position: absolute;
        top: 4px;
        right: 10px;
        z-index: 2;
        font-size: 12px;
        font-weight: 500;
        color: var(--color-neutral-6);
        transition: color .5s;
    }
    & .details{
        color: var(--color-text-1);
    }
}
</style>
