/**
 * Created by Vicky on 6/13/2017.
 */
function extract(input) {
    input = input.join('\n');
    let words = new Set();
    let regex = /\w+/g;
    let matches = input.match(regex).map(a => a.toLowerCase());
    for (let match of matches) {
        words.add(match);
    }

    console.log([...words.values()].join(", "));

}

extract(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.'
    ,
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.',]
);