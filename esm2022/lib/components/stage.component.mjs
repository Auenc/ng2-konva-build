/* eslint-disable @angular-eslint/no-output-native */
import { Component, Input, Output, EventEmitter, ElementRef, ContentChildren, QueryList, inject, } from '@angular/core';
import { CoreShapeComponent as CoreShape } from './core-shape.component';
import { updatePicture, createListener, applyNodeProps } from '../utils/index';
import { Stage } from 'konva/lib/Stage';
import { Layer } from 'konva/lib/Layer';
import * as i0 from "@angular/core";
export class StageComponent {
    nodeContainer = inject(ElementRef).nativeElement;
    shapes = new QueryList();
    set config(config) {
        this._config = config;
        if (!this._stage) {
            this._stage = new Stage({
                ...config,
                container: this.nodeContainer,
            });
            this.uploadKonva(config);
        }
        else {
            this.uploadKonva(config);
        }
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
    _stage;
    _config;
    cacheProps = {};
    getStage() {
        return this._stage;
    }
    getConfig() {
        return this._config;
    }
    uploadKonva(config) {
        const props = {
            ...config,
            ...createListener(this),
        };
        applyNodeProps(this, props, this.cacheProps);
        this.cacheProps = props;
    }
    ngAfterContentInit() {
        this.shapes.forEach((item) => {
            if (!(item.getStage() instanceof Layer)) {
                throw 'You can only add Layer Nodes to Stage Nodes!';
            }
            this._stage.add(item.getStage());
            updatePicture(this._stage);
        });
    }
    ngOnDestroy() {
        this._stage.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: StageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0", type: StageComponent, isStandalone: true, selector: "ko-stage", inputs: { config: "config" }, outputs: { mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", mouseenter: "mouseenter", mouseleave: "mouseleave", mousedown: "mousedown", mouseup: "mouseup", wheel: "wheel", contextmenu: "contextmenu", click: "click", dblclick: "dblclick", touchstart: "touchstart", touchmove: "touchmove", touchend: "touchend", tap: "tap", dbltap: "dbltap", dragstart: "dragstart", dragmove: "dragmove", dragend: "dragend" }, queries: [{ propertyName: "shapes", predicate: CoreShape }], ngImport: i0, template: `<div><ng-content></ng-content></div>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: StageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ko-stage',
                    standalone: true,
                    template: `<div><ng-content></ng-content></div>`,
                }]
        }], propDecorators: { shapes: [{
                type: ContentChildren,
                args: [CoreShape]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLWtvbnZhL3NyYy9saWIvY29tcG9uZW50cy9zdGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JELE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosVUFBVSxFQUNWLGVBQWUsRUFDZixTQUFTLEVBRVQsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVV4QyxNQUFNLE9BQU8sY0FBYztJQUdqQixhQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUM3QixNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQWEsQ0FBQztJQUNoRSxJQUFhLE1BQU0sQ0FBQyxNQUF1QjtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUM7Z0JBQ3RCLEdBQUcsTUFBTTtnQkFDVCxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsTUFB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bkIsTUFBTTtnQkFFRyxTQUFTO3NCQUFsQixNQUFNO2dCQUVHLE9BQU87c0JBQWhCLE1BQU07Z0JBRUcsS0FBSztzQkFBZCxNQUFNO2dCQUVHLFdBQVc7c0JBQXBCLE1BQU07Z0JBRUcsS0FBSztzQkFBZCxNQUFNO2dCQUVHLFFBQVE7c0JBQWpCLE1BQU07Z0JBRUcsVUFBVTtzQkFBbkIsTUFBTTtnQkFFRyxTQUFTO3NCQUFsQixNQUFNO2dCQUVHLFFBQVE7c0JBQWpCLE1BQU07Z0JBRUcsR0FBRztzQkFBWixNQUFNO2dCQUVHLE1BQU07c0JBQWYsTUFBTTtnQkFFRyxTQUFTO3NCQUFsQixNQUFNO2dCQUVHLFFBQVE7c0JBQWpCLE1BQU07Z0JBRUcsT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtbmF0aXZlICovXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRWxlbWVudFJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uRGVzdHJveSxcbiAgaW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVTaGFwZUNvbXBvbmVudCBhcyBDb3JlU2hhcGUgfSBmcm9tICcuL2NvcmUtc2hhcGUuY29tcG9uZW50JztcbmltcG9ydCB7IHVwZGF0ZVBpY3R1cmUsIGNyZWF0ZUxpc3RlbmVyLCBhcHBseU5vZGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IEtvbnZhQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rby1jb21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAna29udmEvbGliL1N0YWdlJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAna29udmEvbGliL0xheWVyJztcbmltcG9ydCB7IENvbnRhaW5lckNvbmZpZyB9IGZyb20gJ2tvbnZhL2xpYi9Db250YWluZXInO1xuaW1wb3J0IHsgTmdLb252YUV2ZW50T2JqZWN0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9uZ0tvbnZhRXZlbnRPYmplY3QnO1xuaW1wb3J0IHsgUHJvcHNUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrby1zdGFnZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhZ2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBLb252YUNvbXBvbmVudCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95XG57XG4gIHByaXZhdGUgbm9kZUNvbnRhaW5lciA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuICBAQ29udGVudENoaWxkcmVuKENvcmVTaGFwZSkgc2hhcGVzID0gbmV3IFF1ZXJ5TGlzdDxDb3JlU2hhcGU+KCk7XG4gIEBJbnB1dCgpIHNldCBjb25maWcoY29uZmlnOiBDb250YWluZXJDb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgaWYgKCF0aGlzLl9zdGFnZSkge1xuICAgICAgdGhpcy5fc3RhZ2UgPSBuZXcgU3RhZ2Uoe1xuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlQ29udGFpbmVyLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwbG9hZEtvbnZhKGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBsb2FkS29udmEoY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCkgbW91c2VvdmVyOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZW1vdmU6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIG1vdXNlb3V0OiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZWVudGVyOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZWxlYXZlOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZWRvd246IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIG1vdXNldXA6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIHdoZWVsOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFdoZWVsRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8V2hlZWxFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSBjb250ZXh0bWVudTogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxQb2ludGVyRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8UG9pbnRlckV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSBkYmxjbGljazogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgdG91Y2hzdGFydDogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxUb3VjaEV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFRvdWNoRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgdG91Y2htb3ZlOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFRvdWNoRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8VG91Y2hFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaGVuZDogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxUb3VjaEV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFRvdWNoRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgdGFwOiBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PFRvdWNoRXZlbnQ+PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8VG91Y2hFdmVudD4+KCk7XG4gIEBPdXRwdXQoKSBkYmx0YXA6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8VG91Y2hFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxUb3VjaEV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIGRyYWdzdGFydDogRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8TmdLb252YUV2ZW50T2JqZWN0PE1vdXNlRXZlbnQ+PigpO1xuICBAT3V0cHV0KCkgZHJhZ21vdmU6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpIGRyYWdlbmQ6IEV2ZW50RW1pdHRlcjxOZ0tvbnZhRXZlbnRPYmplY3Q8TW91c2VFdmVudD4+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPE5nS29udmFFdmVudE9iamVjdDxNb3VzZUV2ZW50Pj4oKTtcblxuICBwcml2YXRlIF9zdGFnZTogU3RhZ2U7XG4gIHByaXZhdGUgX2NvbmZpZzogQ29udGFpbmVyQ29uZmlnO1xuICBwcml2YXRlIGNhY2hlUHJvcHM6IFByb3BzVHlwZSA9IHt9O1xuXG4gIHB1YmxpYyBnZXRTdGFnZSgpOiBTdGFnZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWdlO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZygpOiBDb250YWluZXJDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cblxuICBwcml2YXRlIHVwbG9hZEtvbnZhKGNvbmZpZzogQ29udGFpbmVyQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAuLi5jcmVhdGVMaXN0ZW5lcih0aGlzKSxcbiAgICB9O1xuICAgIGFwcGx5Tm9kZVByb3BzKHRoaXMsIHByb3BzLCB0aGlzLmNhY2hlUHJvcHMpO1xuICAgIHRoaXMuY2FjaGVQcm9wcyA9IHByb3BzO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2hhcGVzLmZvckVhY2goKGl0ZW06IENvcmVTaGFwZSkgPT4ge1xuICAgICAgaWYgKCEoaXRlbS5nZXRTdGFnZSgpIGluc3RhbmNlb2YgTGF5ZXIpKSB7XG4gICAgICAgIHRocm93ICdZb3UgY2FuIG9ubHkgYWRkIExheWVyIE5vZGVzIHRvIFN0YWdlIE5vZGVzISc7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGFnZS5hZGQoPExheWVyPml0ZW0uZ2V0U3RhZ2UoKSk7XG4gICAgICB1cGRhdGVQaWN0dXJlKHRoaXMuX3N0YWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YWdlLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19