module.exports = [
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].AppRouterContext; //# sourceMappingURL=app-router-context.js.map
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HooksClientContext; //# sourceMappingURL=hooks-client-context.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ServerInsertedHtml; //# sourceMappingURL=server-inserted-html.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/frontend/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/frontend/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/frontend/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
} //# sourceMappingURL=promise-with-resolvers.js.map
}),
"[project]/frontend/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Static"] = 1] = "Static";
    RenderStage[RenderStage["Runtime"] = 2] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 3] = "Dynamic";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal = null){
        this.abortSignal = abortSignal;
        this.currentStage = 1;
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                const { reason } = abortSignal;
                if (this.currentStage < 2) {
                    this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.runtimeStagePromise.reject(reason);
                }
                if (this.currentStage < 3) {
                    this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (this.currentStage >= stage) {
            return;
        }
        this.currentStage = stage;
        // Note that we might be going directly from Static to Dynamic,
        // so we need to resolve the runtime stage as well.
        if (stage >= 2) {
            this.runtimeStagePromise.resolve();
        }
        if (stage >= 3) {
            this.dynamicStagePromise.resolve();
        }
    }
    getStagePromise(stage) {
        switch(stage){
            case 2:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 3:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackSynchronousPlatformIOAccessInDev: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of the prerender stage
    if (requestStore.stagedRendering) {
        // TODO: error for sync IO in the runtime stage
        // (which is not currently covered by the validation render in `spawnDynamicValidationInDev`)
        requestStore.stagedRendering.advanceStage(_stagedrendering.RenderStage.Dynamic);
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : "TURBOPACK unreachable";
const useDynamicSearchParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicSearchParams : "TURBOPACK unreachable";
function useSearchParams() {
    useDynamicSearchParams?.('useSearchParams()');
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _readonlyurlsearchparams.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.searchParams);
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams?.('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    const pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.pathname);
        }
    }
    return pathname;
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams?.('useParams()');
    const params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.params);
        }
    }
    return params;
}
function useSelectedLayoutSegments(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            const promise = navigationPromises.selectedLayoutSegmentsPromises?.get(parallelRouteKey);
            if (promise) {
                // We should always have a promise here, but if we don't, it's not worth erroring over.
                // We just won't be able to instrument it, but can still provide the value.
                return (0, _react.use)(promise);
            }
        }
    }
    return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegment()');
    const navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && navigationPromises && 'use' in _react.default) {
        const promise = navigationPromises.selectedLayoutSegmentPromises?.get(parallelRouteKey);
        if (promise) {
            // We should always have a promise here, but if we don't, it's not worth erroring over.
            // We just won't be able to instrument it, but can still provide the value.
            return (0, _react.use)(promise);
        }
    }
    return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/frontend/node_modules/mimic-function/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mimicFunction
]);
const copyProperty = (to, from, property, ignoreNonConfigurable)=>{
    // `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
    // `Function#prototype` is non-writable and non-configurable so can never be modified.
    if (property === 'length' || property === 'prototype') {
        return;
    }
    // `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
    if (property === 'arguments' || property === 'caller') {
        return;
    }
    const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
    const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
    if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
        return;
    }
    Object.defineProperty(to, property, fromDescriptor);
};
// `Object.defineProperty()` throws if the property exists, is not configurable and either:
// - one its descriptors is changed
// - it is non-writable and its value is changed
const canCopyProperty = function(toDescriptor, fromDescriptor) {
    return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from)=>{
    const fromPrototype = Object.getPrototypeOf(from);
    if (fromPrototype === Object.getPrototypeOf(to)) {
        return;
    }
    Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody)=>`/* Wrapped ${withName}*/\n${fromBody}`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');
// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name)=>{
    const withName = name === '' ? '' : `with ${name.trim()}() `;
    const newToString = wrappedToString.bind(null, withName, from.toString());
    // Ensure `to.toString.toString` is non-enumerable and has the same `same`
    Object.defineProperty(newToString, 'name', toStringName);
    const { writable, enumerable, configurable } = toStringDescriptor; // We destructue to avoid a potential `get` descriptor.
    Object.defineProperty(to, 'toString', {
        value: newToString,
        writable,
        enumerable,
        configurable
    });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
    const { name } = to;
    for (const property of Reflect.ownKeys(from)){
        copyProperty(to, from, property, ignoreNonConfigurable);
    }
    changePrototype(to, from);
    changeToString(to, from, name);
    return to;
}
}),
"[project]/frontend/node_modules/memoize/distribution/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize,
    "memoizeClear",
    ()=>memoizeClear,
    "memoizeDecorator",
    ()=>memoizeDecorator,
    "memoizeIsCached",
    ()=>memoizeIsCached
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$mimic$2d$function$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/mimic-function/index.js [app-ssr] (ecmascript)");
;
const maxTimeoutValue = 2_147_483_647;
const cacheStore = new WeakMap();
const cacheTimerStore = new WeakMap();
const cacheKeyStore = new WeakMap();
function getValidCacheItem(cache, key) {
    const item = cache.get(key);
    if (!item) {
        return undefined;
    }
    if (item.maxAge <= Date.now()) {
        cache.delete(key);
        return undefined;
    }
    return item;
}
function memoize(function_, { cacheKey, cache = new Map(), maxAge } = {}) {
    if (maxAge === 0) {
        return function_;
    }
    if (typeof maxAge === 'number' && Number.isFinite(maxAge)) {
        if (maxAge > maxTimeoutValue) {
            throw new TypeError(`The \`maxAge\` option cannot exceed ${maxTimeoutValue}.`);
        }
        if (maxAge < 0) {
            throw new TypeError('The `maxAge` option should not be a negative number.');
        }
    }
    const memoized = function(...arguments_) {
        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
        const cacheItem = getValidCacheItem(cache, key);
        if (cacheItem) {
            return cacheItem.data;
        }
        const result = function_.apply(this, arguments_);
        const computedMaxAge = typeof maxAge === 'function' ? maxAge(...arguments_) : maxAge;
        if (computedMaxAge !== undefined && computedMaxAge !== Number.POSITIVE_INFINITY) {
            if (!Number.isFinite(computedMaxAge)) {
                throw new TypeError('The `maxAge` function must return a finite number, `0`, or `Infinity`.');
            }
            if (computedMaxAge <= 0) {
                return result; // Do not cache
            }
            if (computedMaxAge > maxTimeoutValue) {
                throw new TypeError(`The \`maxAge\` function result cannot exceed ${maxTimeoutValue}.`);
            }
        }
        cache.set(key, {
            data: result,
            maxAge: computedMaxAge === undefined || computedMaxAge === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : Date.now() + computedMaxAge
        });
        if (computedMaxAge !== undefined && computedMaxAge !== Number.POSITIVE_INFINITY) {
            const timer = setTimeout(()=>{
                cache.delete(key);
                cacheTimerStore.get(memoized)?.delete(timer);
            }, computedMaxAge);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            timer.unref?.();
            const timers = cacheTimerStore.get(memoized) ?? new Set();
            timers.add(timer);
            cacheTimerStore.set(memoized, timers);
        }
        return result;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$mimic$2d$function$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(memoized, function_, {
        ignoreNonConfigurable: true
    });
    cacheStore.set(memoized, cache);
    cacheKeyStore.set(memoized, cacheKey ?? ((arguments_)=>arguments_[0]));
    return memoized;
}
function memoizeDecorator(options = {}) {
    const instanceMap = new WeakMap();
    return (target, propertyKey, descriptor)=>{
        const input = target[propertyKey]; // eslint-disable-line @typescript-eslint/no-unsafe-assignment
        if (typeof input !== 'function') {
            throw new TypeError('The decorated value must be a function');
        }
        delete descriptor.value;
        delete descriptor.writable;
        descriptor.get = function() {
            if (!instanceMap.has(this)) {
                const value = memoize(input, options);
                instanceMap.set(this, value);
                return value;
            }
            return instanceMap.get(this);
        };
    };
}
function memoizeClear(function_) {
    const cache = cacheStore.get(function_);
    if (!cache) {
        throw new TypeError('Can\'t clear a function that was not memoized!');
    }
    if (typeof cache.clear !== 'function') {
        throw new TypeError('The cache Map can\'t be cleared!');
    }
    cache.clear();
    for (const timer of cacheTimerStore.get(function_) ?? []){
        clearTimeout(timer);
    }
    cacheTimerStore.delete(function_);
}
function memoizeIsCached(function_, ...arguments_) {
    const cacheKey = cacheKeyStore.get(function_);
    if (!cacheKey) {
        return false;
    }
    const cache = cacheStore.get(function_);
    const key = cacheKey(arguments_);
    const item = getValidCacheItem(cache, key);
    return item !== undefined;
}
}),
"[project]/frontend/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getUserLocale",
    ()=>getUserLocale,
    "getUserLocales",
    ()=>getUserLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/memoize/distribution/index.js [app-ssr] (ecmascript)");
;
function isString(el) {
    return typeof el === 'string';
}
function isUnique(el, index, arr) {
    return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
    return el.toLowerCase() === el;
}
function fixCommas(el) {
    return el.indexOf(',') === -1 ? el : el.split(',');
}
function normalizeLocale(locale) {
    if (!locale) {
        return locale;
    }
    if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {
        return 'en-US';
    }
    // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
    if (locale.indexOf('.') !== -1) {
        var _a = locale.split('.')[0], actualLocale = _a === void 0 ? '' : _a;
        return normalizeLocale(actualLocale);
    }
    // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
    if (locale.indexOf('@') !== -1) {
        var _b = locale.split('@')[0], actualLocale = _b === void 0 ? '' : _b;
        return normalizeLocale(actualLocale);
    }
    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
    if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {
        return locale;
    }
    var _c = locale.split('-'), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? '' : _d;
    return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? 'en-US' : _d;
    var languageList = [];
    if (typeof navigator !== 'undefined') {
        var rawLanguages = navigator.languages || [];
        var languages = [];
        for(var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++){
            var rawLanguagesItem = rawLanguages_1[_i];
            languages = languages.concat(fixCommas(rawLanguagesItem));
        }
        var rawLanguage = navigator.language;
        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
        languageList = languageList.concat(languages, language);
    }
    if (useFallbackLocale) {
        languageList.push(fallbackLocale);
    }
    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getUserLocalesInternal, {
    cacheKey: JSON.stringify
});
function getUserLocaleInternal(options) {
    return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getUserLocaleInternal, {
    cacheKey: JSON.stringify
});
const __TURBOPACK__default__export__ = getUserLocale;
}),
"[project]/frontend/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatDay",
    ()=>formatDay,
    "formatLongDate",
    ()=>formatLongDate,
    "formatMonth",
    ()=>formatMonth,
    "formatMonthYear",
    ()=>formatMonthYear,
    "formatShortWeekday",
    ()=>formatShortWeekday,
    "formatWeekday",
    ()=>formatWeekday,
    "formatYear",
    ()=>formatYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)");
