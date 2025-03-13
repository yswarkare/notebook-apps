import { TransformOptions, TransformMetadata, TransformFnParams } from 'class-transformer';

export class TransformOpts implements TransformMetadata {
  target: Function;
  propertyName: string;
  transformFn: (params: TransformFnParams) => any;
  options: TransformOptions;

}
