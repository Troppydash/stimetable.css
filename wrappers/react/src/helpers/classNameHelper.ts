export function combiner( list: string[] ): string {
    let final = '';
    list.forEach( ( className ) => {
        if ( className.length !== 0 ) {
            final += className + ' ';
        }
    } );
    return final.slice(0, -1);
}

export function optionalClassName( flag: boolean | undefined, className: string ): string {
    return flag ? className : '';
}