;
const formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        if (!formatterCache.has(localeWithDefault)) {
            formatterCache.set(localeWithDefault, new Map());
        }
        const formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) {
            const formatter = new Intl.DateTimeFormat(localeWithDefault || undefined, options);
            formatterCacheLocale.set(options, formatter.format.bind(formatter));
        }
        return formatterCacheLocale.get(options)(date);
    };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */ function toSafeHour(date) {
    const safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return (locale, date)=>getFormatter(options)(locale, toSafeHour(date));
}
const formatDateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
const formatDayOptions = {
    day: 'numeric'
};
const formatLongDateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
const formatMonthOptions = {
    month: 'long'
};
const formatMonthYearOptions = {
    month: 'long',
    year: 'numeric'
};
const formatShortWeekdayOptions = {
    weekday: 'short'
};
const formatWeekdayOptions = {
    weekday: 'long'
};
const formatYearOptions = {
    year: 'numeric'
};
const formatDate = getSafeFormatter(formatDateOptions);
const formatDay = getSafeFormatter(formatDayOptions);
const formatLongDate = getSafeFormatter(formatLongDateOptions);
const formatMonth = getSafeFormatter(formatMonthOptions);
const formatMonthYear = getSafeFormatter(formatMonthYearOptions);
const formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
const formatWeekday = getSafeFormatter(formatWeekdayOptions);
const formatYear = getSafeFormatter(formatYearOptions);
}),
"[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utils
 */ __turbopack_context__.s([
    "getCenturyEnd",
    ()=>getCenturyEnd,
    "getCenturyRange",
    ()=>getCenturyRange,
    "getCenturyStart",
    ()=>getCenturyStart,
    "getDate",
    ()=>getDate,
    "getDayEnd",
    ()=>getDayEnd,
    "getDayRange",
    ()=>getDayRange,
    "getDayStart",
    ()=>getDayStart,
    "getDaysInMonth",
    ()=>getDaysInMonth,
    "getDecadeEnd",
    ()=>getDecadeEnd,
    "getDecadeRange",
    ()=>getDecadeRange,
    "getDecadeStart",
    ()=>getDecadeStart,
    "getHours",
    ()=>getHours,
    "getHoursMinutes",
    ()=>getHoursMinutes,
    "getHoursMinutesSeconds",
    ()=>getHoursMinutesSeconds,
    "getISOLocalDate",
    ()=>getISOLocalDate,
    "getISOLocalDateTime",
    ()=>getISOLocalDateTime,
    "getISOLocalMonth",
    ()=>getISOLocalMonth,
    "getMilliseconds",
    ()=>getMilliseconds,
    "getMinutes",
    ()=>getMinutes,
    "getMonth",
    ()=>getMonth,
    "getMonthEnd",
    ()=>getMonthEnd,
    "getMonthHuman",
    ()=>getMonthHuman,
    "getMonthRange",
    ()=>getMonthRange,
    "getMonthStart",
    ()=>getMonthStart,
    "getNextCenturyEnd",
    ()=>getNextCenturyEnd,
    "getNextCenturyStart",
    ()=>getNextCenturyStart,
    "getNextDayEnd",
    ()=>getNextDayEnd,
    "getNextDayStart",
    ()=>getNextDayStart,
    "getNextDecadeEnd",
    ()=>getNextDecadeEnd,
    "getNextDecadeStart",
    ()=>getNextDecadeStart,
    "getNextMonthEnd",
    ()=>getNextMonthEnd,
    "getNextMonthStart",
    ()=>getNextMonthStart,
    "getNextYearEnd",
    ()=>getNextYearEnd,
    "getNextYearStart",
    ()=>getNextYearStart,
    "getPreviousCenturyEnd",
    ()=>getPreviousCenturyEnd,
    "getPreviousCenturyStart",
    ()=>getPreviousCenturyStart,
    "getPreviousDayEnd",
    ()=>getPreviousDayEnd,
    "getPreviousDayStart",
    ()=>getPreviousDayStart,
    "getPreviousDecadeEnd",
    ()=>getPreviousDecadeEnd,
    "getPreviousDecadeStart",
    ()=>getPreviousDecadeStart,
    "getPreviousMonthEnd",
    ()=>getPreviousMonthEnd,
    "getPreviousMonthStart",
    ()=>getPreviousMonthStart,
    "getPreviousYearEnd",
    ()=>getPreviousYearEnd,
    "getPreviousYearStart",
    ()=>getPreviousYearStart,
    "getSeconds",
    ()=>getSeconds,
    "getYear",
    ()=>getYear,
    "getYearEnd",
    ()=>getYearEnd,
    "getYearRange",
    ()=>getYearRange,
    "getYearStart",
    ()=>getYearStart
]);
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date, offset = defaultOffset) {
        const previousPeriod = getPeriod(date) + offset;
        return getEdgeOfPeriod(previousPeriod);
    };
}
function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
        return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
}
function makeGetRange(getStart, getEnd) {
    return function makeGetRangeInternal(date) {
        return [
            getStart(date),
            getEnd(date)
        ];
    };
}
function getYear(date) {
    if (date instanceof Date) {
        return date.getFullYear();
    }
    if (typeof date === 'number') {
        return date;
    }
    const year = Number.parseInt(date, 10);
    if (typeof date === 'string' && !Number.isNaN(year)) {
        return year;
    }
    throw new Error(`Failed to get year from date: ${date}.`);
}
function getMonth(date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
    throw new Error(`Failed to get month from date: ${date}.`);
}
function getMonthHuman(date) {
    if (date instanceof Date) {
        return date.getMonth() + 1;
    }
    throw new Error(`Failed to get human-readable month from date: ${date}.`);
}
function getDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
    throw new Error(`Failed to get year from date: ${date}.`);
}
function getHours(date) {
    if (date instanceof Date) {
        return date.getHours();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const hoursString = datePieces[0];
            if (hoursString) {
                const hours = Number.parseInt(hoursString, 10);
                if (!Number.isNaN(hours)) {
                    return hours;
                }
            }
        }
    }
    throw new Error(`Failed to get hours from date: ${date}.`);
}
function getMinutes(date) {
    if (date instanceof Date) {
        return date.getMinutes();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const minutesString = datePieces[1] || '0';
            const minutes = Number.parseInt(minutesString, 10);
            if (!Number.isNaN(minutes)) {
                return minutes;
            }
        }
    }
    throw new Error(`Failed to get minutes from date: ${date}.`);
}
function getSeconds(date) {
    if (date instanceof Date) {
        return date.getSeconds();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const secondsWithMillisecondsString = datePieces[2] || '0';
            const seconds = Number.parseInt(secondsWithMillisecondsString, 10);
            if (!Number.isNaN(seconds)) {
                return seconds;
            }
        }
    }
    throw new Error(`Failed to get seconds from date: ${date}.`);
}
function getMilliseconds(date) {
    if (date instanceof Date) {
        return date.getMilliseconds();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const secondsWithMillisecondsString = datePieces[2] || '0';
            const millisecondsString = secondsWithMillisecondsString.split('.')[1] || '0';
            const milliseconds = Number.parseInt(millisecondsString, 10);
            if (!Number.isNaN(milliseconds)) {
                return milliseconds;
            }
        }
    }
    throw new Error(`Failed to get seconds from date: ${date}.`);
}
function getCenturyStart(date) {
    const year = getYear(date);
    const centuryStartYear = year + (-year + 1) % 100;
    const centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
}
const getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
const getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
const getCenturyEnd = makeGetEnd(getNextCenturyStart);
const getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
const getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
const getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
    const year = getYear(date);
    const decadeStartYear = year + (-year + 1) % 10;
    const decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
}
const getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
const getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
const getDecadeEnd = makeGetEnd(getNextDecadeStart);
const getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
const getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
const getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
    const year = getYear(date);
    const yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
}
const getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
const getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
const getYearEnd = makeGetEnd(getNextYearStart);
const getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
const getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
const getYearRange = makeGetRange(getYearStart, getYearEnd);
/**
 * Month
 */ function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date, offset = defaultOffset) {
        const year = getYear(date);
        const month = getMonth(date) + offset;
        const previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, 1);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getMonthStart(date) {
    const year = getYear(date);
    const month = getMonth(date);
    const monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
}
const getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
const getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
const getMonthEnd = makeGetEnd(getNextMonthStart);
const getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
const getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
const getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
/**
 * Day
 */ function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date, offset = defaultOffset) {
        const year = getYear(date);
        const month = getMonth(date);
        const day = getDate(date) + offset;
        const previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, day);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getDayStart(date) {
    const year = getYear(date);
    const month = getMonth(date);
    const day = getDate(date);
    const dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
}
const getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
const getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
const getDayEnd = makeGetEnd(getNextDayStart);
const getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
const getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
const getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
    return getDate(getMonthEnd(date));
}
function padStart(num, val = 2) {
    const numStr = `${num}`;
    if (numStr.length >= val) {
        return num;
    }
    return `0000${numStr}`.slice(-val);
}
function getHoursMinutes(date) {
    const hours = padStart(getHours(date));
    const minutes = padStart(getMinutes(date));
    return `${hours}:${minutes}`;
}
function getHoursMinutesSeconds(date) {
    const hours = padStart(getHours(date));
    const minutes = padStart(getMinutes(date));
    const seconds = padStart(getSeconds(date));
    return `${hours}:${minutes}:${seconds}`;
}
function getISOLocalMonth(date) {
    const year = padStart(getYear(date), 4);
    const month = padStart(getMonthHuman(date));
    return `${year}-${month}`;
}
function getISOLocalDate(date) {
    const year = padStart(getYear(date), 4);
    const month = padStart(getMonthHuman(date));
    const day = padStart(getDate(date));
    return `${year}-${month}-${day}`;
}
function getISOLocalDateTime(date) {
    return `${getISOLocalDate(date)}T${getHoursMinutesSeconds(date)}`;
}
}),
"[project]/frontend/node_modules/react-calendar/dist/shared/const.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CALENDAR_TYPES",
    ()=>CALENDAR_TYPES,
    "CALENDAR_TYPE_LOCALES",
    ()=>CALENDAR_TYPE_LOCALES,
    "WEEKDAYS",
    ()=>WEEKDAYS
]);
const CALENDAR_TYPES = {
    GREGORY: 'gregory',
    HEBREW: 'hebrew',
    ISLAMIC: 'islamic',
    ISO_8601: 'iso8601'
};
const CALENDAR_TYPE_LOCALES = {
    gregory: [
        'en-CA',
        'en-US',
        'es-AR',
        'es-BO',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-DO',
        'es-EC',
        'es-GT',
        'es-HN',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PR',
        'es-SV',
        'es-VE',
        'pt-BR'
    ],
    hebrew: [
        'he',
        'he-IL'
    ],
    islamic: [
        // ar-LB, ar-MA intentionally missing
        'ar',
        'ar-AE',
        'ar-BH',
        'ar-DZ',
        'ar-EG',
        'ar-IQ',
        'ar-JO',
        'ar-KW',
        'ar-LY',
        'ar-OM',
        'ar-QA',
        'ar-SA',
        'ar-SD',
        'ar-SY',
        'ar-YE',
        'dv',
        'dv-MV',
        'ps',
        'ps-AR'
    ]
};
const WEEKDAYS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
];
}),
"[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBegin",
    ()=>getBegin,
    "getBeginNext",
    ()=>getBeginNext,
    "getBeginNext2",
    ()=>getBeginNext2,
    "getBeginOfCenturyYear",
    ()=>getBeginOfCenturyYear,
    "getBeginOfDecadeYear",
    ()=>getBeginOfDecadeYear,
    "getBeginOfWeek",
    ()=>getBeginOfWeek,
    "getBeginPrevious",
    ()=>getBeginPrevious,
    "getBeginPrevious2",
    ()=>getBeginPrevious2,
    "getCenturyLabel",
    ()=>getCenturyLabel,
    "getDayOfWeek",
    ()=>getDayOfWeek,
    "getDecadeLabel",
    ()=>getDecadeLabel,
    "getEnd",
    ()=>getEnd,
    "getEndPrevious",
    ()=>getEndPrevious,
    "getEndPrevious2",
    ()=>getEndPrevious2,
    "getRange",
    ()=>getRange,
    "getValueRange",
    ()=>getValueRange,
    "getWeekNumber",
    ()=>getWeekNumber,
    "isCurrentDayOfWeek",
    ()=>isCurrentDayOfWeek,
    "isWeekend",
    ()=>isWeekend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/const.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
