declare namespace feed {
  interface IFetchFeedsQuery {
    id?: string
    ids?: Array<string>
    tags?: Array<string>
    tagmode?: 'all' | 'any'
    nojsoncallback: '1' | '0'
  }
}

export = feed
