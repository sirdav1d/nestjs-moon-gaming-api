'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-moon-gaming-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-1c2ecb5498947382c38a668553bb14d5df0d815ab010c1752de3c877ef37fe0089fc38af6ea592ba6c05bc10e0a3452eddfadeaac08a6268bc30f90b9f790988"' : 'data-target="#xs-controllers-links-module-AppModule-1c2ecb5498947382c38a668553bb14d5df0d815ab010c1752de3c877ef37fe0089fc38af6ea592ba6c05bc10e0a3452eddfadeaac08a6268bc30f90b9f790988"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1c2ecb5498947382c38a668553bb14d5df0d815ab010c1752de3c877ef37fe0089fc38af6ea592ba6c05bc10e0a3452eddfadeaac08a6268bc30f90b9f790988"' :
                                            'id="xs-controllers-links-module-AppModule-1c2ecb5498947382c38a668553bb14d5df0d815ab010c1752de3c877ef37fe0089fc38af6ea592ba6c05bc10e0a3452eddfadeaac08a6268bc30f90b9f790988"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-1c2ecb5498947382c38a668553bb14d5df0d815ab010c1752de3c877ef37fe0089fc38af6ea592ba6c05bc10e0a3452eddfadeaac08a6268bc30f90b9f790988"' : 'data-target="#xs-injectables-links-module-AppModule-1c2ecb5498947382c38a668553bb14d5df0d815ab010c1752de3c877ef37fe0089fc38af6ea592ba6c05bc10e0a3452eddfadeaac08a6268bc30f90b9f790988"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1c2ecb5498947382c38a668553bb14d5df0d815ab010c1752de3c877ef37fe0089fc38af6ea592ba6c05bc10e0a3452eddfadeaac08a6268bc30f90b9f790988"' :
                                        'id="xs-injectables-links-module-AppModule-1c2ecb5498947382c38a668553bb14d5df0d815ab010c1752de3c877ef37fe0089fc38af6ea592ba6c05bc10e0a3452eddfadeaac08a6268bc30f90b9f790988"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-a9a3586104ed85d5058def0594fe7fd1717b5fb107706a25ca6a058ed78b93e004ff3900768a0f1863a44a3b62f9b72f920f28ac806d860355566db483520ce9"' : 'data-target="#xs-controllers-links-module-AuthModule-a9a3586104ed85d5058def0594fe7fd1717b5fb107706a25ca6a058ed78b93e004ff3900768a0f1863a44a3b62f9b72f920f28ac806d860355566db483520ce9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a9a3586104ed85d5058def0594fe7fd1717b5fb107706a25ca6a058ed78b93e004ff3900768a0f1863a44a3b62f9b72f920f28ac806d860355566db483520ce9"' :
                                            'id="xs-controllers-links-module-AuthModule-a9a3586104ed85d5058def0594fe7fd1717b5fb107706a25ca6a058ed78b93e004ff3900768a0f1863a44a3b62f9b72f920f28ac806d860355566db483520ce9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-a9a3586104ed85d5058def0594fe7fd1717b5fb107706a25ca6a058ed78b93e004ff3900768a0f1863a44a3b62f9b72f920f28ac806d860355566db483520ce9"' : 'data-target="#xs-injectables-links-module-AuthModule-a9a3586104ed85d5058def0594fe7fd1717b5fb107706a25ca6a058ed78b93e004ff3900768a0f1863a44a3b62f9b72f920f28ac806d860355566db483520ce9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a9a3586104ed85d5058def0594fe7fd1717b5fb107706a25ca6a058ed78b93e004ff3900768a0f1863a44a3b62f9b72f920f28ac806d860355566db483520ce9"' :
                                        'id="xs-injectables-links-module-AuthModule-a9a3586104ed85d5058def0594fe7fd1717b5fb107706a25ca6a058ed78b93e004ff3900768a0f1863a44a3b62f9b72f920f28ac806d860355566db483520ce9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GameModule-bcf65ba736f6a3ac5ac0b93f3f814cc7889ac5107816fb42c6c36af4f5d09312cdb2cab8bd3557e05f1f60aba2b741fc013ee4b6a0e42db777893c6b028d1fa1"' : 'data-target="#xs-controllers-links-module-GameModule-bcf65ba736f6a3ac5ac0b93f3f814cc7889ac5107816fb42c6c36af4f5d09312cdb2cab8bd3557e05f1f60aba2b741fc013ee4b6a0e42db777893c6b028d1fa1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GameModule-bcf65ba736f6a3ac5ac0b93f3f814cc7889ac5107816fb42c6c36af4f5d09312cdb2cab8bd3557e05f1f60aba2b741fc013ee4b6a0e42db777893c6b028d1fa1"' :
                                            'id="xs-controllers-links-module-GameModule-bcf65ba736f6a3ac5ac0b93f3f814cc7889ac5107816fb42c6c36af4f5d09312cdb2cab8bd3557e05f1f60aba2b741fc013ee4b6a0e42db777893c6b028d1fa1"' }>
                                            <li class="link">
                                                <a href="controllers/GameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameModule-bcf65ba736f6a3ac5ac0b93f3f814cc7889ac5107816fb42c6c36af4f5d09312cdb2cab8bd3557e05f1f60aba2b741fc013ee4b6a0e42db777893c6b028d1fa1"' : 'data-target="#xs-injectables-links-module-GameModule-bcf65ba736f6a3ac5ac0b93f3f814cc7889ac5107816fb42c6c36af4f5d09312cdb2cab8bd3557e05f1f60aba2b741fc013ee4b6a0e42db777893c6b028d1fa1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameModule-bcf65ba736f6a3ac5ac0b93f3f814cc7889ac5107816fb42c6c36af4f5d09312cdb2cab8bd3557e05f1f60aba2b741fc013ee4b6a0e42db777893c6b028d1fa1"' :
                                        'id="xs-injectables-links-module-GameModule-bcf65ba736f6a3ac5ac0b93f3f814cc7889ac5107816fb42c6c36af4f5d09312cdb2cab8bd3557e05f1f60aba2b741fc013ee4b6a0e42db777893c6b028d1fa1"' }>
                                        <li class="link">
                                            <a href="injectables/GameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenderModule.html" data-type="entity-link" >GenderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GenderModule-7994637e6216915deb59eb4149fb8b8ea0cf6b407632b2dd2af098428f4652e80052990a1023f9848229aa9c6a03bc3528c4cf96cbb7e899615982f222fda573"' : 'data-target="#xs-controllers-links-module-GenderModule-7994637e6216915deb59eb4149fb8b8ea0cf6b407632b2dd2af098428f4652e80052990a1023f9848229aa9c6a03bc3528c4cf96cbb7e899615982f222fda573"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GenderModule-7994637e6216915deb59eb4149fb8b8ea0cf6b407632b2dd2af098428f4652e80052990a1023f9848229aa9c6a03bc3528c4cf96cbb7e899615982f222fda573"' :
                                            'id="xs-controllers-links-module-GenderModule-7994637e6216915deb59eb4149fb8b8ea0cf6b407632b2dd2af098428f4652e80052990a1023f9848229aa9c6a03bc3528c4cf96cbb7e899615982f222fda573"' }>
                                            <li class="link">
                                                <a href="controllers/GenderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GenderModule-7994637e6216915deb59eb4149fb8b8ea0cf6b407632b2dd2af098428f4652e80052990a1023f9848229aa9c6a03bc3528c4cf96cbb7e899615982f222fda573"' : 'data-target="#xs-injectables-links-module-GenderModule-7994637e6216915deb59eb4149fb8b8ea0cf6b407632b2dd2af098428f4652e80052990a1023f9848229aa9c6a03bc3528c4cf96cbb7e899615982f222fda573"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GenderModule-7994637e6216915deb59eb4149fb8b8ea0cf6b407632b2dd2af098428f4652e80052990a1023f9848229aa9c6a03bc3528c4cf96cbb7e899615982f222fda573"' :
                                        'id="xs-injectables-links-module-GenderModule-7994637e6216915deb59eb4149fb8b8ea0cf6b407632b2dd2af098428f4652e80052990a1023f9848229aa9c6a03bc3528c4cf96cbb7e899615982f222fda573"' }>
                                        <li class="link">
                                            <a href="injectables/GenderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-a27078b730b92fccb09899cec5d2a03917bdb2c7c1e554f270513fc453f6b2e584843e2d3b7eab5b4e9004ead614dcba8a6f28ed257ba63b077bda9b0b9cf751"' : 'data-target="#xs-controllers-links-module-ProfileModule-a27078b730b92fccb09899cec5d2a03917bdb2c7c1e554f270513fc453f6b2e584843e2d3b7eab5b4e9004ead614dcba8a6f28ed257ba63b077bda9b0b9cf751"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-a27078b730b92fccb09899cec5d2a03917bdb2c7c1e554f270513fc453f6b2e584843e2d3b7eab5b4e9004ead614dcba8a6f28ed257ba63b077bda9b0b9cf751"' :
                                            'id="xs-controllers-links-module-ProfileModule-a27078b730b92fccb09899cec5d2a03917bdb2c7c1e554f270513fc453f6b2e584843e2d3b7eab5b4e9004ead614dcba8a6f28ed257ba63b077bda9b0b9cf751"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-a27078b730b92fccb09899cec5d2a03917bdb2c7c1e554f270513fc453f6b2e584843e2d3b7eab5b4e9004ead614dcba8a6f28ed257ba63b077bda9b0b9cf751"' : 'data-target="#xs-injectables-links-module-ProfileModule-a27078b730b92fccb09899cec5d2a03917bdb2c7c1e554f270513fc453f6b2e584843e2d3b7eab5b4e9004ead614dcba8a6f28ed257ba63b077bda9b0b9cf751"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-a27078b730b92fccb09899cec5d2a03917bdb2c7c1e554f270513fc453f6b2e584843e2d3b7eab5b4e9004ead614dcba8a6f28ed257ba63b077bda9b0b9cf751"' :
                                        'id="xs-injectables-links-module-ProfileModule-a27078b730b92fccb09899cec5d2a03917bdb2c7c1e554f270513fc453f6b2e584843e2d3b7eab5b4e9004ead614dcba8a6f28ed257ba63b077bda9b0b9cf751"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' : 'data-target="#xs-controllers-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' :
                                            'id="xs-controllers-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' : 'data-target="#xs-injectables-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' :
                                        'id="xs-injectables-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GameController.html" data-type="entity-link" >GameController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GenderController.html" data-type="entity-link" >GenderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link" >ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateGameDto.html" data-type="entity-link" >CreateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGenderDto.html" data-type="entity-link" >CreateGenderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="classes/Gender.html" data-type="entity-link" >Gender</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginAuthDto.html" data-type="entity-link" >LoginAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/loginResponseDto.html" data-type="entity-link" >loginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameDto.html" data-type="entity-link" >UpdateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGenderDto.html" data-type="entity-link" >UpdateGenderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileDto.html" data-type="entity-link" >UpdateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenderService.html" data-type="entity-link" >GenderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});