;
;
;
const SUNDAY = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEEKDAYS"][0];
const FRIDAY = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEEKDAYS"][5];
const SATURDAY = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEEKDAYS"][6];
function getDayOfWeek(date, calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601) {
    const weekday = date.getDay();
    switch(calendarType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601:
            // Shifts days of the week so that Monday is 0, Sunday is 6
            return (weekday + 6) % 7;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISLAMIC:
            return (weekday + 1) % 7;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].HEBREW:
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY:
            return weekday;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
function getBeginOfCenturyYear(date) {
    const beginOfCentury = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyStart"])(date);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
    const beginOfDecade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"])(date);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(beginOfDecade);
}
function getBeginOfWeek(date, calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(date);
    const monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"])(date);
    const day = date.getDate() - getDayOfWeek(date, calendarType);
    return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601) {
    const calendarTypeForWeekNumber = calendarType === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    const beginOfWeek = getBeginOfWeek(date, calendarType);
    let year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(date) + 1;
    let dayInWeekOne;
    let beginOfFirstWeek;
    // Look for the first week one that does not come after a given date
    do {
        dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601 ? 4 : 1);
        beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
        year -= 1;
    }while (date < beginOfFirstWeek)
    return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
function getBegin(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayStart"])(date);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getBeginPrevious(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMonthStart"])(date);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getBeginNext(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMonthStart"])(date);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getBeginPrevious2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousDecadeStart"])(date, -100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousYearStart"])(date, -10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMonthStart"])(date, -12);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getBeginNext2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextDecadeStart"])(date, 100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextYearStart"])(date, 10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMonthStart"])(date, 12);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getEnd(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyEnd"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeEnd"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearEnd"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthEnd"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayEnd"])(date);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getEndPrevious(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousCenturyEnd"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousDecadeEnd"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousYearEnd"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMonthEnd"])(date);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getEndPrevious2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousDecadeEnd"])(date, -100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousYearEnd"])(date, -10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMonthEnd"])(date, -12);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getRange(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyRange"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeRange"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearRange"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthRange"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayRange"])(date);
        default:
            throw new Error(`Invalid rangeType: ${rangeType}`);
    }
}
function getValueRange(rangeType, date1, date2) {
    const rawNextValue = [
        date1,
        date2
    ].sort((a, b)=>a.getTime() - b.getTime());
    return [
        getBegin(rangeType, rawNextValue[0]),
        getEnd(rangeType, rawNextValue[1])
    ];
}
function toYearLabel(locale, formatYear, dates) {
    return dates.map((date)=>(formatYear || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatYear"])(locale, date)).join(' – ');
}
function getCenturyLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyRange"])(date));
}
function getDecadeLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeRange"])(date));
}
function isCurrentDayOfWeek(date) {
    return date.getDay() === new Date().getDay();
}
function isWeekend(date, calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601) {
    const weekday = date.getDay();
    switch(calendarType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISLAMIC:
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].HEBREW:
            return weekday === FRIDAY || weekday === SATURDAY;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601:
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY:
            return weekday === SATURDAY || weekday === SUNDAY;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
}),
"[project]/frontend/node_modules/react-calendar/dist/Calendar/Navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const className = 'react-calendar__navigation';
function Navigation({ activeStartDate, drillUp, formatMonthYear = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonthYear"], formatYear = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatYear"], locale, maxDate, minDate, navigationAriaLabel = '', navigationAriaLive, navigationLabel, next2AriaLabel = '', next2Label = '»', nextAriaLabel = '', nextLabel = '›', prev2AriaLabel = '', prev2Label = '«', prevAriaLabel = '', prevLabel = '‹', setActiveStartDate, showDoubleView, view, views }) {
    const drillUpAvailable = views.indexOf(view) > 0;
    const shouldShowPrevNext2Buttons = view !== 'century';
    const previousActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginPrevious"])(view, activeStartDate);
    const previousActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginPrevious2"])(view, activeStartDate) : undefined;
    const nextActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginNext"])(view, activeStartDate);
    const nextActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginNext2"])(view, activeStartDate) : undefined;
    const prevButtonDisabled = (()=>{
        if (previousActiveStartDate.getFullYear() < 0) {
            return true;
        }
        const previousActiveEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEndPrevious"])(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    })();
    const prev2ButtonDisabled = shouldShowPrevNext2Buttons && (()=>{
        if (previousActiveStartDate2.getFullYear() < 0) {
            return true;
        }
        const previousActiveEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEndPrevious2"])(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    })();
    const nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    const next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
    function onClickPrevious() {
        setActiveStartDate(previousActiveStartDate, 'prev');
    }
    function onClickPrevious2() {
        setActiveStartDate(previousActiveStartDate2, 'prev2');
    }
    function onClickNext() {
        setActiveStartDate(nextActiveStartDate, 'next');
    }
    function onClickNext2() {
        setActiveStartDate(nextActiveStartDate2, 'next2');
    }
    function renderLabel(date) {
        const label = (()=>{
            switch(view){
                case 'century':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyLabel"])(locale, formatYear, date);
                case 'decade':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeLabel"])(locale, formatYear, date);
                case 'year':
                    return formatYear(locale, date);
                case 'month':
                    return formatMonthYear(locale, date);
                default:
                    throw new Error(`Invalid view: ${view}.`);
            }
        })();
        return navigationLabel ? navigationLabel({
            date,
            label,
            locale: locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserLocale"])() || undefined,
            view
        }) : label;
    }
    function renderButton() {
        const labelClassName = `${className}__label`;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
            "aria-label": navigationAriaLabel,
            "aria-live": navigationAriaLive,
            className: labelClassName,
            disabled: !drillUpAvailable,
            onClick: drillUp,
            style: {
                flexGrow: 1
            },
            type: "button",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: `${labelClassName}__labelText ${labelClassName}__labelText--from`,
                    children: renderLabel(activeStartDate)
                }),
                showDoubleView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${labelClassName}__divider`,
                            children: " \u2013 "
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${labelClassName}__labelText ${labelClassName}__labelText--to`,
                            children: renderLabel(nextActiveStartDate)
                        })
                    ]
                }) : null
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: className,
        children: [
            prev2Label !== null && shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": prev2AriaLabel,
                className: `${className}__arrow ${className}__prev2-button`,
                disabled: prev2ButtonDisabled,
                onClick: onClickPrevious2,
                type: "button",
                children: prev2Label
            }) : null,
            prevLabel !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": prevAriaLabel,
                className: `${className}__arrow ${className}__prev-button`,
                disabled: prevButtonDisabled,
                onClick: onClickPrevious,
                type: "button",
                children: prevLabel
            }),
            renderButton(),
            nextLabel !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": nextAriaLabel,
                className: `${className}__arrow ${className}__next-button`,
                disabled: nextButtonDisabled,
                onClick: onClickNext,
                type: "button",
                children: nextLabel
            }),
            next2Label !== null && shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": next2AriaLabel,
                className: `${className}__arrow ${className}__next2-button`,
                disabled: next2ButtonDisabled,
                onClick: onClickNext2,
                type: "button",
                children: next2Label
            }) : null
        ]
    });
}
}),
"[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/frontend/node_modules/react-calendar/dist/Flex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Flex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function toPercent(num) {
    return `${num}%`;
}
function Flex({ children, className, count, direction, offset, style, wrap, ...otherProps }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: className,
        style: {
            display: 'flex',
            flexDirection: direction,
            flexWrap: wrap ? 'wrap' : 'nowrap',
            ...style
        },
        ...otherProps,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, (child, index)=>{
            const marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                ...child.props,
                style: {
                    flexBasis: toPercent(100 / count),
                    flexShrink: 0,
                    flexGrow: 0,
                    overflow: 'hidden',
                    marginLeft: marginInlineStart,
                    marginInlineStart: marginInlineStart,
                    marginInlineEnd: 0
                }
            });
        })
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/shared/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "between",
    ()=>between,
    "doRangesOverlap",
    ()=>doRangesOverlap,
    "getTileClasses",
    ()=>getTileClasses,
    "isRangeWithinRange",
    ()=>isRangeWithinRange,
    "isValueWithinRange",
    ()=>isValueWithinRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
