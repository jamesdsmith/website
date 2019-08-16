from jinja2 import Template
import json

with open('template.html', 'r') as temp:
    with open('data.json', 'r') as data:
        parsed_data = json.loads(data.read())
        template = Template(temp.read())
        site = template.render(parsed_data)
        with open('index.html', 'w') as out:
            out.write(site)
