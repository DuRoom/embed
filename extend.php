<?php

/*
 * This file is part of DuRoom.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use DuRoom\Extend;
use DuRoom\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface as Request;

return [
    (new Extend\Frontend('forum'))
        ->route(
            '/embed/{id:\d+(?:-[^/]*)?}[/{near:[^/]*}]',
            'embed.discussion',
            function (Document $document, Request $request) {
                // Add the discussion content to the document so that the
                // payload will be included on the page and the JS app will be
                // able to render the discussion immediately.
                resolve(DuRoom\Forum\Content\Discussion::class)($document, $request);

                resolve(DuRoom\Frontend\Content\Assets::class)->forFrontend('embed')($document, $request);
            }
        ),

    (new Extend\Frontend('embed'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
];