function between(value, min, max) {
    if (min && min > value) {
        return min;
    }
    if (max && max < value) {
        return max;
    }
    return value;
}
function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
    const isRange = doRangesOverlap(dateRange, valueRange);
    const classes = [];
    if (isRange) {
        classes.push(baseClassName);
        const isRangeStart = isValueWithinRange(valueRange[0], dateRange);
        const isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
        if (isRangeStart) {
            classes.push(`${baseClassName}Start`);
        }
        if (isRangeEnd) {
            classes.push(`${baseClassName}End`);
        }
        if (isRangeStart && isRangeEnd) {
            classes.push(`${baseClassName}BothEnds`);
        }
    }
    return classes;
}
function isCompleteValue(value) {
    if (Array.isArray(value)) {
        return value[0] !== null && value[1] !== null;
    }
    return value !== null;
}
function getTileClasses(args) {
    if (!args) {
        throw new Error('args is required');
    }
    const { value, date, hover } = args;
    const className = 'react-calendar__tile';
    const classes = [
        className
    ];
    if (!date) {
        return classes;
    }
    const now = new Date();
    const dateRange = (()=>{
        if (Array.isArray(date)) {
            return date;
        }
        const { dateType } = args;
        if (!dateType) {
            throw new Error('dateType is required when date is not an array of two dates');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRange"])(dateType, date);
    })();
    if (isValueWithinRange(now, dateRange)) {
        classes.push(`${className}--now`);
    }
    if (!value || !isCompleteValue(value)) {
        return classes;
    }
    const valueRange = (()=>{
        if (Array.isArray(value)) {
            return value;
        }
        const { valueType } = args;
        if (!valueType) {
            throw new Error('valueType is required when value is not an array of two dates');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRange"])(valueType, value);
    })();
    if (isRangeWithinRange(valueRange, dateRange)) {
        classes.push(`${className}--active`);
    } else if (doRangesOverlap(valueRange, dateRange)) {
        classes.push(`${className}--hasActive`);
    }
    const valueRangeClassNames = getRangeClassNames(valueRange, dateRange, `${className}--range`);
    classes.push(...valueRangeClassNames);
    const valueArray = Array.isArray(value) ? value : [
        value
    ];
    if (hover && valueArray.length === 1) {
        const hoverRange = hover > valueRange[0] ? [
            valueRange[0],
            hover
        ] : [
            hover,
            valueRange[0]
        ];
        const hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, `${className}--hover`);
        classes.push(...hoverRangeClassNames);
    }
    return classes;
}
}),
"[project]/frontend/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TileGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Flex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
function TileGroup({ className, count = 3, dateTransform, dateType, end, hover, offset, renderTile, start, step = 1, value, valueType }) {
    const tiles = [];
    for(let point = start; point <= end; point += step){
        const date = dateTransform(point);
        tiles.push(renderTile({
            classes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTileClasses"])({
                date,
                dateType,
                hover,
                value,
                valueType
            }),
            date
        }));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        count: count,
        offset: offset,
        wrap: true,
        children: tiles
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
;
function Tile(props) {
    const { activeStartDate, children, classes, date, formatAbbr, locale, maxDate, maxDateTransform, minDate, minDateTransform, onClick, onMouseOver, style, tileClassName: tileClassNameProps, tileContent: tileContentProps, tileDisabled, view } = props;
    const tileClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const args = {
            activeStartDate,
            date,
            view
        };
        return typeof tileClassNameProps === 'function' ? tileClassNameProps(args) : tileClassNameProps;
    }, [
        activeStartDate,
        date,
        tileClassNameProps,
        view
    ]);
    const tileContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const args = {
            activeStartDate,
            date,
            view
        };
        return typeof tileContentProps === 'function' ? tileContentProps(args) : tileContentProps;
    }, [
        activeStartDate,
        date,
        tileContentProps,
        view
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || (tileDisabled === null || tileDisabled === void 0 ? void 0 : tileDisabled({
            activeStartDate,
            date,
            view
        })),
        onClick: onClick ? (event)=>onClick(date, event) : undefined,
        onFocus: onMouseOver ? ()=>onMouseOver(date) : undefined,
        onMouseOver: onMouseOver ? ()=>onMouseOver(date) : undefined,
        style: style,
        type: "button",
        children: [
            formatAbbr ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("abbr", {
                "aria-label": formatAbbr(locale, date),
                children: children
            }) : children,
            tileContent
        ]
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/CenturyView/Decade.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Decade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
;
;
;
;
const className = 'react-calendar__century-view__decades__decade';
function Decade({ classes = [], currentCentury, formatYear = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatYear"], ...otherProps }) {
    const { date, locale } = otherProps;
    const classesProps = [];
    if (classes) {
        classesProps.push(...classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyStart"])(date).getFullYear() !== currentCentury) {
        classesProps.push(`${className}--neighboringCentury`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...otherProps,
        classes: classesProps,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"],
        view: "century",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeLabel"])(locale, formatYear, date)
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/CenturyView/Decades.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Decades
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/CenturyView/Decade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
;
;
;
;
function Decades(props) {
    const { activeStartDate, hover, showNeighboringCentury, value, valueType, ...otherProps } = props;
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginOfCenturyYear"])(activeStartDate);
    const end = start + (showNeighboringCentury ? 119 : 99);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__century-view__decades",
        dateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"],
        dateType: "decade",
        end: end,
        hover: hover,
        renderTile: ({ date, ...otherTileProps })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...otherProps,
                ...otherTileProps,
                activeStartDate: activeStartDate,
                currentCentury: start,
                date: date
            }, date.getTime()),
        start: start,
        step: 10,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/CenturyView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CenturyView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decades$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/CenturyView/Decades.js [app-ssr] (ecmascript)");
;
;
function CenturyView(props) {
    function renderDecades() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decades$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ...props
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__century-view",
        children: renderDecades()
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/DecadeView/Year.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Year
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
;
;
;
;
const className = 'react-calendar__decade-view__years__year';
function Year({ classes = [], currentDecade, formatYear = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatYear"], ...otherProps }) {
    const { date, locale } = otherProps;
    const classesProps = [];
    if (classes) {
        classesProps.push(...classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"])(date).getFullYear() !== currentDecade) {
        classesProps.push(`${className}--neighboringDecade`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...otherProps,
        classes: classesProps,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearStart"],
        view: "decade",
        children: formatYear(locale, date)
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/DecadeView/Years.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Years
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Year$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/DecadeView/Year.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
;
;
;
;
function Years(props) {
    const { activeStartDate, hover, showNeighboringDecade, value, valueType, ...otherProps } = props;
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginOfDecadeYear"])(activeStartDate);
    const end = start + (showNeighboringDecade ? 11 : 9);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__decade-view__years",
        dateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearStart"],
        dateType: "year",
        end: end,
        hover: hover,
        renderTile: ({ date, ...otherTileProps })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Year$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...otherProps,
                ...otherTileProps,
                activeStartDate: activeStartDate,
                currentDecade: start,
                date: date
            }, date.getTime()),
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/DecadeView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecadeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Years$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/DecadeView/Years.js [app-ssr] (ecmascript)");
;
;
function DecadeView(props) {
    function renderYears() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Years$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ...props
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__decade-view",
        children: renderYears()
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/MonthView/Day.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Day
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
;
;
;
;
const className = 'react-calendar__month-view__days__day';
function Day({ calendarType, classes = [], currentMonthIndex, formatDay = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDay"], formatLongDate = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLongDate"], ...otherProps }) {
    const { date, locale } = otherProps;
    const classesProps = [];
    if (classes) {
        classesProps.push(...classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWeekend"])(date, calendarType)) {
        classesProps.push(`${className}--weekend`);
    }
    if (date.getMonth() !== currentMonthIndex) {
        classesProps.push(`${className}--neighboringMonth`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...otherProps,
        classes: classesProps,
        formatAbbr: formatLongDate,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayStart"],
        view: "month",
        children: formatDay(locale, date)
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/MonthView/Days.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Days
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Day$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/MonthView/Day.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
;
;
;
;
function Days(props) {
    const { activeStartDate, calendarType, hover, showFixedNumberOfWeeks, showNeighboringMonth, value, valueType, ...otherProps } = props;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
    const monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"])(activeStartDate);
    const hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
    const dayOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeStartDate, calendarType);
    const offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */ const start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */ const end = (()=>{
        if (showFixedNumberOfWeeks) {
            // Always show 6 weeks
            return start + 6 * 7 - 1;
        }
        const daysInMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDaysInMonth"])(activeStartDate);
        if (showNeighboringMonth) {
            const activeEndDate = new Date();
            activeEndDate.setFullYear(year, monthIndex, daysInMonth);
            activeEndDate.setHours(0, 0, 0, 0);
            const daysUntilEndOfTheWeek = 7 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeEndDate, calendarType) - 1;
            return daysInMonth + daysUntilEndOfTheWeek;
        }
        return daysInMonth;
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__month-view__days",
        count: 7,
        dateTransform: (day)=>{
            const date = new Date();
            date.setFullYear(year, monthIndex, day);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayStart"])(date);
        },
        dateType: "day",
        hover: hover,
        end: end,
        renderTile: ({ date, ...otherTileProps })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Day$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...otherProps,
                ...otherTileProps,
                activeStartDate: activeStartDate,
                calendarType: calendarType,
                currentMonthIndex: monthIndex,
                date: date
            }, date.getTime()),
        offset: offset,
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/MonthView/Weekdays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Weekdays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Flex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const className = 'react-calendar__month-view__weekdays';
const weekdayClassName = `${className}__weekday`;
function Weekdays(props) {
    const { calendarType, formatShortWeekday = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatShortWeekday"], formatWeekday = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatWeekday"], locale, onMouseLeave } = props;
    const anyDate = new Date();
    const beginOfMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"])(anyDate);
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(beginOfMonth);
    const monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"])(beginOfMonth);
    const weekdays = [];
    for(let weekday = 1; weekday <= 7; weekday += 1){
        const weekdayDate = new Date(year, monthIndex, weekday - (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfWeek"])(beginOfMonth, calendarType));
        const abbr = formatWeekday(locale, weekdayDate);
        weekdays.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(weekdayClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCurrentDayOfWeek"])(weekdayDate) && `${weekdayClassName}--current`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWeekend"])(weekdayDate, calendarType) && `${weekdayClassName}--weekend`),
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("abbr", {
                "aria-label": abbr,
                title: abbr,
                children: formatShortWeekday(locale, weekdayDate).replace('.', '')
            })
        }, weekday));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        count: 7,
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        children: weekdays
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/MonthView/WeekNumber.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeekNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
const className = 'react-calendar__tile';
function WeekNumber(props) {
    const { onClickWeekNumber, weekNumber } = props;
    const children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        children: weekNumber
    });
    if (onClickWeekNumber) {
        const { date, onClickWeekNumber, weekNumber, ...otherProps } = props;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
            ...otherProps,
            className: className,
            onClick: (event)=>onClickWeekNumber(weekNumber, date, event),
            type: "button",
            children: children
        });
    } else {
        const { date, onClickWeekNumber, weekNumber, ...otherProps } = props;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ...otherProps,
            className: className,
            children: children
        });
    }
}
}),
"[project]/frontend/node_modules/react-calendar/dist/MonthView/WeekNumbers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeekNumbers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Flex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/MonthView/WeekNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
;
;
;
;
function WeekNumbers(props) {
    const { activeStartDate, calendarType, onClickWeekNumber, onMouseLeave, showFixedNumberOfWeeks } = props;
    const numberOfWeeks = (()=>{
        if (showFixedNumberOfWeeks) {
            return 6;
        }
        const numberOfDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDaysInMonth"])(activeStartDate);
        const startWeekday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeStartDate, calendarType);
        const days = numberOfDays - (7 - startWeekday);
        return 1 + Math.ceil(days / 7);
    })();
    const dates = (()=>{
        const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
        const monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"])(activeStartDate);
        const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDate"])(activeStartDate);
        const result = [];
        for(let index = 0; index < numberOfWeeks; index += 1){
            result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginOfWeek"])(new Date(year, monthIndex, day + index * 7), calendarType));
        }
        return result;
    })();
    const weekNumbers = dates.map((date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekNumber"])(date, calendarType));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__month-view__weekNumbers",
        count: numberOfWeeks,
        direction: "column",
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        style: {
            flexBasis: 'calc(100% * (1 / 8)',
            flexShrink: 0
        },
        children: weekNumbers.map((weekNumber, weekIndex)=>{
            const date = dates[weekIndex];
            if (!date) {
                throw new Error('date is not defined');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                date: date,
                onClickWeekNumber: onClickWeekNumber,
                weekNumber: weekNumber
            }, weekNumber);
        })
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/MonthView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/MonthView/Days.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Weekdays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/MonthView/Weekdays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/MonthView/WeekNumbers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/const.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function getCalendarTypeFromLocale(locale) {
    if (locale) {
        for (const [calendarType, locales] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPE_LOCALES"])){
            if (locales.includes(locale)) {
                return calendarType;
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
}
function MonthView(props) {
    const { activeStartDate, locale, onMouseLeave, showFixedNumberOfWeeks } = props;
    const { calendarType = getCalendarTypeFromLocale(locale), formatShortWeekday, formatWeekday, onClickWeekNumber, showWeekNumbers, ...childProps } = props;
    function renderWeekdays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Weekdays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            calendarType: calendarType,
            formatShortWeekday: formatShortWeekday,
            formatWeekday: formatWeekday,
            locale: locale,
            onMouseLeave: onMouseLeave
        });
    }
    function renderWeekNumbers() {
        if (!showWeekNumbers) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            activeStartDate: activeStartDate,
            calendarType: calendarType,
            onClickWeekNumber: onClickWeekNumber,
            onMouseLeave: onMouseLeave,
            showFixedNumberOfWeeks: showFixedNumberOfWeeks
        });
    }
    function renderDays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            calendarType: calendarType,
            ...childProps
        });
    }
    const className = 'react-calendar__month-view';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, showWeekNumbers ? `${className}--weekNumbers` : ''),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            style: {
                display: 'flex',
                alignItems: 'flex-end'
            },
            children: [
                renderWeekNumbers(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    style: {
                        flexGrow: 1,
                        width: '100%'
                    },
                    children: [
                        renderWeekdays(),
                        renderDays()
                    ]
                })
            ]
        })
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/YearView/Month.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Month
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
;
;
;
;
const className = 'react-calendar__year-view__months__month';
function Month({ classes = [], formatMonth = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonth"], formatMonthYear = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonthYear"], ...otherProps }) {
    const { date, locale } = otherProps;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...otherProps,
        classes: [
            ...classes,
            className
        ],
        formatAbbr: formatMonthYear,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"],
        view: "year",
        children: formatMonth(locale, date)
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/YearView/Months.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Months
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Month$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/YearView/Month.js [app-ssr] (ecmascript)");
;
;
;
;
function Months(props) {
    const { activeStartDate, hover, value, valueType, ...otherProps } = props;
    const start = 0;
    const end = 11;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__year-view__months",
        dateTransform: (monthIndex)=>{
            const date = new Date();
            date.setFullYear(year, monthIndex, 1);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"])(date);
        },
        dateType: "month",
        end: end,
        hover: hover,
        renderTile: ({ date, ...otherTileProps })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Month$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...otherProps,
                ...otherTileProps,
                activeStartDate: activeStartDate,
                date: date
            }, date.getTime()),
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/YearView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YearView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Months$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/YearView/Months.js [app-ssr] (ecmascript)");
;
;
function YearView(props) {
    function renderMonths() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Months$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ...props
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__year-view",
        children: renderMonths()
    });
}
}),
"[project]/frontend/node_modules/react-calendar/dist/Calendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Calendar/Navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/CenturyView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/DecadeView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/MonthView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/YearView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/shared/utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const baseClassName = 'react-calendar';
const allViews = [
    'century',
    'decade',
    'year',
    'month'
];
const allValueTypes = [
    'decade',
    'year',
    'month',
    'day'
];
const defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
const defaultMaxDate = new Date(8.64e15);
function toDate(value) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */ function getLimitedViews(minDetail, maxDetail) {
    return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */ function isViewAllowed(view, minDetail, maxDetail) {
    const views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */ function getView(view, minDetail, maxDetail) {
    if (!view) {
        return maxDetail;
    }
    if (isViewAllowed(view, minDetail, maxDetail)) {
        return view;
    }
    return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */ function getValueType(view) {
    const index = allViews.indexOf(view);
    return allValueTypes[index];
}
function getValue(value, index) {
    const rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) {
        return null;
    }
    const valueDate = toDate(rawValue);
    if (Number.isNaN(valueDate.getTime())) {
        throw new Error(`Invalid date: ${value}`);
    }
    return valueDate;
}
function getDetailValue({ value, minDate, maxDate, maxDetail }, index) {
    const valuePiece = getValue(value, index);
    if (!valuePiece) {
        return null;
    }
    const valueType = getValueType(maxDetail);
    const detailValueFrom = (()=>{
        switch(index){
            case 0:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(valueType, valuePiece);
            case 1:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnd"])(valueType, valuePiece);
            default:
                throw new Error(`Invalid index value: ${index}`);
        }
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["between"])(detailValueFrom, minDate, maxDate);
}
const getDetailValueFrom = (args)=>getDetailValue(args, 0);
const getDetailValueTo = (args)=>getDetailValue(args, 1);
const getDetailValueArray = (args)=>[
        getDetailValueFrom,
        getDetailValueTo
    ].map((fn)=>fn(args));
function getActiveStartDate({ maxDate, maxDetail, minDate, minDetail, value, view }) {
    const rangeType = getView(view, minDetail, maxDetail);
    const valueFrom = getDetailValueFrom({
        value,
        minDate,
        maxDate,
        maxDetail
    }) || new Date();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(rangeType, valueFrom);
}
function getInitialActiveStartDate({ activeStartDate, defaultActiveStartDate, defaultValue, defaultView, maxDate, maxDetail, minDate, minDetail, value, view }) {
    const rangeType = getView(view, minDetail, maxDetail);
    const valueFrom = activeStartDate || defaultActiveStartDate;
    if (valueFrom) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(rangeType, valueFrom);
    }
    return getActiveStartDate({
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        value: value || defaultValue,
        view: view || defaultView
    });
}
function getIsSingleValue(value) {
    return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Calendar(props, ref) {
    const { activeStartDate: activeStartDateProps, allowPartialRange, calendarType, className, 'data-testid': dataTestId, defaultActiveStartDate, defaultValue, defaultView, formatDay, formatLongDate, formatMonth, formatMonthYear, formatShortWeekday, formatWeekday, formatYear, goToRangeStartOnSelect = true, inputRef, locale, maxDate = defaultMaxDate, maxDetail = 'month', minDate = defaultMinDate, minDetail = 'century', navigationAriaLabel, navigationAriaLive, navigationLabel, next2AriaLabel, next2Label, nextAriaLabel, nextLabel, onActiveStartDateChange, onChange: onChangeProps, onClickDay, onClickDecade, onClickMonth, onClickWeekNumber, onClickYear, onDrillDown, onDrillUp, onViewChange, prev2AriaLabel, prev2Label, prevAriaLabel, prevLabel, returnValue = 'start', selectRange, showDoubleView, showFixedNumberOfWeeks, showNavigation = true, showNeighboringCentury, showNeighboringDecade, showNeighboringMonth = true, showWeekNumbers, tileClassName, tileContent, tileDisabled, value: valueProps, view: viewProps } = props;
    const [activeStartDateState, setActiveStartDateState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultActiveStartDate);
    const [hoverState, setHoverState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [valueState, setValueState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array.isArray(defaultValue) ? defaultValue.map((el)=>el !== null ? toDate(el) : null) : defaultValue !== null && defaultValue !== undefined ? toDate(defaultValue) : null);
    const [viewState, setViewState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultView);
    const activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
        activeStartDate: activeStartDateProps,
        defaultActiveStartDate,
        defaultValue,
        defaultView,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        value: valueProps,
        view: viewProps
    });
    const value = (()=>{
        const rawValue = (()=>{
            // In the middle of range selection, use value from state
            if (selectRange && getIsSingleValue(valueState)) {
                return valueState;
            }
            return valueProps !== undefined ? valueProps : valueState;
        })();
        if (!rawValue) {
            return null;
        }
        return Array.isArray(rawValue) ? rawValue.map((el)=>el !== null ? toDate(el) : null) : rawValue !== null ? toDate(rawValue) : null;
    })();
    const valueType = getValueType(maxDetail);
    const view = getView(viewProps || viewState, minDetail, maxDetail);
    const views = getLimitedViews(minDetail, maxDetail);
    const hover = selectRange ? hoverState : null;
    const drillDownAvailable = views.indexOf(view) < views.length - 1;
    const drillUpAvailable = views.indexOf(view) > 0;
    const getProcessedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        const processFunction = (()=>{
            switch(returnValue){
                case 'start':
                    return getDetailValueFrom;
                case 'end':
                    return getDetailValueTo;
                case 'range':
                    return getDetailValueArray;
                default:
                    throw new Error('Invalid returnValue.');
            }
        })();
        return processFunction({
            maxDate,
            maxDetail,
            minDate,
            value
        });
    }, [
        maxDate,
        maxDetail,
        minDate,
        returnValue
    ]);
    const setActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nextActiveStartDate, action)=>{
        setActiveStartDateState(nextActiveStartDate);
        const args = {
            action,
            activeStartDate: nextActiveStartDate,
            value,
            view
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
    }, [
        activeStartDate,
        onActiveStartDateChange,
        value,
        view
    ]);
    const onClickTile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value, event)=>{
        const callback = (()=>{
            switch(view){
                case 'century':
                    return onClickDecade;
                case 'decade':
                    return onClickYear;
                case 'year':
                    return onClickMonth;
                case 'month':
                    return onClickDay;
                default:
                    throw new Error(`Invalid view: ${view}.`);
            }
        })();
        if (callback) callback(value, event);
    }, [
        onClickDay,
        onClickDecade,
        onClickMonth,
        onClickYear,
        view
    ]);
    const drillDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nextActiveStartDate, event)=>{
        if (!drillDownAvailable) {
            return;
        }
        onClickTile(nextActiveStartDate, event);
        const nextView = views[views.indexOf(view) + 1];
        if (!nextView) {
            throw new Error('Attempted to drill down from the lowest view.');
        }
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        const args = {
            action: 'drillDown',
            activeStartDate: nextActiveStartDate,
            value,
            view: nextView
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillDown) {
            onDrillDown(args);
        }
    }, [
        activeStartDate,
        drillDownAvailable,
        onActiveStartDateChange,
        onClickTile,
        onDrillDown,
        onViewChange,
        value,
        view,
        views
    ]);
    const drillUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!drillUpAvailable) {
            return;
        }
        const nextView = views[views.indexOf(view) - 1];
        if (!nextView) {
            throw new Error('Attempted to drill up from the highest view.');
        }
        const nextActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(nextView, activeStartDate);
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        const args = {
            action: 'drillUp',
            activeStartDate: nextActiveStartDate,
            value,
            view: nextView
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillUp) {
            onDrillUp(args);
        }
    }, [
        activeStartDate,
        drillUpAvailable,
        onActiveStartDateChange,
        onDrillUp,
        onViewChange,
        value,
        view,
        views
    ]);
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rawNextValue, event)=>{
        const previousValue = value;
        onClickTile(rawNextValue, event);
        const isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
        let nextValue;
        if (selectRange) {
            // Range selection turned on
            if (isFirstValueInRange) {
                // Value has 0 or 2 elements - either way we're starting a new array
                // First value
                nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(valueType, rawNextValue);
            } else {
                if (!previousValue) {
                    throw new Error('previousValue is required');
                }
                if (Array.isArray(previousValue)) {
                    throw new Error('previousValue must not be an array');
                }
                // Second value
                nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueRange"])(valueType, previousValue, rawNextValue);
            }
        } else {
            // Range selection turned off
            nextValue = getProcessedValue(rawNextValue);
        }
        const nextActiveStartDate = // Range selection turned off
        !selectRange || // Range selection turned on, first value
        isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
        goToRangeStartOnSelect ? getActiveStartDate({
            maxDate,
            maxDetail,
            minDate,
            minDetail,
            value: nextValue,
            view
        }) : null;
        event.persist();
        setActiveStartDateState(nextActiveStartDate);
        setValueState(nextValue);
        const args = {
            action: 'onChange',
            activeStartDate: nextActiveStartDate,
            value: nextValue,
            view
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onChangeProps) {
            if (selectRange) {
                const isSingleValue = getIsSingleValue(nextValue);
                if (!isSingleValue) {
                    onChangeProps(nextValue || null, event);
                } else if (allowPartialRange) {
                    if (Array.isArray(nextValue)) {
                        throw new Error('value must not be an array');
                    }
                    onChangeProps([
                        nextValue || null,
                        null
                    ], event);
                }
            } else {
                onChangeProps(nextValue || null, event);
            }
        }
    }, [
        activeStartDate,
        allowPartialRange,
        getProcessedValue,
        goToRangeStartOnSelect,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        onActiveStartDateChange,
        onChangeProps,
        onClickTile,
        selectRange,
        value,
        valueType,
        view
    ]);
    function onMouseOver(nextHover) {
        setHoverState(nextHover);
    }
    function onMouseLeave() {
        setHoverState(null);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            activeStartDate,
            drillDown,
            drillUp,
            onChange,
            setActiveStartDate,
            value,
            view
        }), [
        activeStartDate,
        drillDown,
        drillUp,
        onChange,
        setActiveStartDate,
        value,
        view
    ]);
    function renderContent(next) {
        const currentActiveStartDate = next ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginNext"])(view, activeStartDate) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(view, activeStartDate);
        const onClick = drillDownAvailable ? drillDown : onChange;
        const commonProps = {
            activeStartDate: currentActiveStartDate,
            hover,
            locale,
            maxDate,
            minDate,
            onClick,
            onMouseOver: selectRange ? onMouseOver : undefined,
            tileClassName,
            tileContent,
            tileDisabled,
            value,
            valueType
        };
        switch(view){
            case 'century':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        formatYear: formatYear,
                        showNeighboringCentury: showNeighboringCentury,
                        ...commonProps
                    });
                }
            case 'decade':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        formatYear: formatYear,
                        showNeighboringDecade: showNeighboringDecade,
                        ...commonProps
                    });
                }
            case 'year':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        formatMonth: formatMonth,
                        formatMonthYear: formatMonthYear,
                        ...commonProps
                    });
                }
            case 'month':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        calendarType: calendarType,
                        formatDay: formatDay,
                        formatLongDate: formatLongDate,
                        formatShortWeekday: formatShortWeekday,
                        formatWeekday: formatWeekday,
                        onClickWeekNumber: onClickWeekNumber,
                        onMouseLeave: selectRange ? onMouseLeave : undefined,
                        showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined' ? showFixedNumberOfWeeks : showDoubleView,
                        showNeighboringMonth: showNeighboringMonth,
                        showWeekNumbers: showWeekNumbers,
                        ...commonProps
                    });
                }
            default:
                throw new Error(`Invalid view: ${view}.`);
        }
    }
    function renderNavigation() {
        if (!showNavigation) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            activeStartDate: activeStartDate,
            drillUp: drillUp,
            formatMonthYear: formatMonthYear,
            formatYear: formatYear,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            navigationAriaLabel: navigationAriaLabel,
            navigationAriaLive: navigationAriaLive,
            navigationLabel: navigationLabel,
            next2AriaLabel: next2AriaLabel,
            next2Label: next2Label,
            nextAriaLabel: nextAriaLabel,
            nextLabel: nextLabel,
            prev2AriaLabel: prev2AriaLabel,
            prev2Label: prev2Label,
            prevAriaLabel: prevAriaLabel,
            prevLabel: prevLabel,
            setActiveStartDate: setActiveStartDate,
            showDoubleView: showDoubleView,
            view: view,
            views: views
        });
    }
    const valueArray = Array.isArray(value) ? value : [
        value
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseClassName, selectRange && valueArray.length === 1 && `${baseClassName}--selectRange`, showDoubleView && `${baseClassName}--doubleView`, className),
        "data-testid": dataTestId,
        ref: inputRef,
        children: [
            renderNavigation(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${baseClassName}__viewContainer`,
                onBlur: selectRange ? onMouseLeave : undefined,
                onMouseLeave: selectRange ? onMouseLeave : undefined,
                children: [
                    renderContent(),
                    showDoubleView ? renderContent(true) : null
                ]
            })
        ]
    });
});
const __TURBOPACK__default__export__ = Calendar;
}),
"[project]/frontend/node_modules/react-calendar/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Calendar/Navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/Calendar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/CenturyView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/DecadeView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/MonthView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-calendar/dist/YearView.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/frontend/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/frontend/node_modules/date-fns/setHours.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setHours",
    ()=>setHours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function setHours(date, hours, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(hours);
    return _date;
}
const __TURBOPACK__default__export__ = setHours;
}),
"[project]/frontend/node_modules/date-fns/setMinutes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setMinutes",
    ()=>setMinutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function setMinutes(date, minutes, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setMinutes(minutes);
    return date_;
}
const __TURBOPACK__default__export__ = setMinutes;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-js/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadMercadoPago = void 0;
const SDK_MERCADOPAGO_URL = 'https://sdk.mercadopago.com/js/v2';
const SDK_MERCADOPAGO_URL_REGEX = /^https:\/\/sdk\.mercadopago\.com\/js\/v2\/?(\?.*)?$/;
const EXISTING_SCRIPT_MESSAGE_INITIALIZED = 'MercadoPago has already been initialized in your window, please remove the duplicate import';
const EXISTING_SCRIPT_MESSAGE_NOT_AVAILABLE = 'MercadoPago.js not available';
const EXISTING_SCRIPT_MESSAGE_FAILED_TO_LOAD = 'Failed to load MercadoPago.js';
const findScript = ()=>{
    var scripts = document.querySelectorAll(`script[src^="${SDK_MERCADOPAGO_URL}"`);
    for(var i = 0; i < scripts.length; i++){
        var script = scripts[i];
        if (!SDK_MERCADOPAGO_URL_REGEX.test(script.src)) {
            continue;
        }
        return script;
    }
    return null;
};
const injectScript = ()=>{
    const script = document.createElement('script');
    script.src = SDK_MERCADOPAGO_URL;
    const headOrBody = document.head || document.body;
    if (!headOrBody) {
        throw new Error('Expected document.body or document.head not to be null. MercadoPago requires a <body> or a <head> element, please add on your project.');
    }
    headOrBody.appendChild(script);
    return script;
};
let LoadPromise = null;
const loadMercadoPago = ()=>{
    if (LoadPromise !== null) {
        return LoadPromise;
    }
    LoadPromise = new Promise((resolve, reject)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            // Resolve to null when imported server side. This makes the module
            // safe to import in an isomorphic code base.
            resolve(null);
            return;
        }
        //TURBOPACK unreachable
        ;
    });
    return LoadPromise;
};
exports.loadMercadoPago = loadMercadoPago;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MercadoPagoInstance",
    ()=>MercadoPagoInstance,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-js/dist/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
class MercadoPagoInstance {
    static getInstance() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.publicKey) {
                if (!this.loadedInstanceMercadoPago) {
                    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadMercadoPago"])();
                    this.loadedInstanceMercadoPago = true;
                }
                if (!this.instanceMercadoPago) {
                    this.instanceMercadoPago = new window.MercadoPago(this.publicKey, this.options);
                }
                return this.instanceMercadoPago;
            } else {
                console.error('Expected the PUBLIC_KEY to render the MercadoPago SDK React');
            }
        });
    }
}
MercadoPagoInstance.publicKey = null;
MercadoPagoInstance.options = {};
MercadoPagoInstance.instanceMercadoPago = undefined;
MercadoPagoInstance.loadedInstanceMercadoPago = false;
function isOptionsObjectUnchanged(oldOption, newOption) {
    const checkOptionObject = Object.keys(oldOption).length === Object.keys(newOption).length && Object.keys(oldOption).every((key)=>{
        return Object.prototype.hasOwnProperty.call(newOption, key) && oldOption[key] === newOption[key];
    });
    return checkOptionObject;
}
/**
 * Create an instance of MercadoPago
 * @param publicKey string
 * @param options TOptions
 */ const initMercadoPago = (publicKey, options)=>{
    const injectFrontEndOption = Object.assign(Object.assign({}, options), {
        frontEndStack: 'react'
    });
    const didOptionsChange = !isOptionsObjectUnchanged(MercadoPagoInstance.options, injectFrontEndOption);
    if (publicKey !== MercadoPagoInstance.publicKey || didOptionsChange) {
        MercadoPagoInstance.publicKey = publicKey;
        MercadoPagoInstance.options = injectFrontEndOption;
        MercadoPagoInstance.instanceMercadoPago = undefined;
    }
};
const __TURBOPACK__default__export__ = initMercadoPago;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/initial/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onBinChangeDefault",
    ()=>onBinChangeDefault,
    "onClickEditBillingDataDefault",
    ()=>onClickEditBillingDataDefault,
    "onClickEditShippingDataDefault",
    ()=>onClickEditShippingDataDefault,
    "onErrorDefault",
    ()=>onErrorDefault,
    "onReadyDefault",
    ()=>onReadyDefault,
    "onRenderNextStepDefault",
    ()=>onRenderNextStepDefault,
    "onRenderPreviousStepDefault",
    ()=>onRenderPreviousStepDefault,
    "onSubmitDefault",
    ()=>onSubmitDefault
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const onSubmitDefault = ()=>__awaiter(void 0, void 0, void 0, function*() {});
const onReadyDefault = ()=>{};
const onErrorDefault = (error)=>{
    console.error(error);
};
const onBinChangeDefault = (bin)=>{
    {
        console.log(bin);
    }
};
const onClickEditShippingDataDefault = ()=>{
    console.log('onClickEditShippingData default implementation');
};
const onClickEditBillingDataDefault = ()=>{
    console.log('onClickEditShippingData default implementation');
};
const onRenderNextStepDefault = (currentStep)=>{
    console.log(currentStep);
};
const onRenderPreviousStepDefault = (currentStep)=>{
    console.log(currentStep);
};
;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/renderBrick/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initBrick",
    ()=>initBrick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const initBrick = ({ settings, name, containerId, controller })=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        const bricksBuilder = instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.bricks();
        window[controller] = yield bricksBuilder === null || bricksBuilder === void 0 ? void 0 : bricksBuilder.create(name, containerId, settings);
    });
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Bricks uses a debounce to prevent unnecessary reRenders.
__turbopack_context__.s([
    "DEBOUNCE_TIME_RENDER",
    ()=>DEBOUNCE_TIME_RENDER
]);
const DEBOUNCE_TIME_RENDER = 200; //ms
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/brand/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/initial/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/renderBrick/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Brand Brick allows you to communicate different messages related to the payment methods available via Mercado Pago in your store.
 *
 * Usage:
 *
 * ```ts
 * import Brand, {initMercadoPago} from '@mercadopago/sdk-react'
 *
 * initMercadoPago('YOUR_PUBLIC_KEY')
 *
 * const Example = () => {
 *   return(
 *     <Brand />
 *   )
 * }
 * export default Example
 * ```
 *
 * @see {@link https://www.mercadopago.com.ar/developers/en/docs/checkout-bricks/brand-brick/introduction Brand Brick documentation} for more information.
 */ const Brand = ({ onReady = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onReadyDefault"], customization, locale, id = 'brandBrick_container' })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Brand uses a debounce to prevent unnecessary reRenders.
        const BrandBrickConfig = {
            settings: {
                customization,
                locale,
                callbacks: {
                    onReady: onReady
                }
            },
            name: 'brand',
            containerId: id,
            controller: 'brandBrickController'
        };
        const timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initBrick"])(BrandBrickConfig);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.brandBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [
        customization,
        onReady
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: id
    });
};
const __TURBOPACK__default__export__ = Brand;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/cardPayment/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCardPaymentBrick",
    ()=>useCardPaymentBrick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/initial/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/renderBrick/index.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Card Payment Brick allows you to offer payments with credit and debit card at yout checkout.
 *
 * Usage:
 *
 * ```ts
 * import CardPayment, {initMercadoPago} from '@mercadopago/sdk-react'
 *
 * initMercadoPago('YOUR_PUBLIC_KEY')
 *
 * const Example = () => {
 *   return(
 *      <CardPayment
 *       initialization={{amount: AMOUNT}} // AMOUNT is the value from the purchase, its the minium data to initialize CardPayment brick
 *       onSubmit={} // Receives a function that send the payment to backend and, through it, to MercadoPago
 *       />
 *  )
 * }
 * export default Example
 * ```
 *
 * @see {@link https://www.mercadopago.com/developers/en/docs/checkout-bricks/card-payment-brick/introduction Card Payment Brick documentation} for more information.
 */ const CardPayment = ({ onReady = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onReadyDefault"], onError = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onErrorDefault"], onSubmit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSubmitDefault"], onBinChange = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBinChangeDefault"], initialization, customization, locale, id = 'cardPaymentBrick_container' })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // CardPayment uses a debounce to prevent unnecessary reRenders.
        const CardPaymentBrickConfig = {
            settings: {
                initialization,
                customization,
                callbacks: {
                    onReady,
                    onSubmit,
                    onError,
                    onBinChange
                },
                locale
            },
            name: 'cardPayment',
            containerId: id,
            controller: 'cardPaymentBrickController'
        };
        const timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initBrick"])(CardPaymentBrickConfig);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.cardPaymentBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [
        initialization,
        customization,
        onBinChange,
        onReady,
        onError,
        onSubmit
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: id
    });
};
const useCardPaymentBrick = ()=>{
    const update = (updateValues)=>{
        if (window.cardPaymentBrickController) {
            window.cardPaymentBrickController.update(updateValues);
        } else {
            console.warn('[Checkout Bricks] Card Payment Brick is not initialized yet, please try again after a few seconds.');
        }
    };
    return {
        update
    };
};
const __TURBOPACK__default__export__ = CardPayment;
;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/payment/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "usePaymentBrick",
    ()=>usePaymentBrick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/initial/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/renderBrick/index.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Payment Brick allows you to add several payment methods to a store and save card data for future purchases with just one Brick.
 *
 * Usage:
 *
 * ```ts
 * import Payment, {initMercadoPago} from '@mercadopago/sdk-react'
 *
 * initMercadoPago('YOUR_PUBLIC_KEY')
 *
 * const Example = () => {
 *   return(
 *    <Payment
        initialization:{{ amount: AMOUNT }}, // AMOUNT is the value from the purchase, its the minium data to initialize CardPayment brick
        onSubmit={async () => {}} // Callback called when clicking on the data submission button
      />
 *   )
 * }
 * export default Example
 * ```
 *
 * @see {@link https://www.mercadopago.com/developers/en/docs/checkout-bricks/payment-brick/introduction Payment Brick documentation} for more information.
 */ const Payment = ({ onReady = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onReadyDefault"], onError = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onErrorDefault"], onSubmit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSubmitDefault"], onBinChange = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBinChangeDefault"], onClickEditShippingData = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onClickEditShippingDataDefault"], onClickEditBillingData = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onClickEditBillingDataDefault"], onRenderNextStep = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onRenderNextStepDefault"], onRenderPreviousStep = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onRenderPreviousStepDefault"], initialization, customization, locale, id = 'paymentBrick_container' })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Payment uses a debounce to prevent unnecessary reRenders.
        const PaymentBrickController = {
            settings: {
                initialization,
                customization,
                locale,
                callbacks: {
                    onReady,
                    onError,
                    onSubmit,
                    onBinChange,
                    onClickEditShippingData,
                    onClickEditBillingData,
                    onRenderNextStep,
                    onRenderPreviousStep
                }
            },
            name: 'payment',
            containerId: id,
            controller: 'paymentBrickController'
        };
        const timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initBrick"])(PaymentBrickController);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.paymentBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [
        initialization,
        customization,
        onReady,
        onError,
        onSubmit,
        onBinChange
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: id
    });
};
const usePaymentBrick = ()=>{
    const update = (updateValues)=>{
        if (window.paymentBrickController) {
            window.paymentBrickController.update(updateValues);
        } else {
            console.warn('[Checkout Bricks] Payment Brick is not initialized yet, please try again after a few seconds.');
        }
    };
    return {
        update
    };
};
const __TURBOPACK__default__export__ = Payment;
;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/statusScreen/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/initial/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/renderBrick/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
;
;
;
;
// /**
//  * Status Screen Brick allows you to show buyer the status of a purchase made with any payment method provided by Checkout Bricks.
//  *
//  * Usage:
//  *
//  * ```ts
//  * import StatusScreen, {initMercadoPago} from '@mercadopago/sdk-react'
//  *
//  * initMercadoPago('YOUR_PUBLIC_KEY')
//  *
//  * const Example = () => {
//  *   return(
//  *     <StatusScreen
//  *       initialization={{ preferenceId: '<PREFERENCE_ID>'}} // PREFERENCE_ID generated in backend
//  *       onReady={() => {}} // Callback called when Brick is ready
//  *       onError={() => {}} // Callback called for all Brick error cases
//  *     />
//  *   )
//  * }
//  * export default Example
//  * ```
//  *
//  * @see {@link https://www.mercadopago.com/developers/en/docs/checkout-bricks/status-screen-brick/introduction Status Screen Brick documentation} for more information.
//  */
const StatusScreen = ({ onReady = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onReadyDefault"], onError = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onErrorDefault"], customization, initialization, locale, id = 'statusScreenBrick_container' })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Status Screen uses a debounce to prevent unnecessary reRenders.
        const StatusScreenBrickConfig = {
            settings: {
                initialization,
                customization,
                locale,
                callbacks: {
                    onReady,
                    onError
                }
            },
            name: 'statusScreen',
            containerId: id,
            controller: 'statusScreenBrickController'
        };
        const timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initBrick"])(StatusScreenBrickConfig);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.statusScreenBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [
        initialization,
        customization,
        onReady,
        onError
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: id
    });
};
const __TURBOPACK__default__export__ = StatusScreen;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/wallet/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/initial/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/renderBrick/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Wallet Brick allows you to offer payments from your Mercado Pago account at any stage of the purchase process.
 *
 * Usage:
 *
 * ```ts
 * import Wallet, {initMercadoPago} from '@mercadopago/sdk-react'
 *
 * initMercadoPago('YOUR_PUBLIC_KEY')
 *
 * const Example = () => {
 *   return(
 *     <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>'}} /> // PREFERENCE_ID generated in backend
 *   )
 * }
 * export default Example
 * ```
 *
 * @see {@link https://www.mercadopago.com/developers/en/docs/checkout-bricks/wallet-brick/introduction Wallet Brick documentation} for more information.
 */ const Wallet = ({ onReady = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onReadyDefault"], onError = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onErrorDefault"], onSubmit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$initial$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSubmitDefault"], customization, initialization, locale, id = 'walletBrick_container' })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // CardPayment uses a debounce to prevent unnecessary reRenders.
        const WalletBrickConfig = {
            settings: {
                initialization,
                customization,
                locale,
                callbacks: {
                    onReady: onReady,
                    onSubmit: onSubmit,
                    onError: onError
                }
            },
            name: 'wallet',
            containerId: id,
            controller: 'walletBrickController'
        };
        const timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$renderBrick$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initBrick"])(WalletBrickConfig);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.walletBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [
        customization,
        initialization,
        onReady,
        onError,
        onSubmit
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: id
    });
};
const __TURBOPACK__default__export__ = Wallet;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getIdentificationTypes/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Return all the document types based on the public_key
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancegetidentificationtypes method documentation}.
 * @see {@link https://www.mercadopago.com/developers/en/reference/identification_types/_identification_types/get response documentation}.
 */ const getIdentificationTypes = ()=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getIdentificationTypes();
    });
