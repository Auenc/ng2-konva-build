/* eslint-disable @angular-eslint/no-output-native */
import { Component, Input, Output, EventEmitter, ElementRef, ContentChildren, QueryList, inject, } from '@angular/core';
import { getName, createListener, applyNodeProps } from '../utils/index';
import Konva from 'konva';
import { updatePicture } from '../utils';
import { Group } from 'konva/lib/Group';
import { Layer } from 'konva/lib/Layer';
import { Shape } from 'konva/lib/Shape';
import { Sprite } from 'konva/lib/shapes/Sprite';
import * as i0 from "@angular/core";
export class CoreShapeComponent {
    shapes = new QueryList();
    set config(config) {
        this._config = config;
        this.uploadKonva(config);
    }
    get config() {
        return this._config;
    }
    mouseover = new EventEmitter();
    mousemove = new EventEmitter();
    mouseout = new EventEmitter();
    mouseenter = new EventEmitter();
    mouseleave = new EventEmitter();
    mousedown = new EventEmitter();
    mouseup = new EventEmitter();
    wheel = new EventEmitter();
    contextmenu = new EventEmitter();
    click = new EventEmitter();
    dblclick = new EventEmitter();
    touchstart = new EventEmitter();
    touchmove = new EventEmitter();
    touchend = new EventEmitter();
    tap = new EventEmitter();
    dbltap = new EventEmitter();
    dragstart = new EventEmitter();
    dragmove = new EventEmitter();
    dragend = new EventEmitter();
    nameNode = getName(inject(ElementRef).nativeElement.localName);
    cacheProps = {};
    _stage;
    _config;
    getStage() {
        return this._stage;
    }
    getConfig() {
        return this._config || {};
    }
    ngOnInit() {
        this.initKonva();
    }
    initKonva() {
        if (!this._stage) {
            this._stage = new Shape();
        }
        if (this.nameNode === 'Shape') {
            this._stage = new Shape();
        }
        else if (this.nameNode === 'Sprite') {
            this._stage = new Sprite(this.config);
        }
        else {
            this._stage = new Konva[this.nameNode](undefined);
        }
        const animationStage = this._stage.to.bind(this._stage);
        this._stage.to = (newConfig) => {
            animationStage(newConfig);
            setTimeout(() => {
                Object.keys(this._stage.attrs).forEach((key) => {
                    if (typeof this._stage.attrs[key] !== 'function') {
                        this.config[key] = this._stage.attrs[key];
                    }
                });
            }, 200);
        };
        if (this._config) {
            this.uploadKonva(this.config);
        }
    }
    uploadKonva(config) {
        if (!this._stage)
            return;
        const props = {
            ...config,
            ...createListener(this),
        };
        applyNodeProps(this, props, this.cacheProps);
        this.cacheProps = props;
    }
    ngAfterContentChecked() {
        this.shapes.forEach((item) => {
            if (this !== item) {
                if (this._stage instanceof Group || this._stage instanceof Layer) {
                    this._stage.add(item.getStage());
                }
                updatePicture(this._stage);
            }
        });
    }
    ngOnDestroy() {
        this._stage.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: CoreShapeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0", type: CoreShapeComponent, isStandalone: true, selector: "ko-shape, ko-layer, ko-circle, ko-fastlayer, ko-group, ko-label, ko-rect, ko-ellipse, ko-wedge, ko-line, ko-sprite, ko-image, ko-text, ko-text-path, ko-star, ko-ring, ko-arc, ko-tag, ko-path, ko-regular-polygon, ko-arrow, ko-transformer", inputs: { config: "config" }, outputs: { mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", mouseenter: "mouseenter", mouseleave: "mouseleave", mousedown: "mousedown", mouseup: "mouseup", wheel: "wheel", contextmenu: "contextmenu", click: "click", dblclick: "dblclick", touchstart: "touchstart", touchmove: "touchmove", touchend: "touchend", tap: "tap", dbltap: "dbltap", dragstart: "dragstart", dragmove: "dragmove", dragend: "dragend" }, queries: [{ propertyName: "shapes", predicate: CoreShapeComponent }], ngImport: i0, template: `<div><ng-content></ng-content></div>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: CoreShapeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ko-shape, ko-layer, ko-circle, ko-fastlayer, ko-group, ko-label, ko-rect, ko-ellipse, ko-wedge, ko-line, ko-sprite, ko-image, ko-text, ko-text-path, ko-star, ko-ring, ko-arc, ko-tag, ko-path, ko-regular-polygon, ko-arrow, ko-transformer',
                    standalone: true,
                    template: `<div><ng-content></ng-content></div>`,
                }]
        }], propDecorators: { shapes: [{
                type: ContentChildren,
                args: [CoreShapeComponent]
            }], config: [{
                type: Input
            }], mouseover: [{
                type: Output
            }], mousemove: [{
                type: Output
            }], mouseout: [{
                type: Output
            }], mouseenter: [{
                type: Output
            }], mouseleave: [{
                type: Output
            }], mousedown: [{
                type: Output
            }], mouseup: [{
                type: Output
            }], wheel: [{
                type: Output
            }], contextmenu: [{
                type: Output
            }], click: [{
                type: Output
            }], dblclick: [{
                type: Output
            }], touchstart: [{
                type: Output
            }], touchmove: [{
                type: Output
            }], touchend: [{
                type: Output
            }], tap: [{
                type: Output
            }], dbltap: [{
                type: Output
            }], dragstart: [{
                type: Output
            }], dragmove: [{
                type: Output
            }], dragend: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1zaGFwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzIta29udmEvc3JjL2xpYi9jb21wb25lbnRzL2NvcmUtc2hhcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFxRDtBQUNyRCxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixlQUFlLEVBQ2YsU0FBUyxFQUdULE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl6RSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsTUFBTSxFQUFnQixNQUFNLHlCQUF5QixDQUFDOztBQTJCL0QsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QixNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQXNCLENBQUM7SUFDN0MsSUFBYSxNQUFNLENBQUMsTUFBd0I7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFUyxTQUFTLEdBQ2pCLElBQUksWUFBWSxFQUFrQyxDQUFDO0lBQzNDLFNBQVMsR0FDakIsSUFBSSxZ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a0JBQWtCLDB3QkFHWixrQkFBa0IsNkJBTHpCLHNDQUFzQzs7MkZBRXJDLGtCQUFrQjtrQkFOOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQ04sOE9BQThPO29CQUNoUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7OEJBS0MsTUFBTTtzQkFETCxlQUFlO3VCQUFDLGtCQUFrQjtnQkFFdEIsTUFBTTtzQkFBbEIsS0FBSztnQkFRSSxTQUFTO3NCQUFsQixNQUFNO2dCQUVHLFNBQVM7c0JBQWxCLE1BQU07Z0JBRUcsUUFBUTtzQkFBakIsTUFBTTtnQkFFRyxVQUFVO3NCQUFuQixNQUFNO2dCQUVHLFVBQVU7c0JBQW5CLE1BQU07Z0JBRUcsU0FBUztzQkFBbEIsTUFBTTtnQkFFRyxPQUFPO3NCQUFoQixNQUFNO2dCQUVHLEtBQUs7c0JBQWQsTUFBTTtnQkFFRyxXQUFXO3NCQUFwQixNQUFNO2dCQUVHLEtBQUs7c0JBQWQsTUFBTTtnQkFFRyxRQUFRO3NCQUFqQixNQUFNO2dCQUVHLFVBQVU7c0JBQW5CLE1BQU07Z0JBRUcsU0FBUztzQkFBbEIsTUFBTTtnQkFFRyxRQUFRO3NCQUFqQixNQUFNO2dCQUVHLEdBQUc7c0JBQVosTUFBTTtnQkFFRyxNQUFNO3NCQUFmLE1BQU07Z0JBRUcsU0FBUztzQkFBbEIsTUFBTTtnQkFFRyxRQUFRO3NCQUFqQixNQUFNO2dCQUVHLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW5hdGl2ZSAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgaW5qZWN0LFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldE5hbWUsIGNyZWF0ZUxpc3RlbmVyLCBhcHBseU5vZGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IEtvbnZhQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rby1jb21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNoYXBlQ29uZmlnVHlwZXMgfSBmcm9tICcuLi91dGlscy9jb25maWdUeXBlcyc7XG5pbXBvcnQgeyBTaGFwZVR5cGVzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcGVUeXBlcyc7XG5pbXBvcnQgS29udmEgZnJvbSAna29udmEnO1xuaW1wb3J0IHsgdXBkYXRlUGljdHVyZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAna29udmEvbGliL0dyb3VwJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAna29udmEvbGliL0xheWVyJztcbmltcG9ydCB7IFNoYXBlIH0gZnJvbSAna29udmEvbGliL1NoYXBlJztcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlQ29uZmlnIH0gZnJvbSAna29udmEvbGliL3NoYXBlcy9TcHJpdGUnO1xuaW1wb3J0IHsgQXJjIH0gZnJvbSAna29udmEvbGliL3NoYXBlcy9BcmMnO1xuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICdrb252YS9saWIvc2hhcGVzL0Fycm93JztcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gJ2tvbnZhL2xpYi9zaGFwZXMvQ2lyY2xlJztcbmltcG9ydCB7IEVsbGlwc2UgfSBmcm9tICdrb252YS9saWIvc2hhcGVzL0VsbGlwc2UnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdrb252YS9saWIvc2hhcGVzL0ltYWdlJztcbmltcG9ydCB7IExhYmVsLCBUYWcgfSBmcm9tICdrb252YS9saWIvc2hhcGVzL0xhYmVsJztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdrb252YS9saWIvc2hhcGVzL0xpbmUnO1xuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2tvbnZhL2xpYi9zaGFwZXMvUGF0aCc7XG5pbXBvcnQgeyBSZWN0IH0gZnJvbSAna29udmEvbGliL3NoYXBlcy9SZWN0JztcbmltcG9ydCB7IFJlZ3VsYXJQb2x5Z29uIH0gZnJvbSAna29udmEvbGliL3NoYXBlcy9SZWd1bGFyUG9seWdvbic7XG5pbXBvcnQgeyBSaW5nIH0gZnJvbSAna29udmEvbGliL3NoYXBlcy9SaW5nJztcbmltcG9ydCB7IFN0YXIgfSBmcm9tICdrb252YS9saWIvc2hhcGVzL1N0YXInO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ2tvbnZhL2xpYi9zaGFwZXMvVGV4dCc7XG5pbXBvcnQgeyBUZXh0UGF0aCB9IGZyb20gJ2tvbnZhL2xpYi9zaGFwZXMvVGV4dFBhdGgnO1xuaW1wb3J0IHsgVHJhbnNmb3JtZXIgfSBmcm9tICdrb252YS9saWIvc2hhcGVzL1RyYW5zZm9ybWVyJztcbmltcG9ydCB7IFdlZGdlIH0gZnJvbSAna29udmEvbGliL3NoYXBlcy9XZWRnZSc7XG5pbXBvcnQgeyBGYXN0TGF5ZXIgfSBmcm9tICdrb252YS9saWIvRmFzdExheWVyJztcbmltcG9ydCB7IE5nS29udmFFdmVudE9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvbmdLb252YUV2ZW50T2JqZWN0JztcbmltcG9ydCB7IFByb3BzVHlwZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOlxuICAgICdrby1zaGFwZSwga28tbGF5ZXIsIGtvLWNpcmNsZSwga28tZmFzdGxheWVyLCBrby1ncm91cCwga28tbGFiZWwsIGtvLXJlY3QsIGtvLWVsbGlwc2UsIGtvLXdlZGdlLCBrby1saW5lLCBrby1zcHJpdGUsIGtvLWltYWdlLCBrby10ZXh0LCBrby10ZXh0LXBhdGgsIGtvLXN0YXIsIGtvLXJpbmcsIGtvLWFyYywga28tdGFnLCBrby1wYXRoLCBrby1yZWd1bGFyLXBvbHlnb24sIGtvLWFycm93LCBrby10cmFuc2Zvcm1lcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVNoYXBlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgS29udmFDb21wb25lbnQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSwgT25Jbml0XG57XG4gIEBDb250ZW50Q2hpbGRyZW4oQ29yZVNoYXBlQ29tcG9uZW50KVxuICBzaGFwZXMgPSBuZXcgUXVlcnlMaXN0PENvcmVTaGFwZUNvbXBvbmVudD4oKTtcbiAgQElucHV0KCkgc2V0IGNvbmZpZyhjb25maWc6IFNoYXBlQ29uZmlnVHlwZXMpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy51cGxvYWRLb252YShjb25maWcpO1xuICB9XG4gIGdldCBjb25maWcoKTogU2hhcGVDb25maWdUeXBlcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIEBPdXRwdXQoKSBtb3VzZW92ZXI6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIG1vdXNlbW92ZTogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgbW91c2VvdXQ6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIG1vdXNlZW50ZXI6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIG1vdXNlbGVhdmU6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIG1vdXNlZG93bjogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgbW91c2V1cDogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgd2hlZWw6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8V2hlZWxFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxXaGVlbEV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIGNvbnRleHRtZW51OiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFBvaW50ZXJFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxQb2ludGVyRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIGRibGNsaWNrOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaHN0YXJ0OiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFRvdWNoRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8VG91Y2hFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaG1vdmU6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8VG91Y2hFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxUb3VjaEV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIHRvdWNoZW5kOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFRvdWNoRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8VG91Y2hFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSB0YXA6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8VG91Y2hFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxUb3VjaEV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIGRibHRhcDogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxUb3VjaEV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFRvdWNoRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgZHJhZ3N0YXJ0OiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSBkcmFnbW92ZTogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgZHJhZ2VuZDogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PigpO1xuXG4gIHB1YmxpYyBuYW1lTm9kZToga2V5b2YgdHlwZW9mIFNoYXBlVHlwZXMgfCAnU2hhcGUnIHwgJ1Nwcml0ZScgPSBnZXROYW1lKFxuICAgIGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50LmxvY2FsTmFtZVxuICApIGFzIGtleW9mIHR5cGVvZiBTaGFwZVR5cGVzIHwgJ1NoYXBlJyB8ICdTcHJpdGUnO1xuXG4gIHByaXZhdGUgY2FjaGVQcm9wczogUHJvcHNUeXBlID0ge307XG4gIHByaXZhdGUgX3N0YWdlOlxuICAgIHwgU2hhcGVcbiAgICB8IEFyY1xuICAgIHwgQXJyb3dcbiAgICB8IENpcmNsZVxuICAgIHwgRWxsaXBzZVxuICAgIHwgSW1hZ2VcbiAgICB8IExhYmVsXG4gICAgfCBUYWdcbiAgICB8IExpbmVcbiAgICB8IFBhdGhcbiAgICB8IFJlY3RcbiAgICB8IFJlZ3VsYXJQb2x5Z29uXG4gICAgfCBSaW5nXG4gICAgfCBTcHJpdGVcbiAgICB8IFN0YXJcbiAgICB8IFRleHRcbiAgICB8IFRleHRQYXRoXG4gICAgfCBUcmFuc2Zvcm1lclxuICAgIHwgV2VkZ2VcbiAgICB8IEdyb3VwXG4gICAgfCBMYXllclxuICAgIHwgRmFzdExheWVyO1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogU2hhcGVDb25maWdUeXBlcztcblxuICBwdWJsaWMgZ2V0U3RhZ2UoKTpcbiAgICB8IFNoYXBlXG4gICAgfCBBcmNcbiAgICB8IEFycm93XG4gICAgfCBDaXJjbGVcbiAgICB8IEVsbGlwc2VcbiAgICB8IEltYWdlXG4gICAgfCBMYWJlbFxuICAgIHwgVGFnXG4gICAgfCBMaW5lXG4gICAgfCBQYXRoXG4gICAgfCBSZWN0XG4gICAgfCBSZWd1bGFyUG9seWdvblxuICAgIHwgUmluZ1xuICAgIHwgU3ByaXRlXG4gICAgfCBTdGFyXG4gICAgfCBUZXh0XG4gICAgfCBUZXh0UGF0aFxuICAgIHwgVHJhbnNmb3JtZXJcbiAgICB8IFdlZGdlXG4gICAgfCBHcm91cFxuICAgIHwgTGF5ZXJcbiAgICB8IEZhc3RMYXllciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWdlO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZygpOiBTaGFwZUNvbmZpZ1R5cGVzIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0S29udmEoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEtvbnZhKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc3RhZ2UpIHtcbiAgICAgIHRoaXMuX3N0YWdlID0gbmV3IFNoYXBlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWVOb2RlID09PSAnU2hhcGUnKSB7XG4gICAgICB0aGlzLl9zdGFnZSA9IG5ldyBTaGFwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uYW1lTm9kZSA9PT0gJ1Nwcml0ZScpIHtcbiAgICAgIHRoaXMuX3N0YWdlID0gbmV3IFNwcml0ZSh0aGlzLmNvbmZpZyBhcyBTcHJpdGVDb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGFnZSA9IG5ldyBLb252YVt0aGlzLm5hbWVOb2RlXSh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvblN0YWdlID0gdGhpcy5fc3RhZ2UudG8uYmluZCh0aGlzLl9zdGFnZSk7XG5cbiAgICB0aGlzLl9zdGFnZS50byA9IChuZXdDb25maWc6IFNoYXBlQ29uZmlnVHlwZXMpOiB2b2lkID0+IHtcbiAgICAgIGFuaW1hdGlvblN0YWdlKG5ld0NvbmZpZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fc3RhZ2UuYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RhZ2UuYXR0cnNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5jb25maWdba2V5XSA9IHRoaXMuX3N0YWdlLmF0dHJzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9jb25maWcpIHtcbiAgICAgIHRoaXMudXBsb2FkS29udmEodGhpcy5jb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1cGxvYWRLb252YShjb25maWc6IFNoYXBlQ29uZmlnVHlwZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3N0YWdlKSByZXR1cm47XG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAuLi5jcmVhdGVMaXN0ZW5lcih0aGlzKSxcbiAgICB9O1xuICAgIGFwcGx5Tm9kZVByb3BzKHRoaXMsIHByb3BzLCB0aGlzLmNhY2hlUHJvcHMpO1xuICAgIHRoaXMuY2FjaGVQcm9wcyA9IHByb3BzO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2hhcGVzLmZvckVhY2goKGl0ZW06IENvcmVTaGFwZUNvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMgIT09IGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YWdlIGluc3RhbmNlb2YgR3JvdXAgfHwgdGhpcy5fc3RhZ2UgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgIHRoaXMuX3N0YWdlLmFkZChpdGVtLmdldFN0YWdlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVBpY3R1cmUodGhpcy5fc3RhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhZ2UuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=