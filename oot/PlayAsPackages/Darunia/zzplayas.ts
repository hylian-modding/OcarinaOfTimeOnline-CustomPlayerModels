import { IPlugin, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { bus } from 'modloader64_api/EventHandler';
import { OotOnlineEvents } from './OotoAPI/OotoAPI';
import path from 'path';
import { IOOTCore } from 'modloader64_api/OOT/OOTAPI';
import { InjectCore } from 'modloader64_api/CoreInjection';

class zzdata {
  adult_model!: string;
  child_model!: string;
  anim_file!: string;
  adult_icon!: string;
  child_icon!: string;
}

class zzplayas implements IPlugin {
  ModLoader!: IModLoaderAPI;
  pluginName?: string | undefined;
  @InjectCore()
  core!: IOOTCore;

  preinit(): void { }
  init(): void {
    let zz: zzdata = (this as any)['metadata']['zzplayas'];
    if (zz.adult_model !== '') {
      bus.emit(
        OotOnlineEvents.CUSTOM_MODEL_APPLIED_ADULT,
        path.resolve(path.join(__dirname, zz.adult_model))
      );
    }
    if (zz.child_model !== '') {
      bus.emit(
        OotOnlineEvents.CUSTOM_MODEL_APPLIED_CHILD,
        path.resolve(path.join(__dirname, zz.child_model))
      );
    }
    if (zz.anim_file !== '') {
      bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_ANIMATIONS, path.resolve(path.join(__dirname, zz.anim_file)));
    }
    if (zz.adult_icon !== '') {
      bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_ICON_ADULT, path.resolve(path.join(__dirname, zz.adult_icon)));
    }
    if (zz.child_icon !== '') {
      bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_ICON_CHILD, path.resolve(path.join(__dirname, zz.child_icon)));
    }
  }
  postinit(): void { }
  onTick(): void { }
}

module.exports = zzplayas;