const __TURBOPACK__default__export__ = getIdentificationTypes;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getPaymentMethods/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Returns a payment methods list.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancegetpaymentmethodspaymentmethodsparams method documentation}.
 * @see {@link https://www.mercadopago.com/developers/en/reference/payment_methods/_payment_methods/get response documentation}.
 */ const getPaymentMethods = (paymentMethodsParams)=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getPaymentMethods(paymentMethodsParams);
    });
const __TURBOPACK__default__export__ = getPaymentMethods;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getInstallments/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Returns all installments available.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancegetinstallmentsinstallmentsparams method documentation}.
 */ const getInstallments = (installmentsParams)=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getInstallments(installmentsParams);
    });
const __TURBOPACK__default__export__ = getInstallments;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getIssuers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Returns a issuers list.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancegetissuersissuersparams method documentation}.
 */ const getIssuers = (issuersParams)=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getIssuers(issuersParams);
    });
const __TURBOPACK__default__export__ = getIssuers;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/createCardToken/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Secure Fields token creation method.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/fields.md#mp-instancefieldscreatecardtokennonpcidata method documentation}.
 */ const createCardToken = (cardTokenParams)=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.fields.createCardToken(cardTokenParams);
    });
const __TURBOPACK__default__export__ = createCardToken;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/updateCardToken/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/** Secure Fields token update method. */ const updateCardToken = (token)=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.fields.updateCardToken(token);
    });
