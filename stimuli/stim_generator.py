"""
LING 30401: Psycholinguistics
Replication Study Stimuli Generator
Author: Kutay Serova
"""

import csv, re

def parse_source_line(line, past=False):
    # extracts stim number and sentence from raw string
    # trims preceding unicode whitespace
    raw_parser = re.compile(" ([0-9]+)\. (.+)")
    m_raw = raw_parser.search(line)
    template_num = m_raw.group(1)
    template = m_raw.group(2)
    
    # splits sentence into pieces 
    sent_parser = re.compile("(The \S+) (.+) (.+) (was|is) ?(.*) (\S+) / (\S+)")
    m_sent = sent_parser.search(template)
    subject = m_sent.group(1)
    preamble = m_sent.group(2)
    attractor = m_sent.group(3)
    verb = m_sent.group(4)
    postamble = m_sent.group(5)
    adj_subj = m_sent.group(6)
    adj_attr = m_sent.group(7)
    
    # defines manipulation sets for stim generations
    # each list = set of strings for insertion into template per manipulation
    attractor_num_set = ["SG", "PL"]
    verb_num_set = ["SG", "PL"]
    adj_set = [adj_subj, adj_attr]
    
    # list of stimuli generated from each template
    """
        type: dict
        @sentence: stimuli string
        @template: template
        @template_num: number of the template in source file
        @verb_number: verb number
        @attractor: attractor noun
        @adj_subj: adjective associated with subject
        @adj_attr: adjective associated with attractor
    """
    stim_set = list()
    
    for stim_verb_num in verb_num_set:
        for stim_attr_num in attractor_num_set:
            for stim_adj in adj_set:
                stim = dict()

                # generates sentence and adds to stim dictionary
                if past:
                    stim_verb = "was" if stim_verb_num == "SG" else ("were" if stim_verb_num == "PL" else "N/A")
                else:
                    stim_verb = "is" if stim_verb_num == "SG" else ("are" if stim_verb_num == "PL" else "N/A")
                
                stim_attr = attractor if stim_attr_num == "SG" else (attractor + "s" if stim_attr_num == "PL" else "N/A")
                sentence = " ".join([subject, preamble, stim_attr, stim_verb, postamble, stim_adj])
                stim["sentence"] = sentence
                
                # # tags
                # stim["grammatical"] = "T" if stim_verb_num == "SG" else ("F" if stim_verb_num == "PL" else "N/A")
                # stim["head-matching"] = "T" if stim_adj == adj_subj else "F"
                
                # manipulated features
                stim["verb_number"] = stim_verb_num
                stim["attractor_num"] = stim_attr_num
                stim["adjective"] = stim_adj
                
                # unmanipulated features
                stim["template"] = template
                stim["template_num"] = template_num
                stim["subject"] = subject
                stim["attractor"] = attractor
                stim["adj_subj"] = adj_subj
                stim["adj_attr"] = adj_subj
                                
                stim_set.append(stim)

    return stim_set

# returns generated stimuli
# @source (string): source file path containing stimuli templates line-by-line
# @past (bool): whether the output should be in past tense
# @return (list of dict): list of stimuli 
def generate_stimuli(source, past=False):
    
    # reads source file and splits into lines
    # @return: list of raw stimuli template string
    def get_source_data(source):
        with open(source, mode='r') as f:
            lines = f.readlines()
            f.close()
        return lines
    
    templates = get_source_data(source)
    stim_set = list()
    
    for t in templates:
        new_stims = parse_source_line(t)
        stim_set.extend(new_stims)
    
    return stim_set

def write_data(data, path):
    with open(path, mode="w") as f:
        keys = data[0].keys()
        w = csv.DictWriter(f, keys)
        w.writeheader()
        w.writerows(data)
        f.close()

def main(source, path, past=False):
    data = generate_stimuli(source, past=past)
    write_data(data, path)

if __name__ == "__main__":
    main(source="stim_templates.csv", path="target_stim_pres.csv", past=False)