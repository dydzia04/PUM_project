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
                    <a href="index.html" data-type="index-link">library-server documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-11ca07901e235f82b286904a9c181086"' : 'data-target="#xs-controllers-links-module-AppModule-11ca07901e235f82b286904a9c181086"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-11ca07901e235f82b286904a9c181086"' :
                                            'id="xs-controllers-links-module-AppModule-11ca07901e235f82b286904a9c181086"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-11ca07901e235f82b286904a9c181086"' : 'data-target="#xs-injectables-links-module-AppModule-11ca07901e235f82b286904a9c181086"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-11ca07901e235f82b286904a9c181086"' :
                                        'id="xs-injectables-links-module-AppModule-11ca07901e235f82b286904a9c181086"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorModule.html" data-type="entity-link">AuthorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthorModule-22bba66678fff0b3b170cdd1d81df61a"' : 'data-target="#xs-controllers-links-module-AuthorModule-22bba66678fff0b3b170cdd1d81df61a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthorModule-22bba66678fff0b3b170cdd1d81df61a"' :
                                            'id="xs-controllers-links-module-AuthorModule-22bba66678fff0b3b170cdd1d81df61a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthorController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthorModule-22bba66678fff0b3b170cdd1d81df61a"' : 'data-target="#xs-injectables-links-module-AuthorModule-22bba66678fff0b3b170cdd1d81df61a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthorModule-22bba66678fff0b3b170cdd1d81df61a"' :
                                        'id="xs-injectables-links-module-AuthorModule-22bba66678fff0b3b170cdd1d81df61a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookModule.html" data-type="entity-link">BookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BookModule-c38e12098787de68c3e9755c7ea3f9e9"' : 'data-target="#xs-controllers-links-module-BookModule-c38e12098787de68c3e9755c7ea3f9e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookModule-c38e12098787de68c3e9755c7ea3f9e9"' :
                                            'id="xs-controllers-links-module-BookModule-c38e12098787de68c3e9755c7ea3f9e9"' }>
                                            <li class="link">
                                                <a href="controllers/BookController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BookModule-c38e12098787de68c3e9755c7ea3f9e9"' : 'data-target="#xs-injectables-links-module-BookModule-c38e12098787de68c3e9755c7ea3f9e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookModule-c38e12098787de68c3e9755c7ea3f9e9"' :
                                        'id="xs-injectables-links-module-BookModule-c38e12098787de68c3e9755c7ea3f9e9"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublisherModule.html" data-type="entity-link">PublisherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PublisherModule-69c2df289ec947e0f8a1362217ab3e63"' : 'data-target="#xs-controllers-links-module-PublisherModule-69c2df289ec947e0f8a1362217ab3e63"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PublisherModule-69c2df289ec947e0f8a1362217ab3e63"' :
                                            'id="xs-controllers-links-module-PublisherModule-69c2df289ec947e0f8a1362217ab3e63"' }>
                                            <li class="link">
                                                <a href="controllers/PublisherController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublisherController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PublisherModule-69c2df289ec947e0f8a1362217ab3e63"' : 'data-target="#xs-injectables-links-module-PublisherModule-69c2df289ec947e0f8a1362217ab3e63"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PublisherModule-69c2df289ec947e0f8a1362217ab3e63"' :
                                        'id="xs-injectables-links-module-PublisherModule-69c2df289ec947e0f8a1362217ab3e63"' }>
                                        <li class="link">
                                            <a href="injectables/PublisherService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PublisherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-936e22ec17264223b78c28f15e10d591"' : 'data-target="#xs-controllers-links-module-UserModule-936e22ec17264223b78c28f15e10d591"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-936e22ec17264223b78c28f15e10d591"' :
                                            'id="xs-controllers-links-module-UserModule-936e22ec17264223b78c28f15e10d591"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-936e22ec17264223b78c28f15e10d591"' : 'data-target="#xs-injectables-links-module-UserModule-936e22ec17264223b78c28f15e10d591"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-936e22ec17264223b78c28f15e10d591"' :
                                        'id="xs-injectables-links-module-UserModule-936e22ec17264223b78c28f15e10d591"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
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
                                    <a href="controllers/AppController.html" data-type="entity-link">AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthorController.html" data-type="entity-link">AuthorController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BookController.html" data-type="entity-link">BookController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PublisherController.html" data-type="entity-link">PublisherController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link">UserController</a>
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
                                <a href="classes/Author.html" data-type="entity-link">Author</a>
                            </li>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link">Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthorDto.html" data-type="entity-link">CreateAuthorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link">CreateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePublisherDto.html" data-type="entity-link">CreatePublisherDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleData.html" data-type="entity-link">GoogleData</a>
                            </li>
                            <li class="link">
                                <a href="classes/Publisher.html" data-type="entity-link">Publisher</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthorDto.html" data-type="entity-link">UpdateAuthorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookDto.html" data-type="entity-link">UpdateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePublisherDto.html" data-type="entity-link">UpdatePublisherDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link">UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link">AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorService.html" data-type="entity-link">AuthorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link">BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublisherService.html" data-type="entity-link">PublisherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
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