const __TURBOPACK__default__export__ = updateCardToken;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/util/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInitializationDependencies",
    ()=>getInitializationDependencies,
    "initSecureField",
    ()=>initSecureField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const getInitializationDependencies = (params, keysToExclude)=>{
    const dependencies = [];
    const entries = Object.entries(params);
    for (const [key, value] of entries){
        const shouldAdd = !keysToExclude.includes(key);
        shouldAdd && dependencies.push(value);
    }
    return dependencies;
};
const getOptions = ({ enableLuhnValidation, customFonts, placeholder, group, style, mode })=>{
    return {
        enableLuhnValidation,
        customFonts,
        placeholder,
        group,
        style,
        mode
    };
};
const secureFieldEvents = [
    'onValidityChange',
    'onBinChange',
    'onChange',
    'onError',
    'onFocus',
    'onReady',
    'onBlur'
];
const uncapitalizeFirstLetter = (str)=>str.charAt(0).toLowerCase() + str.slice(1);
const formatEventName = (eventName)=>uncapitalizeFirstLetter(eventName.slice(2));
const registerEvents = (secureFieldInstance, params)=>{
    const keys = Object.keys(params);
    for (const key of keys){
        if (secureFieldEvents.includes(key)) {
            const event = formatEventName(key);
            const callback = params[key];
            secureFieldInstance.on(event, callback);
        }
    }
};
const initSecureField = (fieldName, params)=>__awaiter(void 0, void 0, void 0, function*() {
        const options = getOptions(params);
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        const secureFieldInstance = instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.fields.create(fieldName, options);
        if (secureFieldInstance) {
            secureFieldInstance.mount(`${fieldName}SecureField_container`);
            registerEvents(secureFieldInstance, params);
        }
        return secureFieldInstance;
    });
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/cardNumber/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
;
;
;
const CardNumber = (params)=>{
    const initializationDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitializationDependencies"])(params, [
        'placeholder',
        'length'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSecureField"])('cardNumber', params).then((instance)=>window.cardNumberInstance = instance);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.cardNumberInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.cardNumberInstance = undefined;
        };
    }, initializationDependencies);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: "cardNumberSecureField_container"
    });
};
const __TURBOPACK__default__export__ = CardNumber;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/securityCode/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
;
;
;
const SecurityCode = (params)=>{
    const initializationDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitializationDependencies"])(params, [
        'placeholder',
        'length',
        'mode'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSecureField"])('securityCode', params).then((instance)=>window.securityCodeInstance = instance);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.securityCodeInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.securityCodeInstance = undefined;
        };
    }, initializationDependencies);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: "securityCodeSecureField_container"
    });
};
const __TURBOPACK__default__export__ = SecurityCode;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/expirationDate/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
;
;
;
const ExpirationDate = (params)=>{
    const initializationDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitializationDependencies"])(params, [
        'placeholder'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSecureField"])('expirationDate', params).then((instance)=>window.expirationDateInstance = instance);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.expirationDateInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationDateInstance = undefined;
        };
    }, initializationDependencies);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: "expirationDateSecureField_container"
    });
};
const __TURBOPACK__default__export__ = ExpirationDate;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/expirationMonth/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
;
;
;
const ExpirationMonth = (params)=>{
    const initializationDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitializationDependencies"])(params, [
        'placeholder'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSecureField"])('expirationMonth', params).then((instance)=>window.expirationMonthInstance = instance);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.expirationMonthInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationMonthInstance = undefined;
        };
    }, initializationDependencies);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: "expirationMonthSecureField_container"
    });
};
const __TURBOPACK__default__export__ = ExpirationMonth;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/expirationYear/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js [app-ssr] (ecmascript)");
;
;
;
const ExpirationYear = (params)=>{
    const initializationDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitializationDependencies"])(params, [
        'placeholder'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSecureField"])('expirationYear', params).then((instance)=>window.expirationYearInstance = instance);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$util$2f$constants$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBOUNCE_TIME_RENDER"]);
        return ()=>{
            var _a;
            clearTimeout(timer);
            (_a = window.expirationYearInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationYearInstance = undefined;
        };
    }, initializationDependencies);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: "expirationYearSecureField_container"
    });
};
const __TURBOPACK__default__export__ = ExpirationYear;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/authenticator/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Creates a new authenticator instance for SuperToken authentication
 * This feature is disabled by deafult, to enable it, please contact the offical *Mercado Pago* support via developer's website: www.mercadopago.com/developers
 * @param amount - The amount to be processed on the payment request
 * @param payerEmail - The email of the payer
 * @returns Promise that resolves to an authenticator instance
 */ const createAuthenticator = (amount, payerEmail)=>__awaiter(void 0, void 0, void 0, function*() {
        const mp = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        if (!mp) {
            throw new Error('MercadoPago instance not found. Make sure to call initMercadoPago first.');
        }
        return yield mp.authenticator(amount, payerEmail);
    });
