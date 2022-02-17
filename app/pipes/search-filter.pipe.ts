import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

    transform(value: any, args: string): any {

        if ( !value ) return null;
        if ( !args ) return value;

        args = args.toLowerCase();

        return value.filter(s => {
            return s.date.toLowerCase().includes(args)
                || s.rocket.toLowerCase().includes(args)
                || s.mission.toLowerCase().includes(args)
                || s.site.toLowerCase().includes(args);
        });
    }
}