const __TURBOPACK__default__export__ = createAuthenticator;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getAccountPaymentMethods/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Retrieves account payment methods for authenticated users
 *
 * @param fastPaymentToken - Base64 encoded token data containing authentication and parameters
 * @returns Promise with account payment methods response
 */ const getAccountPaymentMethods = (fastPaymentToken)=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getAccountPaymentMethods(fastPaymentToken);
    });
const __TURBOPACK__default__export__ = getAccountPaymentMethods;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getCardId/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Retrieves card ID from a pseudotoken
 *
 * @param fastPaymentToken - Base64 encoded token data containing authentication
 * @param pseudotoken - The pseudotoken to get card ID for
 * @returns Promise with card ID response
 */ const getCardId = (fastPaymentToken, pseudotoken)=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getCardId(fastPaymentToken, pseudotoken);
    });
const __TURBOPACK__default__export__ = getCardId;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/updatePseudotoken/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
/**
 * Updates a pseudotoken with card token information
 *
 * @param fastPaymentToken - Base64 encoded token data containing authentication
 * @param pseudotoken - The pseudotoken to update
 * @param cardToken - The card token to associate with the pseudotoken
 * @returns Promise that resolves when update is complete
 */ const updatePseudotoken = (fastPaymentToken, pseudotoken, cardToken)=>__awaiter(void 0, void 0, void 0, function*() {
        const instanceMercadoPago = yield __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MercadoPagoInstance"].getInstance();
        return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.updatePseudotoken(fastPaymentToken, pseudotoken, cardToken);
    });
const __TURBOPACK__default__export__ = updatePseudotoken;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$brand$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/brand/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$cardPayment$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/cardPayment/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$payment$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/payment/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$statusScreen$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/statusScreen/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$wallet$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/wallet/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$coreMethods$2f$getIdentificationTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getIdentificationTypes/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$coreMethods$2f$getPaymentMethods$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getPaymentMethods/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$coreMethods$2f$getInstallments$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getInstallments/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$coreMethods$2f$getIssuers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getIssuers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$createCardToken$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/createCardToken/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$updateCardToken$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/updateCardToken/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$cardNumber$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/cardNumber/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$securityCode$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/securityCode/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$expirationDate$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/expirationDate/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$expirationMonth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/expirationMonth/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$secureFields$2f$expirationYear$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/secureFields/expirationYear/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$authenticator$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/authenticator/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$coreMethods$2f$getAccountPaymentMethods$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getAccountPaymentMethods/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$coreMethods$2f$getCardId$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/getCardId/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$coreMethods$2f$updatePseudotoken$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/coreMethods/updatePseudotoken/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript) <export default as initMercadoPago>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMercadoPago",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$mercadoPago$2f$initMercadoPago$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/cardPayment/index.js [app-ssr] (ecmascript) <export default as CardPayment>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardPayment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$cardPayment$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mercadopago$2f$sdk$2d$react$2f$esm$2f$bricks$2f$cardPayment$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mercadopago/sdk-react/esm/bricks/cardPayment/index.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=9e883_47aa7152._.js.map